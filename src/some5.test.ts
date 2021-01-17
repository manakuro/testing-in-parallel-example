import { sum } from './utils'

jest.setTimeout(30000);

[...new Array(20)].forEach((i) => {
  test(`something ${i}`, async () => {
    await new Promise((r) => setTimeout(r, 5000));
    expect(sum(1, 1)).toBe(2);
  });
})
