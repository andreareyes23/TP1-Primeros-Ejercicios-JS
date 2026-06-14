//Escribe un programa que pida dos números 
// y escriba en la pantalla cual es el mayor.

const numero1 = parseFloat(prompt('Ingrese un número'))
const numero2 = parseFloat(prompt('Ingrese otro número'))

if (numero1 > numero2){
    document.write('El ' + numero1 + ' es el número más grande')
} else {
    document.write('El ' + numero2 + ' es el número más grande')
}