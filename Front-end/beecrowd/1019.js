var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/Front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');

var segundos = parseInt(lines[0])

var horas = Math.floor(segundos/3600) 
segundos = segundos % 3600

var minutos = Math.floor(segundos/60) 
segundos = segundos % 60

var segundos = Math.floor(segundos/1) 


console.log(horas+':'+minutos+':'+segundos)
