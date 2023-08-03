/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 * 
 * @Id server.js 2021.9.6 $
 * @author mosir
 */

import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
import { siteUrl } from '@/common/util.js'

const APIURL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : siteUrl() + '/api'
const APPID = import.meta.env.VITE_API_APPID
const SECRET = import.meta.env.VITE_API_SECRET

/**
 * 请求数据
 * @param {String} api 
 * @param {Object} params 
 * @param {Function} callback 
 * @param {ElLoading} loading 
 */
export function request(api, params, callback, loading) {
	if (typeof loading != 'undefined' && loading != null) {
		loading.value = true
	}
	let token = localStorage.getItem('access_token') || ''
	if (token) {
		return doRequest(api, build(params), callback, loading)
	}

	doRequest('auth/token', build(params), function (res) {
		if (res.code == 0) {
			localStorage.setItem('access_token', res.data.token)
			doRequest(api, build(params), callback, loading)
		}
	})
}

/**
 * 请求数据
 * @param {String} api 
 * @param {Object} params 
 * @param {Function} callback 
 * @param {ElLoading} loading 
 */
export function promise(api, params, callback, loading) {
	return new Promise((resolve, reject) => {
		request(api, params, (res) => {
			if (res.code == 0) {
				resolve(res.data)
				if (typeof callback == "function") {
					callback(res.data)
				}
			} else {
				console.log(res)
				//reject(new Error(res.message))
			}
		}, loading)
	})
}

/**
 * 上传文件
 * @param {String} api
 * @param {File} file
 * @param {Object} params 
 * @param {Function} callback 
 */
export function upload(api, file, params, callback, loading) {

	const formData = new FormData()
	formData.append(params.fileval ? params.fileval : 'file', file)

	var obj = build(params)
	for (var key in obj) {
		formData.append(key, obj[key])
	}

	doRequest(api, formData, callback, loading)
}

/**
 * 发起请求
 * @param {String} api
 * @param {Object} params
 * @param {Function} callback
 * @param {ElLoading} loading
 */
function doRequest(api, params, callback, loading) {

	if (typeof loading != 'undefined' && loading != null) {
		loading.value = true
	}
	axios.post(APIURL + '/' + api, params, { timeout: 10000 }).then((res) => {

		// TOEKN过期或TOKEN非法，重新获取
		if (res.data.code == 4003 || res.data.code == 4002) {
			localStorage.removeItem('visitor')
			localStorage.removeItem('access_token')
			setTimeout(() => {
				location.reload()
			}, 1000);
		}
		// 需要登录
		//else if (res.data.code == 4004) {
		//}
		else {
			if (typeof callback == "function") {
				callback(res.data)
			}
			if (res.data.code > 0) {
				if (res.data.code <= 2000) {
					ElMessage.warning(res.data.message)
				} else {
					console.log(res.data)
				}
			}
		}

		if (typeof loading != 'undefined' && loading != null) {
			loading.value = false
		}
	}).catch((err) => {
		console.log(err)
		ElMessage.warning(err.message)
	})
}

/**
 * 创建请求BODY
 * @param {Object} params 
 */
function build(params) {

	/**
	 * 郑重声明：
	 * 开源版本不提供数据请求验签策略，您的数据相当于在裸奔，建议正式运营使用商业版本！！！
	 * 开源版本不提供数据请求验签策略，您的数据相当于在裸奔，建议正式运营使用商业版本！！！
	 * 开源版本不提供数据请求验签策略，您的数据相当于在裸奔，建议正式运营使用商业版本！！！
	 */

	var obj = {}

	// TOKEN
	obj.token = localStorage.getItem('access_token')

	// 业务级参数
	obj.params = JSON.stringify(params)
	return obj
}