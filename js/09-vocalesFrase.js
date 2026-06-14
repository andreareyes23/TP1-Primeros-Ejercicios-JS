//Escribe un programa que pida una frase
// y escriba las vocales que aparecen

const cadena = prompt("Ingrese una frase de 10 caracteres incluidos los espacios vacíos");
const cadenaMinuscula = cadena.toLowerCase();

if (cadena.length != 10) {
  document.write("Longitud de frase fuera de rango");
} else {
  if (
    cadenaMinuscula.charAt(0) === "a" ||
    cadenaMinuscula.charAt(0) === "e" ||
    cadenaMinuscula.charAt(0) === "i" ||
    cadenaMinuscula.charAt(0) === "o" ||
    cadenaMinuscula.charAt(0) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(0));
  }

  if (
    cadenaMinuscula.charAt(1) === "a" ||
    cadenaMinuscula.charAt(1) === "e" ||
    cadenaMinuscula.charAt(1) === "i" ||
    cadenaMinuscula.charAt(1) === "o" ||
    cadenaMinuscula.charAt(1) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(1));
  }

  if (
    cadenaMinuscula.charAt(2) === "a" ||
    cadenaMinuscula.charAt(2) === "e" ||
    cadenaMinuscula.charAt(2) === "i" ||
    cadenaMinuscula.charAt(2) === "o" ||
    cadenaMinuscula.charAt(2) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(2));
  }

  if (
    cadenaMinuscula.charAt(3) === "a" ||
    cadenaMinuscula.charAt(3) === "e" ||
    cadenaMinuscula.charAt(3) === "i" ||
    cadenaMinuscula.charAt(3) === "o" ||
    cadenaMinuscula.charAt(3) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(3));
  }

  if (
    cadenaMinuscula.charAt(4) === "a" ||
    cadenaMinuscula.charAt(4) === "e" ||
    cadenaMinuscula.charAt(4) === "i" ||
    cadenaMinuscula.charAt(4) === "o" ||
    cadenaMinuscula.charAt(4) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(4));
  }

  if (
    cadenaMinuscula.charAt(5) === "a" ||
    cadenaMinuscula.charAt(5) === "e" ||
    cadenaMinuscula.charAt(5) === "i" ||
    cadenaMinuscula.charAt(5) === "o" ||
    cadenaMinuscula.charAt(5) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(5));
  }

  if (
    cadenaMinuscula.charAt(6) === "a" ||
    cadenaMinuscula.charAt(6) === "e" ||
    cadenaMinuscula.charAt(6) === "i" ||
    cadenaMinuscula.charAt(6) === "o" ||
    cadenaMinuscula.charAt(6) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(6));
  }

  if (
    cadenaMinuscula.charAt(7) === "a" ||
    cadenaMinuscula.charAt(7) === "e" ||
    cadenaMinuscula.charAt(7) === "i" ||
    cadenaMinuscula.charAt(7) === "o" ||
    cadenaMinuscula.charAt(7) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(7));
  }

  if (
    cadenaMinuscula.charAt(8) === "a" ||
    cadenaMinuscula.charAt(8) === "e" ||
    cadenaMinuscula.charAt(8) === "i" ||
    cadenaMinuscula.charAt(8) === "o" ||
    cadenaMinuscula.charAt(8) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(8));
  }

  if (
    cadenaMinuscula.charAt(9) === "a" ||
    cadenaMinuscula.charAt(9) === "e" ||
    cadenaMinuscula.charAt(9) === "i" ||
    cadenaMinuscula.charAt(9) === "o" ||
    cadenaMinuscula.charAt(9) === "u"
  ) {
    document.write(cadenaMinuscula.charAt(9));
  }
}