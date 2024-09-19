<?php

return [
    'sys_notice'        => '系统提示',
    'install_eula'      => '许可协议',
    'install_check'     => '环境检测',
    'install_config'    => '系统配置',
    'install_build'        => '正在安装',
    'install_finished'    => '安装成功',
    'install_guide'          => 'ShopWind 安装向导',
    'welcome_install'          => '您好，很高兴您能选用ShopWind',
    'select_language'          => '请选择语言',
    'accept_first'          => '请先阅读并接受许可协议',
    'i_accept'          => '我已阅读并同意以上条款',
    'next'          => '下一步',
    'quit_install'          => '退出安装',
    'incompatible'          => '非常抱歉！您的服务器不能很好的兼容ShopWind，请检查以下表格中红色字的提示并检查修复相应的项目(注：环境检查中的项目不兼容可能需要您对服务器相应软件进行调整，目录和文件检查中的项目只需要您添加一下对应项目的可写[可修改]权限即可)。若您已检查并修复相应的项目，请点击“重新检查”按钮',
    'check_env'          => '服务器环境检测',
    'item_name'          => '项目名称',
    'required_env'          => '所需环境',
    'current_server'          => '当前服务器',
    'file_and_folder_priv'          => '文件和目录权限检查',
    'file_and_folder'          => '文件目录',
    'required_priv'          => '所需权限',
    'current_priv'          => '当前状态',
    'writable'          => '可写',
    'prev'          => '上一步',
    'recheck'          => '重新检查',
    'have_missing_item'          => '您忘了填写以下项目：',
    'connect_mysql_failed'          => '连接MySQL服务器失败',
    'create_db_error'          => '创建数据库失败，请确定您要相应的权限',
    'db_info'          => '填写数据库信息',
    'db_host'          => '数据库地址',
    'db_host_notice'   => '本机请填写127.0.0.1',
    'db_port'          => '数据库端口',
    'db_port_notice'   => '一般情况下是3306',
    'db_name'          => '数据库名',
    'db_name_error'          => '数据库名错误，只允许字母数字下划线',
    'db_name_notice'   => '用于安装ShopWind的数据库，若不存在将尝试创建',
    'db_user'          => '数据库用户名',
    'db_user_notice'          => '用于数据库连接验证的用户名',
    'db_password'          => '数据库密码',
    'db_password_notice'          => '用于数据库连接验证的密码',
    'db_prefix'          => '数据库表前缀',
    'db_prefix_notice'          => '数据库中存在相同前缀的数据表，请修改前缀',
    'force_install'          => '不担心数据丢失，强制安装！',
    'force_install_notice'     => '当前数据库中存在相同前缀的数据表，您是否强制安装？强制安装可能导致意外的数据丢失，且无法恢复！您可以通过使用不同的数据库或修改表前缀来避免数据丢失',
    'init_info'          => '填写站点初始化信息',
    'admin_name'          => '管理员账号',
    'admin_name_notice'          => '初始管理员账号',
    'admin_pass'          => '管理员密码',
    'admin_pass_error'          => '管理员密码长度必须大于6位，必须由数字、字符、特殊字符三种中的两种组成',
    'admin_pass_notice'          => '长度至少6位，必须由数字、字符、特殊字符三种中的两种组成',
    'confirm_pass'          => '确认密码',

    'pass_error'          => '两次输入的密码不一致',
    'confirm_pass_notice'          => '重复输入上面的管理员密码',
    'php_version_error'          => '您服务器的PHP版本无法正常运行ShopWind',
    'gd_version_error'          => '您服务器的GD库无法正常支持ShopWind的运行',
    'unwritable'          => '不可写',
    'file_error'          => '目录或文件 <strong>%s</strong> 检查不通过，请为其添加可写权限(Linux服务器请将文件或目录的权限改为777， Windows服务器请给予可写可修改权限)',
    'eula_title'          => '许可协议',
    'eula_desc'          => '阅读使用协议',
    'check_title'          => '服务器环境检测',
    'check_desc'          => '检测服务器环境是否能够支持ShopWind的正常运行',
    'config_title'          => '填写初始化配置信息',
    'config_desc'          => '数据库及相关初始信息配置',
    'install_title'          => '显示安装结果',
    'install_desc'          => '显示ShopWind的安装结果',
    'warning'          => '警告',
    'sc_gbk'          => '简体中文GBK',
    'sc_utf_8'          => '简体中文UTF8',
    'sc_big5'          => '繁体中文BIG5',
    'tc_utf_8'          => '繁体中文UTF8',
    'connect_db'          => '连接到数据库',
    'connect_db_error'          => '连接到数据库失败',
    'selecte_db'          => '选择数据库',
    'selecte_db_error'          => '选择数据库失败',
    'start_setup_db'          => '开始创建数据库结构',
    'create_table'          => '创建数据表[%s]',
    'install_initdata'          => '安装测试数据',
    'setup_config'          => '建立初始配置',
    'lock_install'          => '锁定安装程序',
    'install_done'          => '结束创建表',
    'gd_missing'          => '缺少GD库',
    'successed'          => '成功',
    'failed'          => '失败',
    'php_version'       => 'PHP版本',
    'gd_version'        => 'GD库版本',
    'install_locked'    => '安装程序已被锁定，若您想重新安装，请删除./data/install.lock文件',
    'create_dbname' => '创建数据库',
    'setting_info'        => '参数配置',
    'install_config' => '参数配置',
    'install_step'          => '安装步骤',
    'successed'          => '成功',
    'failed'          => '失败',
    'php_version'       => 'PHP版本',
    'error_msg'        => '以下项目未通过检测：',
    'initdata_end' => '恭喜！测试数据安装成功！',
    'initdata_locked' => '本程序已锁定。如果您想再次运行本程序，请先删除 data/initdata.lock 文件',
    'allow_initdata' => '非法访问！如果您想运行本程序，请从安装程序开始！',
    'initdata_confirm' => '点确定后将要立即执行安装测试数据，确定要执行安装吗？',
    'seller_buyer_empty' => '卖家和买家用户名不能为空',
    'seller_name_exists' => '卖家用户名已存在，请您更换一个',
    'buyer_name_exists' => '买家用户名已存在，请您更换一个',
    'seller_create_fail' => '卖家用户创建失败',
    'buyer_create_fail' => '买家用户创建失败',

    'default_site_name' => 'ShopWind演示站',
    'default_site_title' => 'ShopWind开源电商系统 - 专业的B2B2C电商系统解决方案',
    'default_site_description' => 'ShopWind专注于研发符合时代发展需要的电子商务商城系统，以专业化的服务水平为企业级用户提供B2B2C、O2O等电子商务平台解决方案',
    'default_site_keywords' => 'PHP开源系统,多用户商城系统,B2B2C电商软件,O2O本地生活服务',
    'default_hot_keywords' => '小米,苹果,华为,康佳,格力,GUCCI,古斯特,ZARA,优衣库,韩都衣舍',
];
