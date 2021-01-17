<?php

/**
 * @link http://www.shopwind.net/
 * @copyright Copyright (c) 2018 shopwind, Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license http://www.shopwind.net/license/
 */

namespace backend\controllers;

use Yii;
use yii\helpers\Url;

use common\models\WeixinSettingModel;
use common\models\WeixinMenuModel;
use common\models\WeixinReplyModel;
use common\models\UploadedFileModel;

use common\library\Basewind;
use common\library\Language;
use common\library\Message;
use common\library\Resource;
use common\library\Page;
use common\library\Plugin;
use common\library\Weixin;

/**
 * @Id WeixinController.php 2018.8.27 $
 * @author mosir
 */

class WeixinController extends \common\controllers\BaseAdminController
{
	/**
	 * 初始化
	 */
	public function init()
	{
		parent::init();
	}
	
	/* 自动回复列表 */
	public function actionIndex()
	{
		$post = Basewind::trimAll(Yii::$app->request->get(), true, ['rp', 'page']);
		
		if(!Yii::$app->request->isAjax) 
		{
			$this->params['_foot_tags'] = Resource::import('jquery.plugins/flexigrid.js');
			$this->params['page'] = Page::seo(['title' => Language::get('weixin_reply')]);
			return $this->render('../weixin.reply.html', $this->params);
		}
		else
		{
			$query = WeixinReplyModel::find()->where(['and', ['userid' => 0], ['in', 'action', ['beadded','autoreply','smartreply']]])->indexBy('reply_id');
			
			$orderFields = ['reply_id','type','action'];
			if(in_array($post->sortname, $orderFields) && in_array(strtolower($post->sortorder), ['asc', 'desc'])) {
				$query->orderBy([$post->sortname => strtolower($post->sortorder) == 'asc' ? SORT_ASC : SORT_DESC]);
			} else $query->orderBy(['userid' => SORT_ASC]);
			
			$page = Page::getPage($query->count(), $post->rp ? $post->rp : 10);
			
			$result = ['page' => $post->page, 'total' => $query->count()];
			foreach ($query->offset($page->offset)->limit($page->limit)->asArray()->each() as $key => $val)
			{
				$list = array();
				$list['operation'] = "<a class='btn red' onclick=\"fg_delete({$key},'weixin', 'deletereply')\"><i class='fa fa-trash-o'></i>删除</a><a class='btn blue' href='".Url::toRoute(['weixin/editreply', 'id' => $key])."'><i class='fa fa-pencil-square-o'></i>编辑</a>";
				$list['reply_id']  = $key;
				$list['action']    = Language::get($val['action']);
				$list['rule_name'] = $val['action'] == 'smartreply' ? $val['rule_name'] : '-';
				$list['keywords']  = $val['action'] == 'smartreply' ? $val['keywords'] : '-';
				$list['type'] 	   = $val['type'] ? Language::get('imgmsg') : Language::get('textmsg');
				$list['description']   = "<span>{$val['description']}</span>";
				$result['list'][$key]= $list;
			}
			return Page::flexigridXML($result);
		}
	}
	/* 微信设置 */
	public function actionSetting()
	{
		if(!Yii::$app->request->isPost) 
		{
			if(!($setting = WeixinSettingModel::find()->where(['userid' => 0])->orderBy(['id' => SORT_DESC])->asArray()->one()) || empty($setting['token'])) {
				$setting['token'] = WeixinSettingModel::genToken(32);
			}
			$setting['gatewayUrl'] = Url::toRoute('weixin/index', Yii::$app->params['mobileUrl']);
			$this->params['weixin'] = $setting;
			
			$this->params['page'] = Page::seo(['title' => Language::get('weixin_setting')]);
			return $this->render('../weixin.setting.html', $this->params);
		}
		else
		{
			$post = Basewind::trimAll(Yii::$app->request->post(), true, ['auto_login']);
			
			$model = new \backend\models\WeixinSettingForm();
			if(!$model->save($post, true)) {
				return Message::warning($model->errors);
			}
			return Message::display(Language::get('setting_successed'));
		}
	}
	
