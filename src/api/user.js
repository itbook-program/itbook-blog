import request from '@/utils/request'

// 修改用户信息
export function putUserById ({ id, reqData }) {
  return new Promise(function (resolve, reject) {
    request.put(`/v1/user/${id}`, {
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

// 修改用户信息
export function putUserSign (id, sign) {
  return new Promise(function (resolve, reject) {
    request.put(`/v1/user/sign/${id}`, {
      sign
    })
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

// 获取用户信息
export function getUserInfo ({ id }) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/user/${id}`)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

// 修改用户信息
export function getUserComment () {
  return new Promise(function (resolve, reject) {
    request.get('/user/comment')
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function getUserCountInfo (id) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/user/countInfo/${id}`)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
