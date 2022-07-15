export function generateUUID() {
  let date = new Date().getTime() //Timestamp
  let date2 =
    (typeof performance !== 'undefined' &&
      performance.now &&
      performance.now() * 1000) ||
    0 //Time in microseconds since page-load or 0 if unsupported

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (cb) {
    let random = Math.random() * 16 //random number between 0 and 16
    if (date > 0) {
      //Use timestamp until depleted
      random = (date + random) % 16 | 0
      date = Math.floor(date / 16)
    } else {
      //Use microseconds since page-load if supported
      random = (date2 + random) % 16 | 0
      date2 = Math.floor(date2 / 16)
    }
    return (cb === 'x' ? random : (random & 0x3) | 0x8).toString(16)
  })
}
