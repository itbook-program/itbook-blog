import request from '@/utils/request'

export function getAttention (payload) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/attention`, payload)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
