import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/order/table/bus/list',
    method: 'get',
    params
  })
}