import { View } from './View.js'

const Timer = {
  time: 60 * 60,
  currentTime: 0,
  interval: null,

  timeToDay: time => Math.floor(time / 86400),
  timeToHour: time => Math.floor(time / 3600),
  timeToMinutes: time => Math.floor(time / 60),
  timeToSeconds: time => time % 60,

  formatTime: time => String(time).padStart(2, '0'),

  init(time) {
    Timer.time = time || Timer.time
    Timer.currentTime = Timer.time

    Timer.interval = setInterval(Timer.countdown, 1000)
  },
  countdown() {
    Timer.currentTime--

    let days = Timer.formatTime(Timer.timeToDay(Timer.currentTime))
    let hours = Timer.formatTime(Timer.timeToHour(Timer.currentTime))
    if (days >= 1) {
      hours = Timer.formatTime(hours - days * 24)
    }
    let minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
    if (minutes >= 60) {
      minutes = Timer.formatTime(minutes - (hours * 60 + days * 24 * 60))
    }
    let seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))

    View.render({
      days,
      hours,
      minutes,
      seconds
    })

    document.querySelector('#retry').addEventListener('click', () => {
      return
    })

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval)
      return
    }
  }
}

export { Timer }
