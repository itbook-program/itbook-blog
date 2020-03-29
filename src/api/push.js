import request from '@/utils/request'

// 修改用户信息
export function getPushCount (userId) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/push/count/${userId}`)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function getPush (reqData) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/push`, reqData)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
