<?php

/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 */

namespace frontend\mob\widgets\notice;

use Yii;

use common\models\ArticleModel;

use common\library\Basewind;
use common\base\BaseWidget;

/**
 * @Id main.widget.php 2018.9.13 $
 * @author mosir
 */

class NoticeWidget extends BaseWidget
{
    var $name = 'notice';

    public function getData()
    {
        // 初始值
        $this->options = array_merge(
            [
                'source' => '',
                'quantity' => 2,
            ],
            $this->options
        );

        $query = ArticleModel::find()->select('article_id,title');

        if ($this->options['source'] == 'choice') {
            $query->andWhere(['in', 'article_id', explode(',', $this->options['items'])]);
        } else {
            if ($this->options['source'] == 'category') {
                $query->andWhere(['cate_id' => $this->options['cate_id']]);
            }
            $query->limit($this->options['quantity'] > 0 ? $this->options['quantity'] : 2);
        }
        $list = $query->orderBy(['article_id' => SORT_DESC])->asArray()->all();
        return array_merge(['list' => empty($list) ? [] : $list], $this->options);
    }

    public function parseConfig($input)
    {
        return $input;
    }
}
