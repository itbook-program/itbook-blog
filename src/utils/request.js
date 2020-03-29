import { getToken } from './auth'
const Fly = require('flyio/dist/npm/wx') // npm引入方式
const fly = new Fly() // 创建fly实例
// const
// 添加请求拦截器
fly.interceptors.request.use((config) => {
  // 给所有请求添加自定义header
  config.headers['X-Tag'] = 'flyio'
  config.headers['Authorization'] = `Bearer ${getToken()}` || ''
  // 所有请求添加token,userid
  // config.params.token = getToken() || ''
  // if (config.method === 'GET') {
  // } else {
  //   config.body.token = getToken() || ''
  // }
  return config
})
// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回
    return response.data
  },
  (error) => {
    // if (error.status === 401) {
    //   // removeToken()
    // } else if ([403, 406].indexOf(error.status) > -1) {

    // } else if (error.status === 500) {
    //   wx.showToast({
    //     title: '服务器异常，请联系开发人员！',
    //     icon: 'none'
    //   })
    // } else {
    //   wx.showToast({
    //     title: '系统异常，请重试！',
    //     icon: 'none'
    //   })
    // }
    return error.status
  }
)
// 配置请求基地址
fly.config.baseURL = process.env.BASE_API

export default fly
