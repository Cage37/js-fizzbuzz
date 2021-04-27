// Istruzioni:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Stabiliamo array numeri (array vuota)
var numbers = [];

// Definiamo il nostro ciclo per stabilire il valore dei numeri
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        numbers.push("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
        numbers.push("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
        numbers.push("Fizz");
    } else {
        console.log(i);
        numbers.push(i);
    }
} 

// Importiamo il risultato del ciclo su HTML
var nLen = numbers.length;

text = "<ul>";
for (var i = 0; i < nLen; i++) {
    text += "<li>" + numbers[i] + "</li>";
}
text += "</ul>";

document.getElementById("result").innerHTML = text;