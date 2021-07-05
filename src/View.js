const View = {
  render({ days, hours, minutes, seconds }) {
    document.getElementById('time-minutes').innerHTML = `
    <span>${minutes}</span><p>Minutos</p>
    `
    document.getElementById('time-seconds').innerHTML = `
    <span>${seconds}</span><p>Segundos</p>
    `
    document.getElementById('time-hours').innerHTML = `
    <span>${hours}</span><p>Horas</p>
    `
    document.getElementById('time-days').innerHTML = `
    <span>${days}</span><p>Dias</p>
    `
  }
}

export { View }
