//Escribe un programa que pida un número 
// y diga si es divisible por 2

const datoNumero = parseFloat(prompt('Ingrese un número'))

if (datoNumero % 2 === 0){
    document.write('El '+ datoNumero + ' es divisible por 2')
} else {
    document.write('El '+ datoNumero + ' no es divisible por 2')
}