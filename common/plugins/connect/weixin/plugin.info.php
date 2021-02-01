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

/**
 * @Id plugin.info.php 2018.6.3 $
 * @author mosir
 */

return array(
    'code' => 'weixin',
    'name' => '微信登录',
    'desc' => '微信PC端扫码登录、如果是微信公众号内微信登录，请同时配置微信-》微信设置-》公众号秘钥',
    'author' => 'SHOPWIND',
	'website' => 'http://www.shopwind.net',
    'version' => '1.0',
    'config' => array(
        'appId' => array(
            'type' => 'text',
            'text' => 'AppId'
        ),
        'appKey' => array(
            'type' => 'text',
            'text' => 'AppSecret'
        )
    )
);