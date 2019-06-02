import request from '@/utils/request'

export function submitAddOrder(data) {
  return request({
    url: '/order',
    method: 'post',
    data
  })
}

export function submitEditOrder(data) {
  return request({
    url: '/order',
    method: 'put',
    data
  })
}

export function getOrder(orderId) {
  return request({
    url: '/order/' + orderId,
    method: 'get'
  })
}
