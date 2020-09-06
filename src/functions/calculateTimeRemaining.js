/* 
 * Utility functions 
 * Converts a given time, in milliseconds, into another unit of time.
*/
const toMinutes = (time) => Math.floor((time / 1000 / 60) % 60)

const toSeconds = (time) => Math.floor((time / 1000) % 60)

const toMilliseconds = (time) => Math.floor(time % 100)

/**
 * @function timeToString
 * @param {number} number - A numeric unit of time to be cast to a string. (e.g. 10 (minutes), 2 (seconds))
 * @returns {string} A unit of time cast to a string. If the time < 10, an additional '0' is appended to the beginning. 
 */
const timeToString = (number) => {
  return number >= 10 ? number.toString() : '0' + number
}

export { toMinutes, toSeconds, toMilliseconds, timeToString }