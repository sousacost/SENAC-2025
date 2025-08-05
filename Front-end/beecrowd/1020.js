const { match } = require('assert');

var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/Front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');

var idade = parseInt(lines[0])

var anos = Math.floor(idade/365)
idade = idade % 365

var meses = Math.floor(idade/12)
idade = idade % 12

var dias = Math.floor(idade/30)


console.log(anos + ' anos(s) ')
console.log(meses + ' mes(s) ')
console.log(dias + ' dia(s) ')

