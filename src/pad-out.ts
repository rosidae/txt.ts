// adds padding in order to make a string atleast `length` characters long

export function padOut(
  text: string,
  length: number,
  side: 'left' | 'right' = 'left'
) {
  return side === 'left'
    ? text.padStart(length, ' ')
    : text.padEnd(length, ' ');
}

export const padOutLeft = (text: string, length: number) =>
  padOut(text, length, 'left');
export const padOutRight = (text: string, length: number) =>
  padOut(text, length, 'right');
