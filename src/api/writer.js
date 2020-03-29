import request from '@/utils/request'

// 提交用户信息
export function postWriter (payload) {
  return new Promise(function (resolve, reject) {
    request.post('/v1/writer', {
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

// 修改用户信息
export function getWriterById (id) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/writer/${id}`)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
