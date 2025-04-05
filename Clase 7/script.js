//Variabe con texto
//engrapar texto atajo: alt + z
let txt = "Aquí va una frase que me permitirá explorar los métodos de cadenas de caracteres de JavaScript. El primer método se llama LENGHT";
let txt2 = txt.toUpperCase();
let txt3 = txt2.replace("CADENAS", "STRINGS");

//Document
document.getElementById('cadena').innerHTML=txt;
document.getElementById('cadena2').innerHTML=txt2;
document.getElementById('cadena3').innerHTML=txt3;

//Console
console.log(txt.length);
console.log(txt.at(8));
console.log(txt.toUpperCase());