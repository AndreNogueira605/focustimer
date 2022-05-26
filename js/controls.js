export default function Controls({
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire
}) {
  function forest() {
    buttonForest.classList.add('show')
    buttonMarket.classList.remove('show')
    buttonRain.classList.remove('show')
    buttonFire.classList.remove('show')
  }

  function market() {
    buttonForest.classList.remove('show')
    buttonMarket.classList.add('show')
    buttonRain.classList.remove('show')
    buttonFire.classList.remove('show')
  }

  function rain() {
    buttonForest.classList.remove('show')
    buttonMarket.classList.remove('show')
    buttonRain.classList.add('show')
    buttonFire.classList.remove('show')
  }

  function fire() {
    buttonForest.classList.remove('show')
    buttonMarket.classList.remove('show')
    buttonRain.classList.remove('show')
    buttonFire.classList.add('show')
  }

  function stop() {
    buttonForest.classList.remove('show')
    buttonMarket.classList.remove('show')
    buttonRain.classList.remove('show')
    buttonFire.classList.remove('show')
  }

  return {
    forest,
    market,
    rain,
    fire,
    stop
  }
}
