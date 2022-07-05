const frase = prompt("Escriba una frase");
for(let i = 0; i < frase.length; i++){
    const letras = frase.charAt(i);
    if ((letras == "a") || (letras == "e") || (letras == "i") || (letras == "o") || (letras == "u")) {
        document.write(letras);
    }
}

// if (frase.substring(0, i) === "a" || frase.substring(0, i) === "e" || frase.substring(0, i) === "i" || frase.substring(0,i) === "0" || frase.substring(0, i) === "u"){
// document.write(frase.substring(0, i));
// }