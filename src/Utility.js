const DateUtils = {
  getDateInputUser: () => document.getElementById('timer-start').value,

  getDiferentDate: () => {
    const date = DateUtils.getDateUser()

    let day1 = new Date(date[3])
    let day2 = new Date(DateUtils.getDateInputUser())

    if (day1 >= day2) {
      return false
    }

    let difference = Math.abs(day2 - day1)
    let days = difference / (1000 * 3600 * 24)
    let secondsTotal = days * 86400 - date[4]

    return secondsTotal
  },

  getDateUser: () => {
    const dateUser = new Date()

    let day = String(dateUser.getDate()).padStart(2, '0')
    let month = String(dateUser.getMonth() + 1).padStart(2, '0')
    let year = dateUser.getFullYear()

    let dateCurrent = year + '-' + month + '-' + day

    let hour = dateUser.getHours() * 3600
    let minutes = dateUser.getMinutes() * 60
    let seconds = dateUser.getSeconds()
    let hoursUser = hour + minutes + seconds

    const date = [
      dateUser.getFullYear(),
      dateUser.getMonth() + 1,
      dateUser.getDate(),
      dateCurrent,
      hoursUser
    ]

    return date
  }
}

export { DateUtils }
