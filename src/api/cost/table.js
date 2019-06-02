import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/cost/table/list',
    method: 'get',
    params
  })
}

export function deleteCost(costId) {
  return request({
    url: '/cost/' + costId,
    method: 'delete'
  })
}
