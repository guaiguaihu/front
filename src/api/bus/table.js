import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/bus/table/list',
    method: 'get',
    params
  })
}

export function deleteBus(busId) {
  return request({
    url: '/bus/' + busId,
    method: 'delete'
  })
}
