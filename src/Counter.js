import { Timer } from './Timer.js'

const Counter = {
  modal: document.querySelector('.modal-overlay'),

  start() {
    let time = localStorage.getItem('seconds-timer')
    Timer.init(time)
  }
}

Counter.start()

export { Counter }
