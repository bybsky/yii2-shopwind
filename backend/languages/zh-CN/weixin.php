<?php
return array(
   'name' 				=> '公众账号名称',
   'appletname'      => '小程序名称',
   'appid' 				=> 'AppID(应用ID)',
   'appsecret' 			=> 'AppSecret(应用密钥)',
   'token'				=> 'Token(令牌)',
   'appid_desc' 		=> 'AppID(应用ID)',
   'appsecret_desc' 	=> 'AppSecret(应用密钥)',
   'url_desc'			=> '填写在微信公众平台->服务器配置',
   'token_desc' 		=> '令牌对应的是微信公众平台的token，要保持一致',
   'name_empty'			=> '公众账号名称不能为空',
   'appid_empty'		=> 'AppId不能为空',
   'appsecret_empty'	=> 'AppSecret不能为空',
   'token_empty'		=> 'Token（令牌）不能为空',
   'weixin_setting'		=> '公众号设置',
   'setting_successed'	=> '公众号接口配置成功',
   'autologin' 		=> '关注自动登陆',
   'autologin_desc' 	=> '关注公众号后自动注册登陆',
   'gatewayUrl' 		=> 'URL(服务器地址)',
   
   'weixin_menu'		=> '自定义菜单',
   'menus_list' 		=> '列表',
   'menu_name'			=> '菜单名称',
   'parent' 			=> '上级菜单',
   'menu_type'			=> '菜单类型',
   'menu_value'			=> '菜单值',
   'sort_order_desc'	=> '数字范围为0~255，数字越小越靠前',
   'new_msg'			=> '新建消息',
   'send_msg'			=> '发送消息',
   'to_url' 			=> '跳转网页',
   'url' 				=> '网页地址',
   'reply_link'			=> '原文链接',
   'description'		=> '正文',
   'image'				=> '封面图片',
   'menuname_empty'		=> '菜单名称不能为空',
   'menuname_exist' 	=> '菜单名称已存在',
   'link_not_empty'		=> '跳转网页不能为空',
   'select_menu_type'	=> '请选择菜单类型',
   'add_menu_successed'	=> '菜单增加成功',
   'edit_menu_successed'=> '菜单编辑成功',
   'add_child'			=> '添加子菜单',
   'no_such_menu'		=> '没有该菜单',
   'menu_gt_3' 			=> '一级菜单不能多于3个',
   'menu_gt_5'			=> '每个一级菜单下不能多于5个二级菜单',
   'name_gt_4'			=> '一级菜单数字不超过4个字',
   'name_gt_8' 			=> '二级菜单字数不超过8个字',
   'wxmenu_desc_1'		=> '1. 微信菜单一共是两级菜单，一级菜单不能多于3个，字数不能超过4个字;',
   'wxmenu_desc_2'		=> '2. 每个一级菜单下不能多于5个二级菜单，二级菜单字数不能超过8个字，添加菜单时，请不要超出规定',
   'createmenu'			=> '生成菜单', 
   'menu_empty'			=> '菜单为空，生成失败',
   'createmenu_fail'	=> '菜单生成失败，错误代码：%s，错误说明：%s',
   'createmenu_successed'=> '生成菜单成功', 
   
   'textmsg' 			=> '文字消息',
   'imgmsg'				=> '图文消息',
   'replys_list' 		=> '列表',
   'rule_name'			=> '规则名称',
   'reply_type'			=> '回复类型',
   'rule_name_empty' 	=> '规则名称不能为空',
   'keywords'			=> '关键字',
   'keywords_empty'		=> '关键词不能为空',
   'keyword_desc'		=> '多个关键字用逗号隔开',
   'reply_content' 		=> '回复内容',
   'add_reply_successed'=> '自动回复设置成功',
   'edit_reply_successed'=> '自动回复编辑成功',
   'no_such_reply'		=> '没有该回复',
   'beadded' 			=> '关注自动回复',
   'autoreply'			=> '消息自动回复',
   'smartreply'			=> '关键词自动回复',
   'msg_type'			=> '消息类型',
   'beadded_add_already'	=> '关注自动回复已经添加，不可以重复添加，请返回编辑',
   'autoreply_add_already'	=> '消息自动回复已经添加，不可以重复添加，请返回编辑',
   'reply_desc_1'		=> '1. 自动回复分三种类型，关键词自动回复、关注自动回复、消息自动回复;',
   'reply_desc_2'		=> '2. 关注自动回复、消息自动回复，两种类型回复只能增加一条，可以编辑，不能重复添加;',
   'reply_desc_3'		=> '3. 关键词自动回复，可以增加多条，多个关键词用分号隔开',
   'action_invalid'		=> '回复类型非法',
   'title_empty'		=> '标题不能为空',
   'weixin_addreply' => '新增公众号回复'
);