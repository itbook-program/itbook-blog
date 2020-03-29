function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime (dateStr) {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  // const hour = date.getHours()
  // const minute = date.getMinutes()
  // const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('.')
  // const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1}`
}

function debounce (idle, action) {
  let last
  return function () {
    const ctx = this
    const args = arguments
    clearTimeout(last)
    last = setTimeout(function () {
      action.apply(ctx, args)
    }, idle)
  }
}

function throttle (delay, action) {
  var last = 0
  return function () {
    var curr = +new Date()
    if (curr - last > delay) {
      action.apply(this, arguments)
      last = curr
    }
  }
}

function formatSeconds (value) {
  let result = parseInt(value)
  let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600)
  let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
  let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))

  let res = ''
  if (h !== '00') res += `${h}:`
  res += `${m}:${s}`
  return res
}

export {
  formatSeconds,
  formatNumber,
  formatTime,
  debounce,
  throttle
}
