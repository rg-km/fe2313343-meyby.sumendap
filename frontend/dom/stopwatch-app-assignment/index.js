/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here
let stopwatch = document.getElementById('stopwatch')
let startbtn = document.getElementsByClassName('btn-start')[0]
let stopbtn = document.getElementsByClassName('btn-stop')[0]
let resetbtn = document.getElementsByClassName('btn-reset')[0]

let hour = 0
let min = 0
let sec = 0
let stoptimer = true

startbtn.addEventListener('click', start)
stopbtn.addEventListener('click', stop)
resetbtn.addEventListener('click', reset)

function start() {
  if (stoptimer) {
    stoptimer = false
    runTime()
  }
}

function stop() {
  if (!stoptimer) {
    stoptimer = true
  }
}

function reset() {
  hour = 0
  min = 0
  sec = 0
  stopwatch.innerHTML = '00:00:00'
}

function runTime() {
  if (!stoptimer) {
    hour = parseInt(hour)
    min = parseInt(min)
    sec = parseInt(sec)
    sec++
    if (sec == 60) {
      min++
      sec = 0
    }
    if (min == 60) {
      hour++
      min = 0
      sec = 0
    }
    if (sec < 10 || sec == 0) sec = `0${sec}`
    if (min < 10 || min == 0) min = `0${min}`
    if (hour < 10 || hour == 0) hour = `0${hour}`
    stopwatch.innerHTML = `${hour}:${min}:${sec}`
    setTimeout(runTime, 1000)
  }
}