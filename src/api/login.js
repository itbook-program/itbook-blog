import request from '@/utils/request'

// 修改用户信息
export function getWeChatLogin ({ code }) {
  return new Promise(function (resolve, reject) {
    request.get('/weChat/login', {
      code
    })
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
