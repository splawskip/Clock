// Get clock hands.
const [hourHand, minuteHand, secondHand] = Array.from(document.querySelectorAll('.clock__hand'));
/**
 * Converts time to degrees.
 *
 * @param {number} time - Number that represents the seconds, minutes or hours.
 * @param {number} timeMax - The maximum value of the time unit.
 * @param {number} offset - Degrees value that clock hands were rotated initialy.
 *
 * @returns {number} - Time represented in degrees.
 */
const getTimeAsDegrees = (time, timeMax = 60, offset = 90) => ((time / timeMax) * 360) + offset;
// Sets time on clock.
const setTimeOnClock = () => {
  // Get time data.
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  // Rotate clock hands.
  secondHand.style.transform = `rotate(${getTimeAsDegrees(seconds)}deg)`;
  minuteHand.style.transform = `rotate(${getTimeAsDegrees(minutes)}deg)`;
  hourHand.style.transform = `rotate(${getTimeAsDegrees(hours, 12)}deg)`;
};
// Update the clock.
setInterval(setTimeOnClock, 1000);
