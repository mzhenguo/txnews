import fetch from '../utils/fetch'

export function getNews({page, typeId}) {
  let data = {
    page,
    typeId
  }
  return fetch({
    url: '/getNews',
    method: 'post',
    data
  })
}
