import request from '@/utils/request'
// 修改用户信息
export function postComments (reqData) {
  return new Promise(function (resolve, reject) {
    request.post('/v1/comments', {
      ...reqData
    })
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function postCommentsById (articleId) {
  return new Promise(function (resolve, reject) {
    request.post(`/v1/comments/${articleId}`)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function postCommentsByUser (payload) {
  return new Promise(function (resolve, reject) {
    request.post(`/v1/commentsByUser`, {
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
