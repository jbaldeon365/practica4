const aplicarDescuento = require("./precioFinal");

function calcularTotal(precio, cantidad) {
  const subtotal = precio * cantidad;
  return aplicarDescuento(subtotal);
}

module.exports = calcularTotal;
