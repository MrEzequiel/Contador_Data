import { View } from './View.js'
import { DateUtils } from './Utility.js'

const Validate = {
  form(e) {
    e.preventDefault()
    const input = DateUtils.getDateInputUser()

    if (input.trim() === '') {
      View.renderError('Por favor, preencha o campo!')
    } else if (!DateUtils.getDiferentDate()) {
      View.renderError('Insira uma data maior que a sua!')
    } else {
      localStorage.setItem('seconds-timer', DateUtils.getDiferentDate())
      window.location.href = 'counter.html'
    }
  }
}

export { Validate }
