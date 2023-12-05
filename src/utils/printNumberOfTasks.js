/**
 * Returns a number of current stored tasks as a user message
 * @param {Number} numberOfTasks number of current stored tasks
 * @returns user message
 */
export function printNumberOfTasks(numberOfTasks) {
  switch (true) {
    case numberOfTasks > 4:
      return `${numberOfTasks} zadań`;
    case numberOfTasks > 1:
      return `${numberOfTasks} zadania`;
    case numberOfTasks === 1:
      return "1 zadanie";
    case numberOfTasks === 0:
    default:
      return "brak zadań";
  }
}
