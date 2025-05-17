import { describe, it, expect } from 'vitest';
import { padOut, padOutLeft, padOutRight } from './pad-out';

describe('padOutLeft', () => {
  it('should pad with spaces on the left', () => {
    expect(padOutLeft('xyz', 10)).toBe('       xyz');
  });
  it('should be the same as padOut', () => {
    expect(padOutLeft('xyz', 10)).toBe(padOut('xyz', 10, 'left'));
  });
  it('should be the default for padOut', () => {
    expect(padOutLeft('xyz', 10)).toBe(padOut('xyz', 10));
  });
});

describe('padOutRight', () => {
  it('should pad with spaces on the right', () => {
    expect(padOutRight('xyz', 10)).toBe('xyz       ');
  });
  it('should be the same as padOut', () => {
    expect(padOutRight('xyz', 10)).toBe(padOut('xyz', 10, 'right'));
  });
  it('should not be the default for padOut', () => {
    expect(padOutRight('xyz', 10)).not.toBe(padOut('xyz', 10));
  });
});
