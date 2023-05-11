import numberFormat from './numberFormat';

describe('numberFormat', () => {
  it('return a string with commas appended every 3 digits', () => {
    expect(numberFormat(0)).toBe('0');
    expect(numberFormat(30)).toBe('30');
    expect(numberFormat(3_000)).toBe('3,000');
    expect(numberFormat(30_000)).toBe('30,000');
    expect(numberFormat(950_300)).toBe('950,300');
  });
});
