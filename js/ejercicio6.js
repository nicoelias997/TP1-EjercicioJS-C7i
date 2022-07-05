const primerNumero = parseInt(prompt("Escriba el primer numero"));
const segundoNumero = parseInt(prompt("Escriba el segundo numero"));

if (primerNumero > segundoNumero){
    document.write(primerNumero + " " + "Es mayor que : " + " " + segundoNumero);
} else if (primerNumero < segundoNumero){
    document.write(primerNumero + " " + "Es menor que : " + " " + segundoNumero);
} else{
    document.write("Escribe algo que sean numeros diferentes!")
}