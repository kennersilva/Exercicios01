let readlineSync = require('readline-sync');

let n1 = readlineSync.questionInt('Informe o primeiro número inteiro:\n');
let n2 = readlineSync.questionInt('Informe o segundo número inteiro:\n');
let n3 = readlineSync.questionFloat('Informe um numero real:\n');

console.log(n1 * 2 *(n2/2));

console.log(n1 * 3 + n3);

console.log(n3**3);

