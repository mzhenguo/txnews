const userMap = {
  '18600000000': {
    func: 'login-->',
    code: 0,
    msg: '',
    data: ''
  }
}

export default function loginByUsername(config) {
  // config 为通过异步请求发送到 服务端的数据，config.body 为数据内容
  const { no } = JSON.parse(config.body)
  // 返回数据
  return userMap[no]
}
