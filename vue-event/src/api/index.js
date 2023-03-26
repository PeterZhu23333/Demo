//封装具体接口请求方法
// 每个方法只负责请求一个url地址
import request from '../utils/request.js'   //引入自定义的axios函数

//导出接口方法, 为了在逻辑页面引入后调用
export const registerAPI = () => {
	// 原地是一个Promise对象
	//return这个Promise对象到逻辑页面，去那边对Promise对象提取结果
	return request({
		url: '/api/reg',
		method: 'POST',
		data: {
			username: 'lidongxu',
			password: '111111',
			repassword: '111111',
		}
	})
}