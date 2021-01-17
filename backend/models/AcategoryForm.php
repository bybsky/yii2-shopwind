<?php

/**
 * @link http://www.shopwind.net/
 * @copyright Copyright (c) 2018 shopwind, Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license http://www.shopwind.net/license/
 */

namespace backend\models;

use Yii;
use yii\base\Model;

use common\models\AcategoryModel;
use common\library\Language;

/**
 * @Id AcategoryForm.php 2018.8.22 $
 * @author mosir
 */
class AcategoryForm extends Model
{
	public $cate_id = 0;
	public $errors = null;
	
	public function valid($post)
	{
		if(empty($post->cate_name)) {
			$this->errors = Language::get('cate_name_empty');
			return false;
		}
		
		// edit
		if($this->cate_id) {
			
			// 不能将当前分类的上级设置到当前分类的下级
			if(($childId = AcategoryModel::getDescendantIds($this->cate_id, 0, true, false, false))) {
				if(in_array($post->parent_id, (array)$childId)) {
					$this->errors = Language::get('parent_error');
					return false;
				}
			}
			if($this->cate_id == $post->parent_id) {
				$this->errors = Language::get('parent_error');
				return false;
			}
		}
		
		return true;
	}
	
	public function save($post, $valid = true)
	{
		if($valid === true && !$this->valid($post)) {
			return false;
		}
		
		if(!$this->cate_id || !($model = AcategoryModel::find()->where(['store_id' => 0, 'cate_id' => $this->cate_id])->one())) {
			$model = new AcategoryModel();
		}
		
        $model->cate_name = $post->cate_name;
		$model->parent_id = $post->parent_id;
		
		// 不应设置该值，理由为：如果修改了该值，那么该分类的下级分类理应也要修改为相应的显示或隐藏，但该操作也有有可能修改分类的上级
		// 这样会导致控制了新的下级分类的显示或隐藏，极不合理
		// $model->if_show = $post->if_show;
		$model->sort_order = $post->sort_order ? $post->sort_order : 255;
		
		return $model->save() ? true : false;
	}
}
