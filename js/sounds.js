export default function () {
  const forestAudio = new Audio(
    'https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download'
  )
  const rainAudio = new Audio(
    'https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download'
  )
  const marketAudio = new Audio(
    'https://drive.google.com/u/0/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA&export=download'
  )
  const fireAudio = new Audio(
    'https://drive.google.com/u/0/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB&export=download'
  )

  function forest() {
    forestAudio.play()
    rainAudio.pause()
    rainAudio.pause()
    fireAudio.pause()
  }
  function rain() {
    forestAudio.pause()
    rainAudio.play()
    marketAudio.pause()
    fireAudio.pause()
  }
  function market() {
    forestAudio.pause()
    rainAudio.pause()
    marketAudio.play()
    fireAudio.pause()
  }
  function fire() {
    forestAudio.pause()
    rainAudio.pause()
    marketAudio.pause()
    fireAudio.play()
  }
  function stop() {
    forestAudio.pause()
    rainAudio.pause()
    marketAudio.pause()
    fireAudio.pause()
  }

  forestAudio.loop = true
  rainAudio.loop = true
  marketAudio.loop = true
  fireAudio.loop = true

  return {
    forest,
    rain,
    market,
    fire,
    stop
  }
}
