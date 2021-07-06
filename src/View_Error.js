import { App } from './App.js'

const View_Error = {
  render() {
    App.error.classList.add('show')
    App.error.innerHTML = `
    <span>Digite uma data maior que a sua!</span>
    `
  }
}

export { View_Error }
