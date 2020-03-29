import request from '@/utils/request'

export function postLikes (payload) {
  return new Promise(function (resolve, reject) {
    request.post(`/v1/likes`, {
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

export function getLikes (payload) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/likes`, payload)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