	/* 自定义菜单 */
	public function actionMenu()
	{
		$menus = WeixinMenuModel::getList(0);
		foreach ($menus as $key => $val)
        {
            $menus[$key]['switchs'] = 0;
			if(WeixinMenuModel::find()->where(['parent_id' => $val['id']])->exists()) {
				$menus[$key]['switchs'] = 1;
            }
        }
		$this->params['menus'] = $menus;
		$this->params['_head_tags'] = Resource::import(['style' => 'treetable/treetable.css']);
		$this->params['_foot_tags'] = Resource::import(['script' => 'treetable/wxtree.js,inline_edit.js']);
		
		$this->params['page'] = Page::seo(['title' => Language::get('weixin_menu')]);
		return $this->render('../weixin.menu.html', $this->params);
	}
	
	/* 生成菜单 */
	public function actionCreatemenu()
	{
		if(!($menus = WeixinMenuModel::getMenus())) {
			return Message::warning(Language::get('menu_empty'));
		}
		
		$result = Weixin::getInstance()->createMenus($menus);
		if($result->errcode) {
			return Message::warning(sprintf(Language::get('createmenu_fail'), $result->errcode, $result->errmsg));
		}
		return Message::display(Language::get('createmenu_successed'));
	}
	
	/* 添加菜单 */
	public function actionAdd()
	{
		$pid = intval(Yii::$app->request->get('pid', 0));
		
		if(!Yii::$app->request->isPost)
		{
			$this->params['menu'] = ['parent_id' => $pid, 'sort_order' => 255];
			$this->params['parents'] = WeixinMenuModel::find()->select('name')->where(['parent_id' => 0, 'userid' => 0])->indexBy('id')->column();
			
			$this->params['page'] = Page::seo(['title' => Language::get('weixin_addmenu')]);
			return $this->render('../weixin.menuform.html', $this->params);
		}
		else
		{
			$post = Basewind::trimAll(Yii::$app->request->post(), true, ['sort_order', 'reply_id']);
			
			$model = new \backend\models\WeixinMenuForm();
			if(!$model->save($post, true)) {
				return Message::warning($model->errors);
			}
			return Message::display(Language::get('add_menu_successed'), ['weixin/menu']);
		}
	}
	
	/* 编辑菜单 */
	public function actionEdit()
	{
		$id = intval(Yii::$app->request->get('id', 0));
		if(!$id || !($menu = WeixinMenuModel::find()->where(['id' => $id])->asArray()->one())) {
			return Message::warning(Language::get('no_such_menu'));
		}
		
		if(!Yii::$app->request->isPost)
		{
			$this->params['menu'] = array_merge($menu, ['reply' => WeixinReplyModel::find()->where(['reply_id' => $menu['reply_id']])->asArray()->one()]);
			$this->params['parents'] = WeixinMenuModel::find()->select('name')->where(['userid' => 0])->andWhere(['and', ['parent_id' => 0], ['!=', 'id', $menu['id']]])->indexBy('id')->column();
			
			$this->params['page'] = Page::seo(['title' => Language::get('weixin_editmenu')]);
			return $this->render('../weixin.menuform.html', $this->params);
		}
		else
		{
			$post = Basewind::trimAll(Yii::$app->request->post(), true, ['sort_order', 'reply_id']);
			
			$model = new \backend\models\WeixinMenuForm(['id' => $id]);
			if(!$model->save($post, true)) {
				return Message::warning($model->errors);
			}
			return Message::display(Language::get('edit_menu_successed'), ['weixin/menu']);
		}
	}
	
