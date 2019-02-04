let fahrenheitToCelsius = require('fahrenheit-to-celsius');
let readlineSync = require('readline-sync');

let celsius = readlineSync.questionInt('Qual a temperatura em Fahrenheit?\n');

console.log('A temperatura em Celsius é:',fahrenheitToCelsius(celsius),'°C');



