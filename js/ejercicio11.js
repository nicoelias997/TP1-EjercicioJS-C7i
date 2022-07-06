const n = prompt("Escribe solo UN numero");
if ((n % 2 === 0) && (n % 3 === 0) && (n % 5 === 0) && (n % 7 === 0)){
    document.write("El numero que elegiste es divisible por 2,3,5 Y 7");
 
} else if((n % 2 === 0) && (n % 3 === 0) && (n % 5 === 0) && (n % 7 !== 0)){
    document.write("El numero que elegiste es divsible por 2,3 y 5");
 
} else if((n % 2 === 0) && (n % 3 === 0) && (n % 5 !== 0) && (n % 7 === 0)){
    document.write("El numero que elegiste es divsible por 2,3 y 7");

} else if((n % 2 === 0) && (n % 3 !== 0) && (n % 5 === 0) && (n % 7 === 0)){
    document.write("El numero que elegiste es divsible por 2,5 y 7");

} else if((n % 2 === 0) && (n % 3 === 0) && (n % 5 !== 0) && (n % 7 !== 0)){
    document.write("El numero que elegiste es divsible por 2,3");

} else if((n % 2 === 0) && (n % 3 !== 0) && (n % 5 === 0) && (n % 7 !== 0)){
    document.write("El numero que elegiste es divsible por 2,5");

} else if((n % 2 === 0) && (n % 3 !== 0) && (n % 5 !== 0) && (n % 7 === 0)){
    document.write("El numero que elegiste es divsible por 2 Y 7");

} else if((n % 2 !== 0) && (n % 3 === 0) && (n % 5 === 0) && (n % 7 === 0)){
    document.write("El numero que elegiste es divsible por 3,5 Y 7");

} else if((n % 2 !== 0) && (n % 3 === 0) && (n % 5 === 0) && (n % 7 !== 0)){
    document.write("El numero que elegiste es divsible por 3 y 5");

} else if((n % 2 !== 0) && (n % 3 === 0) && (n % 5 !== 0) && (n % 7 === 0)){
    document.write("El numero que elegiste es divsible por 3 Y 7");

} else if((n % 2 !== 0) && (n % 3 === 0) && (n % 5 === 0) && (n % 7 === 0)){
    document.write("El numero que elegiste es divsible por 3,5 Y 7");

} else if((n % 2 !== 0) && (n % 3 !== 0) && (n % 5 === 0) && (n % 7 === 0)){
    document.write("El numero que elegiste es divsible por 5 Y 7");

} else if (n % 2 === 0){
    document.write("El numero es divisible solo por 2");
} else if (n % 3 === 0){
    document.write("El numero es divisible solo por 3");
} else if (n % 5 === 0){
    document.write("El numero es divisible solo por 5");
} else if (n % 7 === 0){
    document.write("El numero es divisible solo por 7");
} else{
    document.write("Elegiste un numero que NO es divisible ni por 2,3,5 o 7")
}











