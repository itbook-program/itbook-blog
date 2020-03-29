const CryptoJS = require('crypto-js') // 引用AES源码js

const key = CryptoJS.enc.Utf8.parse('CDSR') // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('2019') // 十六位十六进制数作为密钥偏移量

// 解密方法
function Decrypt (word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

// 加密方法
function Encrypt (word) {
  let srcs = CryptoJS.enc.Utf8.parse(word)
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  const encryptStr = encrypted.ciphertext.toString().toUpperCase()
  // console.log(CryptoJS.SHA1(encryptStr))
  // return CryptoJS.SHA1(encryptStr)
  return encryptStr
}

export {
  Decrypt,
  Encrypt
}
