var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/Front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])
let soma = (a * 2) + (b * 3) + (c * 5)
console.log('MEDIA = '+(soma/10).toFixed(1))