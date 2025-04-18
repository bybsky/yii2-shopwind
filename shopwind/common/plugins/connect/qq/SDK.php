<?php

/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 */

namespace common\plugins\connect\qq;

use yii;

/**
 * @Id SDK.php 2018.6.5 $
 * @author mosir
 */

class SDK
{
	//const GET_AUTH_CODE_URL = "https://graph.qq.com/oauth2.0/authorize";
	const GET_ACCESS_TOKEN_URL = "https://graph.qq.com/oauth2.0/token";
	const GET_OPENID_URL = "https://graph.qq.com/oauth2.0/me";
	const GET_USER_INFO_URL = "https://graph.qq.com/user/get_user_info";

	/**
	 * 插件网关
	 * @var string $gateway
	 */
	protected $gateway = null;

	/**
	 * 商户ID
	 * @var string $appId
	 */
	public $appId = null;

	/**
	 * 商户key
	 * @var string $appKey
	 */
	public $appKey = null;

	/**
	 * 返回地址
	 * @var string $redirect_uri
	 */
	public $redirect_uri = null;

	/**
	 * 抓取错误
	 */
	public $errors;

	/**
	 * 构造函数
	 */
	public function __construct(array $config)
	{
		foreach ($config as $key => $value) {
			$this->$key = $value;
		}
	}

	public function getAccessToken($code = '')
	{
		if (!$code) {
			return false;
		}

		//-------请求参数列表
		$keysArr = array(
			"grant_type" 	=> "authorization_code",
			"client_id" 	=> $this->appId,
			"redirect_uri" 	=> $this->redirect_uri,
			"client_secret" => $this->appKey,
			"code" 			=> $code
		);

		//------构造请求access_token的url
		$token_url = $this->combineUrl(self::GET_ACCESS_TOKEN_URL, $keysArr);
		$response = $this->get_distant_contents($token_url);
		if (strpos($response, "callback") !== false) {

			$lpos = strpos($response, "(");
			$rpos = strrpos($response, ")");
			$response  = substr($response, $lpos + 1, $rpos - $lpos - 1);
			$msg = json_decode($response);

			if (isset($msg->error)) {
				$this->errors = $msg->error_description;
				return false;
			}
		}
		$params = [];
		parse_str($response, $params);
		$openid = $this->get_openid($params["access_token"]);
		$response = (object)array_merge($params, ['unionid' => $openid, 'openid' => $openid]);

		return $response;
	}

	public function getUserInfo($resp = null)
	{
		if (!$resp->access_token) {
			return false;
		}
		
		$keysArr = array(
			"oauth_consumer_key" => $this->appId,
			"access_token" 		=> $resp->access_token,
			"openid" 			=> $resp->openid
		);
		$url = $this->combineUrl(self::GET_USER_INFO_URL, $keysArr);
		$response = json_decode($this->get_distant_contents($url));

		//检查返回ret判断api是否成功调用
		if ($response->ret != 0) {
			$this->errors = $response->msg;
			return false;
		}

		return $response;
	}

	public function combineUrl($baseurl, $arr)
	{
		$combined = $baseurl . "?";
		$value = array();
		foreach ($arr as $key => $val) {
			$value[] = "$key=$val";
		}
		$imstr = implode("&", $value);
		$combined .= ($imstr);
		return $combined;
	}
	public function get_distant_contents($url)
	{
		//if (ini_get("allow_url_fopen") == "1") {
		// $response = file_get_contents($url);
		//}else{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_URL, $url);
		$response =  curl_exec($ch);
		curl_close($ch);
		//}
		//-------请求为空
		if (empty($response)) {
			return false;
		}
		return $response;
	}
	public function get_openid($access_token)
	{
		//-------请求参数列表
		$keysArr = array("access_token" => $access_token);
		$graph_url = $this->combineUrl(self::GET_OPENID_URL, $keysArr);

		$response = $this->get_distant_contents($graph_url);

		//--------检测错误是否发生
		if (strpos($response, "callback") !== false) {
			$lpos = strpos($response, "(");
			$rpos = strrpos($response, ")");
			$response = substr($response, $lpos + 1, $rpos - $lpos - 1);
		}

		$user = json_decode($response);
		if (isset($user->error)) {
			$this->errors = $user->error_description;
			return false;
		}
		return $user->openid;
	}
}
