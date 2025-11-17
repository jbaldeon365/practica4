const aplicarDescuento = require('./precioFinal');
const calcularTotal = require('./calcularTotal');

test("calcularTotal con caso valido", () => {
  const precio = 50;
  const cantidad = 2;
  const resultado = calcularTotal(precio, cantidad);
  expect(resultado).toBe(90);
});