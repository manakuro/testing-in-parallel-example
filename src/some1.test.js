[...new Array(10)].forEach((_, i) => {
  test(`something ${i}`, async () => {
    expect(1 + 1).toBe(2);
  });
})
