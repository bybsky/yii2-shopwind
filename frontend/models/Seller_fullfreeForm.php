<?php

/**
 * @link http://www.shopwind.net/
 * @copyright Copyright (c) 2018 shopwind, Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license http://www.shopwind.net/license/
 */

namespace frontend\models;

use Yii;
use yii\base\Model; 
use yii\helpers\ArrayHelper;

use common\models\PromotoolSettingModel;

use common\library\Language;
use common\library\Timezone;
use common\library\Promotool;

/**
 * @Id Seller_fullfreeForm.php 2018.11.13 $
 * @author luckey
 */
class Seller_fullfreeForm extends Model
{
	public $store_id = 0;
	public $appid = 'fullfree';
	public $errors = null;

	public function valid($post)
	{
		if(empty($post->amount) && empty($post->quantity)) {
			$this->errors = Language::get('not_allempty');
			return false;
		}

		return true;
	}
	
	public function save($post, $valid = true)
	{
		if($valid === true && !$this->valid($post)) {
			return false;
		}
		
		if(($appAvailable = Promotool::getInstance($this->appid)->build(['store_id' => $this->store_id])->checkAvailable(true, true)) !== true) {
			$this->errors = Language::get($appAvailable['msg']);
			return false;
		}

		if(!($model = PromotoolSettingModel::find()->where(['appid' => $this->appid, 'store_id' => $this->store_id])->orderBy(['psid' => SORT_DESC])->one())) {
			$model = new PromotoolSettingModel();
			$model->add_time = Timezone::gmtime();
		}
		
		$post->amount 	= abs(floatval($post->amount));
		$post->quantity = $post->quantity;
		
		$model->appid = $this->appid;
		$model->store_id = $this->store_id;
		$model->rules = serialize(ArrayHelper::toArray($post));
		$model->status = intval(Yii::$app->request->post('status'));
		
		if(!$model->save()) {
			$this->errors = $model->errors;
			return false;
		}
		PromotoolSettingModel::deleteAll(['and', ['appid' => $this->appid], ['store_id' => $this->store_id], ['!=', 'psid', $model->psid]]);
		return true;
	}
}
