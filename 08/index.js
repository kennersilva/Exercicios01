let readlineSync = require ('readline-sync');

let salarioHora = readlineSync.questionInt('Quanto você ganha por hora trabalhada?\n');
let horaMes = readlineSync.questionInt('Quantas horas você trabalha por mês?\n');

console.log('Então seu salário é', salarioHora*horaMes);



