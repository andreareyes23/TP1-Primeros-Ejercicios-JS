//Escribe un programa que pida 3 números y 
// escriba en la pantalla el mayor de los tres.

const numero1 = parseFloat(prompt('Ingrese el primer número'))
const numero2 = parseFloat(prompt('Ingrese el segundo número'))
const numero3 = parseFloat(prompt('Ingrese el tercer número'))

if(numero1>numero2){
    if (numero1>numero3){
        document.write('El ' + numero1 + ' es el número más grande')
    } else {
        document.write('El ' + numero3 + ' es el número más grande')
    }

} else {
    if (numero2>numero3){
        document.write('El ' + numero2 + ' es el número más grande')
    } else {
        document.write('El ' + numero3 + ' es el número más grande')
    }
}