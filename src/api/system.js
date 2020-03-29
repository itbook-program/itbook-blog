import request from '@/utils/request'

export function getSystem (reqData) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/system`, reqData)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
