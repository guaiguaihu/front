import request from '@/utils/request'

export function submitUsebus(data) {
  return request({
    url: '/usebus',
    method: 'post',
    data
  })
}