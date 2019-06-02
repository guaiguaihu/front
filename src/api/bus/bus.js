import request from '@/utils/request'

export function submitAddbus(data) {
  return request({
    url: '/bus',
    method: 'post',
    data
  })
}

export function submitEditbus(data) {
  return request({
    url: '/bus',
    method: 'put',
    data
  })
}

export function getBus(busId) {
  return request({
    url: '/bus/' + busId,
    method: 'get'
  })
}
