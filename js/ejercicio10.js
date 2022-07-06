const n = prompt("Escribe solo UN numero");
if((n % 2 === 0) || (n % 3 === 0) || (n % 5 === 0) || (n % 7 === 0)){
    document.write("El numero que elegiste es divisible por al menos uno de estos numeros 2,3,5 o 7")
} else {
    document.write("El numero que elegiste no es divisible entre 2 ni 3 ni 5 ni 7")
}