	/* 删除菜单 */
	public function actionDelete()
	{
		$post = Basewind::trimAll(Yii::$app->request->get(), true);
		$post->id = explode(',', $post->id);
		foreach($post->id as $id) {
			if($id && ($allId = WeixinMenuModel::getDescendantIds($id))) {
				WeixinMenuModel::deleteAll(['in', 'id', $allId]);
			}
		}
		return Message::display(Language::get('drop_ok'));
	}
	
	/* 异步取所有菜单下级 */
   	public function actionChild()
    {
		$post = Basewind::trimAll(Yii::$app->request->get(), true, ['id']);
		if(!$post->id) {
			return Message::warning(false);
		}
		
		$menus = WeixinMenuModel::getList($post->id);
		foreach ($menus as $key => $val)
        {
            $menus[$key]['switchs'] = 0;
			if(WeixinMenuModel::find()->where(['parent_id' => $val['id']])->exists()) {
				$menus[$key]['switchs'] = 1;
            }
			
			// 只能二级
			$menus[$key]['add_child'] = 0;
        }
		return Message::result(array_values($menus));
    }
	
	/* 添加自动回复 */
	public function actionAddreply()
	{
		if(!Yii::$app->request->isPost)
		{
			// 所见即所得编辑器
			$this->params['build_editor'] = Plugin::getInstance('editor')->autoBuild(true)->create(['name' => 'description', 'theme' => 'mini'])->build();
			
			$this->params['page'] = Page::seo(['title' => Language::get('weixin_addreply')]);
			return $this->render('../weixin.replyform.html', $this->params);
		}
		else
		{
			$post = Basewind::trimAll(Yii::$app->request->post(), true, ['type']);
			
			$model = new \backend\models\WeixinReplyForm();
			if(!$model->save($post, true)) {
				return Message::warning($model->errors);
			}
			return Message::display(Language::get('add_reply_successed'), ['weixin/index']);
		}
	}
	
	/* 编辑自动回复 */
	public function actionEditreply()
	{
		$id = intval(Yii::$app->request->get('id', 0));
		if(!$id || !($reply = WeixinReplyModel::find()->where(['reply_id' => $id])->asArray()->one())) {
			return Message::warning(Language::get('no_such_reply'));
		}
		
		if(!Yii::$app->request->isPost)
		{
			$this->params['reply'] = $reply;
			
			// 所见即所得编辑器
			$this->params['build_editor'] = Plugin::getInstance('editor')->autoBuild(true)->create(['name' => 'description', 'theme' => 'mini']);
			
			$this->params['page'] = Page::seo(['title' => Language::get('weixin_editreply')]);
			return $this->render('../weixin.replyform.html', $this->params);
		}
		else
		{
			$post = Basewind::trimAll(Yii::$app->request->post(), true, ['type']);
			
			$model = new \backend\models\WeixinReplyForm(['reply_id' => $id]);
			if(!$model->save($post, true)) {
				return Message::warning($model->errors);
			}
			return Message::display(Language::get('edit_reply_successed'), ['weixin/index']);
		}
	}
	
	/* 删除自动回复 */
	public function actionDeletereply()
	{
		$post = Basewind::trimAll(Yii::$app->request->get(), true);
		$post->id = explode(',', $post->id);
		foreach($post->id as $id) {
			if($id && ($model= WeixinReplyModel::findOne($id))) {
				if(!$model->delete()) {
					return Message::warning($model->errors);
				}
				// 删除图片
				if($model->image) {
					UploadedFileModel::deleteFileByName($model->image);
				}
			}
		}
		return Message::display(Language::get('drop_ok'));
	}

	/* 异步修改数据 */
    public function actionEditcol()
    {
		$post = Basewind::trimAll(Yii::$app->request->get(), true, ['id', 'sort_order']);
		if(in_array($post->column, ['sort_order'])) {
			if(!WeixinMenuModel::updateAll(['sort_order' => $post->value], ['id' => $post->id])) {
				return Message::warning(Language::get('edit_fail'));
			}
			return Message::display(Language::get('edit_ok'));	
		}
    }
}
