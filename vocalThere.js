let letter = prompt("Escribe una frase: ");
let long = letter.length;
for(i = 0; i < long; i++){
    if (letter[i] == 'a'|| letter[i] == 'e' || letter[i] == 'i'|| letter[i] == 'o' || letter[i] == 'u'){
        document.write(`\nEsta ${letter[i]}`);
    }
      
}
