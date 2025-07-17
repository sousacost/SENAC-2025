var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/Front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');
//==============================
let a  = parseFloat(lines[0])
let area = 3.14159*(a**2)
console.log("A="+ area.toFixed(4))
