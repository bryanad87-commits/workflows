const suma = require('./suma');

test('suma 1 + 2 debe ser 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('suma 5 + 7 debe ser 12', () => {
  expect(suma(5, 7)).toBe(12);
});
