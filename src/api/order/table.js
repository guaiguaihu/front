import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/order/table/list',
    method: 'get',
    params
  })
}

export function deleteOrder(orderId) {
  return request({
    url: '/order/' + orderId,
    method: 'delete'
  })
}
