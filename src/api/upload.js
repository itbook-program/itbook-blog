import request from '@/utils/request'

// 修改用户信息
export function getOssSecret () {
  return new Promise(function (resolve, reject) {
    request.get(`/ossSecret`)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
