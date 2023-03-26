import axios from 'axios'

//创建一个自定的axios方法
//axios函数请求的url地址前面会被拼接基地址,然后axios请求的baseURL+url后台完整地址
const myAxios = axios.create({
	baseURL: 'http://big-event-vue-api-t.itheima.net'
})
export default myAxios