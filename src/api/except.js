import request from '@/utils/request'

export function postExcept (payload) {
  return new Promise(function (resolve, reject) {
    request.post(`/v1/except`, payload)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function getExcept (reqData) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/except`, reqData)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
