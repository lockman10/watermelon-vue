import request from './../utils/http'

export function match() {
  return request({
    url: '/api/test/match',
    method: 'post'
  })
}
