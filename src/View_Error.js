import { App } from './App.js'

const View_Error = {
  render() {
    App.error.classList.toggle('show')
    App.error.innerHTML = `
    <p>Digite uma data maior que a sua!</p>
    `
  }
}

export { View_Error }
