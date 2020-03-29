import request from '@/utils/request'

// 修改用户信息
export function getArticle (payload) {
  return new Promise(function (resolve, reject) {
    request.get('/v1/article', {
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
export function getArticleById (id) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/article/${id}`)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

// 修改用户信息
export function postArticle (reqData) {
  return new Promise(function (resolve, reject) {
    request.post('/v1/article', {
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

export function postArticleByUser (reqData) {
  return new Promise(function (resolve, reject) {
    request.post('/v1/articleByUser', {
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

export function postWeChatPay (reqData) {
  return new Promise(function (resolve, reject) {
    request.post('/weChat/pay', {
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
