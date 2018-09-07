import Mock from 'mockjs'
import login from './login'
import { getNews } from './news'

Mock.setup({
  timeout: '350-600'
})

// mock 数据，地址为return fetch 中的 ur
Mock.mock(/\/login/, 'post', login)
Mock.mock(/\/getNews/, 'post', getNews)

export default Mock
