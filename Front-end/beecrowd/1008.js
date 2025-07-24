var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/Front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0])
let b = parseInt(lines[1])
let c = parseFloat(lines[2])
let soma = c * b 
console.log('NUMBER = '+a)
console.log('SALARY = U$ '+soma.toFixed(2))
