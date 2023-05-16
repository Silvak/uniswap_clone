//Esta funcion permite que al precio de las cryptos se les agregue el signo de dolar
export function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

//Esta funcion es para convertir los decimales del porcentaje a 2 espacios y le agregar el signo de %
export function percentageFormat(num) {
  return num.toFixed(2) + "%";
}

/**Esta función comprueba si el número es mayor o igual a mil millones (billion),
 * un millón (million) o mil (thousand) y devuelve el número dividido por el valor correspondiente con una sola cifra
 * decimal y la letra correspondiente (B, M o K). Si el número es menor que mil, devuelve el número con dos decimales y el signo de dólar ($).
 *  Por ejemplo, si llama a currencyFormat(11419414299), devolverá "$11.4B".
 * **/
export function currencyBillion(num2) {
  const num = parseFloat(num2);
  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;

  if (num >= billion) {
    return "$" + (num / billion).toFixed(1) + "B";
  } else if (num >= million) {
    return "$" + (num / million).toFixed(1) + "M";
  } else if (num >= thousand) {
    return "$" + (num / thousand).toFixed(1) + "K";
  } else {
    return "$" + num.toFixed(2);
  }
}
