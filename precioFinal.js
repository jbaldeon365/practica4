function aplicarDescuento(precio) {
  if (precio < 0) throw new Error("Precio inválido");
  return precio * 0.9;
}
module.exports = aplicarDescuento;