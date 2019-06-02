import request from '@/utils/request'

export function submitAddCost(data) {
  return request({
    url: '/cost',
    method: 'post',
    data
  })
}
