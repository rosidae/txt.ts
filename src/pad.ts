// Adds padding in order to make a string `length` characters longer
export function pad(
  text: string,
  length: number,
  side: 'right' | 'left' = 'left'
) {
  const padding = ' '.repeat(length);
  return side === 'left' ? padding + text : text + padding;
}

// alias to pad(..., 'left')
export const padLeft = (text: string, length: number) =>
  pad(text, length, 'left');

// alias to pad(..., 'right')
export const padRight = (text: string, length: number) =>
  pad(text, length, 'right');
