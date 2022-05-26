import {
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess
} from './elements.js'

export default function ({ controls, sound, timer }) {
  buttonForest.addEventListener('click', function () {
    controls.forest()
    sound.forest()
  })
  buttonRain.addEventListener('click', function () {
    controls.rain()
    sound.rain()
  })
  buttonMarket.addEventListener('click', function () {
    controls.market()
    sound.market()
  })
  buttonFire.addEventListener('click', function () {
    controls.fire()
    sound.fire()
  })
  buttonPlay.addEventListener('click', function () {
    timer.start()
  })
  buttonStop.addEventListener('click', function () {
    timer.reset()
  })
  buttonMore.addEventListener('click', function () {
    timer.timerMore()
  })
  buttonLess.addEventListener('click', function () {
    timer.timerLess()
  })
}
