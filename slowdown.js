/**
 * Block CPU for the given amount of seconds
 * @param {Number} [seconds]
 */
export function slowdown(seconds = 0.5) {
  const start = new Date().getTime();
  let end = start;
  while (end - start < seconds * 1000) {
    end = new Date().getTime();
  }
}
