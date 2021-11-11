<?php

return array(
    'tables' => '数据表',
    'backup_type' => '备份方式',
    'backup_all' => '备份全部数据',
    'backup_custom' => '备份选定的表',
    'no_table_selected' => '您未选择需要备份的数据表',
    'backup_name_exist' => '备份名称已存在，请换一个',
    'ext_insert' => '扩展插入',
    'vol_size' => '分卷大小',
    'backup_name' => '备份名',
    'backup_title' => '分卷数据 %s 成功创建，程序将自动继续。',
    'recover_title' => '分卷数据 %s 成功导入，程序将自动继续。',
    'backup_init_ok' => '初始化成功！',
    'backup_init_fail' => '初始化失败，备份文件创建失败！',
    'backup_success' => '备份成功。',
    'backuping' => '正在备份...',
    'backup_finished' => '备份完成！',
    'backup_error'   => '备份失败！',
    'backup_folder_error' => '备份目录不存在或不可写，请检查后重试！',
    'backup_file_error' => '备份文件可能已经损坏，请检查！',
    'backup_wait'=> '检测到有一个备份任务正在执行，请稍后再试！',
    'backup_notice' => '如果您的浏览器没有自动跳转，请点击顶部刷新按钮',
    'recover' => '恢复',
    'backup' => '备份',
    'no_data' => '没有可恢复的备份',
    'add_time' => '备份时间',
    'invalid_backup_name' => '备份名字由%s到%s位数字、字母或下划线组成',
    'no_backup_name' => '备份名字不能为空',
    'invalid_vol_size' => '分卷大小至少为%sK',
    'no_such_vol' => '分卷%s不存在',
    'invalid_queue_file' => '无效的队列文件',
    'empty_queue' => '备份队列为空或已完成',
    'fail_save_sql' => '备份写入失败',
    'download' => '下载',
    'version_error' => 'ShopWind 当前版本%s与备份数据版本%s不同，备份恢复失败',
    'import_vol_error' => '导入分卷%s失败',
    'recover_init_ok' => '初始化完成！',
    'recover_success' => '数据恢复成功。',
    'recovering' => '正在还原...',
    'recover_fail' => '还原数据出错',
    'backup_not_finished' => '该备份未完成，可能是备份时被中止，不能继续导入',
    'backup_not_full_or_error' => '分卷不完整或分卷信息有错误，不能继续导入',
    'total' => '卷数',
    'drop_ok' => '删除备份成功。',
    'no_such_file' => '指定的文件不存在',
    'vol_log_error' => '分卷日志文件错误',
    'ext_note' => '扩展插入方式可以减小备份文件大小',
    'vol_size_note' => '分卷大小至少为10K',
    'backup_name_note' => '备份名字由1到20位数字、字母或下划线组成',
    'size' => '备份大小',
    'db_operate_confirm' => '为保证数据完整性，在执行【开始还原】后，请不要刷新或关闭页面，您确定要执行当前操作吗？',
	'db_name' => '数据表名称',
	'db_size' => '数据大小',
    'db_add_time' => '创建时间',
    'status' => '状态',
	'rows' => '数据量',
	'collation' => '字符集',
    'engine' => '存储引擎',
    'no_select' => '请选择需要删除的备份项目！',
    'remove_ok' => '从数据库移除成功',
    'remove_slave_confirm' => '移除后将无法恢复，您确定要移除吗？',
    'no_such_db' => '没有该数据库',
);