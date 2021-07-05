import { Timer } from './Timer.js'
import { View_Error } from './View_Error.js'

const App = {
  content1: document.querySelector('#content1'),
  content2: document.querySelector('#content2'),
  header: document.querySelector('#header'),
  error: document.getElementById('error'),
  modal: document.querySelector('.modal-overlay'),

  getDateInputUser: () => document.getElementById('timer-start').value,

  contentOneHiddenContentTwoShow: () => {
    App.header.classList.toggle('show')
    App.content1.classList.toggle('show')
    App.content2.classList.toggle('show')
  },
  contentTwoHiddenContentOneShow: () => {
    App.header.classList.toggle('show')
    App.content1.classList.toggle('show')
    App.content2.classList.toggle('show')
  },
  start() {
    document.querySelector('#start').addEventListener('click', () => {
      const time = App.getDiferentDate()
      if (time == 0) {
        View_Error.render()
      } else {
        App.error.classList.remove('show')
        App.contentOneHiddenContentTwoShow()
        Timer.init(time)
      }
    })
    document.querySelector('#retry').addEventListener('click', () => {
      App.modal.classList.toggle('show')
      document.querySelector('.btn-no').onclick = () => {
        App.modal.classList.toggle('show')
      }

      document.querySelector('.btn-yes').onclick = () => {
        App.modal.classList.toggle('show')
        clearInterval(Timer.interval)
        App.contentTwoHiddenContentOneShow()
      }
    })
  },
  getDiferentDate: () => {
    const dataUser = new Date()
    let dia = String(dataUser.getDate()).padStart(2, '0')
    let mes = String(dataUser.getMonth() + 1).padStart(2, '0')
    let ano = dataUser.getFullYear()
    let dataAtual = ano + '-' + mes + '-' + dia
    let hour = dataUser.getHours() * 3600
    let minutes = dataUser.getMinutes() * 60
    let seconds = dataUser.getSeconds()
    let hoursUser = hour + minutes + seconds
    const data = [
      dataUser.getFullYear(),
      dataUser.getMonth() + 1,
      dataUser.getDate(),
      dataAtual,
      hoursUser
    ]
    let day1 = new Date(data[3])
    let day2 = new Date(App.getDateInputUser())
    if (day1 >= day2) {
      return 0
    }
    let difference = Math.abs(day2 - day1)
    let days = difference / (1000 * 3600 * 24)
    let secondsTotal = days * 86400 - hoursUser
    return secondsTotal
  }
}

export { App }
