let readlineSync = require('readline-sync');

let sexo = ['M','F'];
let h = readlineSync.questionFloat('Qual a sua altura?\n');
let genero = readlineSync.keyInSelect(sexo, 'Qual seu sexo?');

switch(genero){
    case 0:
    console.log('Seu peso ideal é', (72.7*h) - 58);
    break;

    case 1:
    console.log('Seu peso ideal é', (62.1*h) - 58);
    break;

    default:
    console.log('genero nao encontrado');
};


