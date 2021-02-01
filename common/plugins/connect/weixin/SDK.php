<?php

/**
 * @link http://www.shopwind.net/
 * @copyright Copyright (c) 2018 shopwind, Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license http://www.shopwind.net/license/
 */

namespace common\plugins\connect\weixin;

use yii;

use common\models\WeixinSettingModel;
use common\library\Basewind;

/**
 * @Id SDK.php 2018.6.6 $
 * @author mosir
 */

class SDK
{
	/**
	 * 插件网关
	 * @param string $gateway
	 */
	protected $gateway = 'https://open.weixin.qq.com/connect/qrconnect';
	
	/**
	 * 商户ID
	 * @param string $appId
	 */
	public $appId = null;

	/**
	 * 商户key
	 * @param string $appKey
	 */
	public $appKey = null;

	/**
	 * 返回地址
	 * @param string $redirect_uri
	 */
	public $redirect_uri = null;

	/**
	 * 构造函数
	 */
	public function __construct(array $config)
	{
		foreach($config as $key => $value) {
            $this->$key = $value;
        }
	}
	
	public function getAccessToken($code = '')
	{
		$response = false;
		
		if($code)
		{
			if($result = Basewind::curl($this->getOpenIdUrl($code))) {
				$response = json_decode($result);
				$unionid = isset($response->unionid) ? $response->unionid : $response->openid;
				$response->unionid = $unionid;
			}
		}
		return $response;
	}
	
	public function getUserInfo($resp = null)
	{
		$response = false;
		
		if($resp->access_token) 
		{
			$url = "https://api.weixin.qq.com/sns/userinfo?access_token=".$resp->access_token."&openid=".$resp->openid;
			$response = Basewind::curl($url);
			$response = (object)json_decode($response, true);
		}
		return $response;
	}
	
	public function getAuthorizeURL()
	{
		$data = array(
			'gateway'       => $this->gateway,
			'appId'			=> $this->appId,
			'appKey'		=> $this->appKey,
			'redirect_uri'	=> $this->redirect_uri,
			'response_type' => 'code',
			'scope' 		=> 'snsapi_login',
			'state' 		=> mt_rand()
		);
		if(Basewind::isWeixin())
		{
			// 读取微信公众号的
			if(!($config = WeixinSettingModel::find()->select('appid,appsecret')->where(['userid' => 0])->asArray()->one())) {
				$config = array();
			}
			
			$data['gateway']= 'https://open.weixin.qq.com/connect/oauth2/authorize';
			$data['appId']	= $config['appid'];
			$data['appKey'] = $config['appsecret'];
			$data['scope'] 	= 'snsapi_userinfo';
		}
		extract($data);
		
		$url = $gateway.'?appid='.$appId.'&redirect_uri='.$redirect_uri.'&response_type='.$response_type.'&scope='.$scope.'&state='.$state.'#wechat_redirect';
		
		return $url;
	}
	
	private function getOpenIdUrl($code = '')
	{
		$gateway = 'https://api.weixin.qq.com/sns/oauth2/access_token';
		$url = $gateway.'?appid='.$this->appId.'&secret='.$this->appKey;
		if(Basewind::isWeixin())
		{
			// 读取微信公众号的
			if(($config = WeixinSettingModel::find()->select('appid,appsecret')->where(['userid' => 0])->asArray()->one())) {
				$url = $gateway.'?appid='.$config['appid'].'&secret='.$config['appsecret'];
			}
		}
		return $url .'&code='.$code.'&grant_type=authorization_code';
	}
}