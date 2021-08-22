const View = {
  render({ days, hours, minutes, seconds }) {
    document.querySelector('#time-seconds span').innerHTML = `${seconds}`

    document.querySelector('#time-minutes span').innerHTML = `${minutes}`

    document.querySelector('#time-hours span').innerHTML = `${hours}`

    document.querySelector('#time-days span').innerHTML = `${days}`
  },
  renderError(text) {
    document.querySelector('#timer-start').classList.add('error')
    const message = document.querySelector('.message-error')

    message.innerHTML = `${text}`
    message.classList.add('show')
  }
}

export { View }
