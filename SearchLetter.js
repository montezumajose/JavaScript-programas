let letter = prompt("Escribe una frase: ");
let long = letter.length;
let count = 0, i;
for(i = 0; i < long; i++){
    if (letter[i] == 'a'){
        count++;
    }
}
document.write(`Hay ${count} a en la frase`);