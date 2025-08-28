import { cn } from './utils';

describe('cn', () => {
  it('joins class names with spaces', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });

  it('ignores falsy values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b');
  });

  it('handles arrays of class names', () => {
    expect(cn(['a', 'b'], 'c')).toBe('a b c');
  });

  it('returns empty string for all falsy', () => {
    expect(cn(false, null, undefined, '')).toBe('');
  });
});
