/**
 * Instantiate variable using const.
 * @returns {string} - The preference for using const.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Get the message suffix.
 * @returns {string} - The suffix message.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Instantiate variable using let.
 * @returns {string} - The combination message.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

