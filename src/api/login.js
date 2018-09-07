import fetch from '../utils/fetch'

export function login() {
  let data = {
    no: '18600000000',
    value: '222'
  }
  return fetch({
    url: '/login',
    method: 'post',
    data
  })
}
