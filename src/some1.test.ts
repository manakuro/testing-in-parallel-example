import { sum } from './utils'

jest.setTimeout(30000);

[...new Array(10)].forEach((_, i) => {
  test(`something ${i}`, async () => {
    expect(sum(1, 1)).toBe(2);
  });
})

