// TODO: 테스트 코드
import numberFormat from './numberFormat';

test('numberFormat', () => {
  expect(numberFormat(1)).toBe('1');
  expect(numberFormat(10000)).toBe('10,000');
  expect(numberFormat(123456)).toBe('123,456');
});
