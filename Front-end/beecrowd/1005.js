var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/Front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let soma = (a * 3.5) + (b * 7.5)
console.log('MEDIA = '+(soma/11).toFixed(5))