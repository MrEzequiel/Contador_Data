import { Timer } from './Timer.js'

const Counter = {
  start() {
    let time = localStorage.getItem('seconds-timer')
    Timer.init(time)
  }
}

Counter.start()

export { Counter }
