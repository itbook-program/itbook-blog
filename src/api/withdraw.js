import request from '@/utils/request'

export function postWithdraw (payload) {
  return new Promise(function (resolve, reject) {
    request.post(`/v1/withdraw`, payload)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function putWithdraw (payload) {
  return new Promise(function (resolve, reject) {
    request.put(`/v1/withdraw`, payload)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function getWithdraw (payload) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/withdraw`, payload)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function postWithdrawRecord (payload) {
  return new Promise(function (resolve, reject) {
    request.post(`/v1/withdraw/record`, payload)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function getWithdrawRecord (payload) {
  return new Promise(function (resolve, reject) {
    request.get(`/v1/withdraw/record`, payload)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
