var celsiusToFahrenheit = require('celsius-to-fahrenheit');
let readlineSync = require('readline-sync');

let fahrenheit = readlineSync.questionInt('Qual a temperatura em Celsius?\n');

console.log('A temperatura em Fahrenheit é:',celsiusToFahrenheit(fahrenheit),'°F');



