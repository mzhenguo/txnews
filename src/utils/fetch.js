import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/api', // 请求地址
  timeout: 5000
})

// request 拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  console.log('发送数据', config)
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(
  // response => response
  response => {
    const code = response.data.code
    console.log('返回数据' + JSON.stringify(response.data))

    // 验证错误码
    if (code === 0) {
      return response.data
    // } else if (code === -6) {
    //   $message({
    //     message: '您的账号未登录或在它处登录，请您重新登录',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    }
  },
  error => {
    console.log('err' + error) // for debug
    // $message({
    //   message: '错误：' + error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
