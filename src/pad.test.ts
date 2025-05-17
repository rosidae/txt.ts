import { describe, expect, it } from 'vitest';
import { pad, padLeft, padRight } from './pad';

describe('padLeft', () => {
  it('should pad with spaces on the left', () => {
    expect(padLeft('xyz', 5)).toBe('     xyz');
  });
  it('should be the same as pad', () => {
    expect(padLeft('xyz', 5)).toBe(pad('xyz', 5, 'left'));
  });
  it('should be the default for pad', () => {
    expect(padLeft('xyz', 5)).toBe(pad('xyz', 5));
  });
});

describe('padRight', () => {
  it('should pad with spaces on the right', () => {
    expect(padRight('xyz', 5)).toBe('xyz     ');
  });
  it('should be the same as pad', () => {
    expect(padRight('xyz', 5)).toBe(pad('xyz', 5, 'right'));
  });
  it('should not be the default for pad', () => {
    expect(padRight('xyz', 5)).not.toBe(pad('xyz', 5));
  });
});
