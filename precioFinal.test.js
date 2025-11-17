const aplicarDescuento = require('./precioFinal');

test("caso valido", () => {
  const precio = 100;
  const resultado = aplicarDescuento(precio);
  expect(resultado).toBe(90);
});

test("caso invalido", () => {
  const precio = -50;
  expect(() => aplicarDescuento(precio)).toThrow("Precio inválido");
});





