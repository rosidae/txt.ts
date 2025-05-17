// adds padding in order to make a string `length` characters longer

export function pad(
  text: string,
  length: number,
  side: 'left' | 'right' = 'left'
) {
  let padding = ' '.repeat(length);
  return side === 'left' ? padding + text : text + padding;
}

export const padLeft = (text: string, length: number) =>
  pad(text, length, 'left');
export const padRight = (text: string, length: number) =>
  pad(text, length, 'right');
