// Adds padding in order to make a string atleast `length` characters long
export function padOut(
  text: string,
  length: number,
  side: 'right' | 'left' = 'left'
) {
  return side === 'left'
    ? text.padStart(length, ' ')
    : text.padEnd(length, ' ');
}

// alias to padOut(..., 'left')
export const padOutLeft = (text: string, length: number) =>
  padOut(text, length, 'left');

// alias to padOut(..., 'right')
export const padOutRight = (text: string, length: number) =>
  padOut(text, length, 'right');
