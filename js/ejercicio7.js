const primerNumero = parseInt(prompt("Escriba el primer numero"));
const segundoNumero = parseInt(prompt("Escriba el segundo numero"));
const tercerNumero = parseInt(prompt("Escriba el tercer numero"));
if(primerNumero > segundoNumero && primerNumero > tercerNumero){
    document.write("El numero mas grande es: " + " " + primerNumero)
} else if(segundoNumero > primerNumero && segundoNumero > tercerNumero){
    document.write("El numero mas grande es: " + " " + segundoNumero)
} else if(tercerNumero > primerNumero && tercerNumero > segundoNumero){
    document.write("El numero mas grande es: " + " " + tercerNumero)
} else {
    document.write("Escribiste todos los numeros iguales");
}