<?php

/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes.
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 */

namespace common\plugins;

use yii;
use yii\helpers\Url;

use common\library\Language;

/**
 * @Id BaseUploader.php 2018.9.5 $
 * @author mosir
 */

class BaseUploader extends BasePlugin
{
	/**
	 * 文件上传插件系列
	 * @var string $instance
	 */
	protected $instance = 'uploader';

	public function getRoute()
	{
		return [
			'index' => 8, // 排序
			'text'  => Language::get('plugin_uploader'),
			'url'   => Url::toRoute(['plugin/index', 'instance' => 'uploader']),
			'priv'  => ['key' => 'plugin|uploader|all', 'label' => Language::get('plugin_uploader')]
		];
	}
}
