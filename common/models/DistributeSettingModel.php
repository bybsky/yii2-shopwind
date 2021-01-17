<?php

/**
 * @link http://www.shopwind.net/
 * @copyright Copyright (c) 2018 shopwind, Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license http://www.shopwind.net/license/
 */

namespace common\models;

use Yii;
use yii\db\ActiveRecord;
use yii\helpers\ArrayHelper;

use common\library\Promotool;

/**
 * @Id DistributeSettingModel.php 2018.10.22 $
 * @author mosir
 */

class DistributeSettingModel extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%distribute_setting}}';
    }
	
	// 关联表
	public function getGoods()
	{
		return parent::hasOne(GoodsModel::className(), ['goods_id' => 'item_id']);
	}
	
	/** 检测三级分销功能是否可用 
	 *  @var type  string example: goods|store|register
	 */
	public static function isAvailable($type = 'goods', $item_id = 0)
	{
		// 后台是否开启（该开关为预留）
		//if(!parent::find()->where(['type' => $type, 'item_id' => 0, 'enabled' => 1])->exists()) {
			//return false;
		//}
		
		// 供货商是否开启
		if(in_array($type, ['goods', 'store']) && ($item_id > 0)) {
			if(!parent::find()->where(['type' => $type, 'item_id' => $item_id, 'enabled' => 1])->exists()) {
				return false;
			}
		}
		
		// 用户是否已购买，并在使用期限内
		if(!Promotool::getInstance('distribute')->build(['store_id' => Yii::$app->user->id])->checkAvailable(true)) {
			return false;
		}
		
		return true;
	}
	
	/* 三级分销邀请数据 */
	public static function getInvite($invite = '')
	{
		if(empty($invite) || !($invite = json_decode(base64_decode($invite)))) {
			return false;
		}
	
		if(!in_array($invite->type, ['goods', 'store', 'register'])) {
			return false;
		}
		
		if(!self::isAvailable($invite->type)) {
			return false;
		}
		
		// $invite = ['type' => 'goods', 'id' => 3, 'uid' => 1]
		// $invite = ['type' => 'register', 'id' => 0, 'uid' => 2] ...
		if(($invites = Yii::$app->session->get('invite'))) {
			$invites[$invite->type][$invite->id] = $invite->uid;
		} 
		else {
			$invites = array();
			$invites[$invite->type][$invite->id] = $invite->uid;
		}
		
		return $invites;
	}
	
	/* 获取返佣比率 */
	public static function getRatio($type = 'goods', $item_id = 0, $store_id = 0)
	{
		if(!in_array($type, ['goods', 'store']) || !$item_id) {
			return false;
		}
		if(!($query = parent::find()->select('ratio1,ratio2,ratio3')->where(['type' => $type, 'item_id' => $item_id, 'enabled' => 1])->one())) {
			return false;
		}
		if($query->ratio1 < 0 || $query->ratio1 >= 1) $query->ratio1 = 0;
		if($query->ratio2 < 0 || $query->ratio2 >= 1) $query->ratio2 = 0;
		if($query->ratio3 < 0 || $query->ratio3 >= 1) $query->ratio3 = 0;
		
		if($query->ratio1 == 0 && $query->ratio2 == 0 && $query->ratio3 == 0) {
			return false;
		}
		
		return ArrayHelper::toArray($query);
	}
	
	/** 获取三级分销数据，以此作为订单成交后，进行返佣 
	 *  先查询订单中的商品，是否有哪个商品是通过分销商品推广链接进来的，
	 *  如果是，则取这个商品的三级返佣比率
	 *  如果不是，查询是不是通过分销店铺推广链接进来的，如果是，则所有订单中的商品取分销店铺的三级返佣比率 
	 */
	public static function orderInvite($list = array())
	{
		$invites = Yii::$app->session->get('invite');
		if(!$invites || (!isset($invites['goods']) && !isset($invites['store']))) {
			return $list;
		}
		
		//$store_id = $list['store_id'];
		foreach($list['items'] as $key => $value)
		{
			// 从分销商品推广链接进来的
			if(in_array($value['goods_id'], array_keys($invites['goods']))) {
				$ratio = self::getRatio('goods', $value['goods_id']);
			}
			// 如果是从分销店铺推广链接进来的
			else {
				// 暂不涉及
				//$ratio = self::getRatio('store', $store_id);
			}
			
			$uid = $invites['goods'][$value['goods_id']];
			$list['items'][$key]['invite'] = $ratio ? ['type' => 'goods', 'ratio' => $ratio, 'uid' => $uid] : '';
		}
		return $list;
	}
}
