// @flow
import { add, sub } from './math';

test('add(1, 2) should equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('sub(1, 2) should equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
});
