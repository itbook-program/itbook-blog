import request from '@/utils/request'

export function getSurrounding (code) {
  return new Promise(function (resolve, reject) {
    request.get('https://apis.map.qq.com/ws/place/v1/search', {
      ...code
    })
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}

export function getGeocoder (code) {
  return new Promise(function (resolve, reject) {
    request.get(`https://apis.map.qq.com/ws/geocoder/v1/?${code}`)
      .then(res => {
        resolve(res)
      })
      .catch(function (e) {
        reject(e)
      })
  })
}
