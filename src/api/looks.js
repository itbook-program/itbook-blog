import request from '@/utils/request'

// 修改用户信息
export function postLooks (payload) {
  return new Promise(function (resolve, reject) {
    request.post(`/v1/looks`, {
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

export function getLooks (payload) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/looks`, payload)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
