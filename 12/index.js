let readlineSync = require('readline-sync');

let altura = readlineSync.questionFloat('Qual a sua altura?\n');

console.log('Seu peso ideal é', 72.7*altura - 58);


