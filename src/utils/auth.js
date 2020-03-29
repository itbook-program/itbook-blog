const TokenKey = 'MALL-Token'
const UserKey = 'MALL-User'
export function getToken () {
  return wx.getStorageSync(TokenKey)
}

export function setToken (token) {
  return wx.setStorageSync(TokenKey, token)
}

export function removeToken () {
  return wx.removeStorageSync(TokenKey)
}

export function getUser () {
  return wx.getStorageSync(UserKey)
}

export function setUser (id) {
  return wx.setStorageSync(UserKey, id)
}

export function removeUser () {
  return wx.removeStorageSync(UserKey)
}
