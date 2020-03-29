import request from '@/utils/request'

export function postFocus (payload) {
  return new Promise(function (resolve, reject) {
    request.post(`/v1/focus`, {
      ...payload
    })
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
