import {
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire
} from './elements.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'

const controls = Controls({
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire
})
const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  sound
})

Events({ controls, sound, timer })
