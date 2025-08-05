var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/Front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines[0])

var cem = Math.floor(valor/100)
valor = valor % 100

var cinquenta = Math.floor(valor/50)
valor = valor % 50

var vinte = Math.floor(valor/20)
valor = valor % 20

var dez = Math.floor( valor/10)
valor = valor % 10

var cinco = Math.floor(valor/5)
valor = valor % 5

var dois = Math.floor(valor/2)
valor = valor % 2

var um = Math.floor(valor/1)



console.log(parseInt(lines[0]))
console.log(cem + ' nota(s) de R$ 100,00')
console.log(cinquenta + ' nota(s) de R$ 50,00')
console.log(vinte + ' nota(s) de R$ 20,00')
console.log(dez + ' nota(s) de R$ 10,00')
console.log(cinco + ' nota(s) de R$ 5,00')
console.log(dois +' nota(s) de R$ 2,00')
console.log(um +' nota(s) de R$ 1,00')


