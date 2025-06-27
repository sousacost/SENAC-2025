function condicionais() {
var n = parseInt(prompt("Forneça um numero inteiro."))
if(n % 2 === 0){
    alert("N é par!")
}
else{
    alert("N é impar!")
}
if(n % 5 === 0 && n > 10) { //&& significa "e" ou and e o if 
// só execulta a ação se ambas as expresões forem verdadeiras
    alert("È múltiplo de 5 e maior que 10.")
}
//Verifique se "N" é multiplo de 3 ou é menor que 10.
if( n % 3 ===0 || n < 10){     // a "||" SIGNIFICAR "OU" ou "OR"
 alert("N é multiplo de 4 oun menor que 10. ")
}
switch(n){
    case 1: alert(1)
    break
}
switch(n){
    case 2: alert(2)
    break
}
switch(n){
    case 3: alert(3)
    break
}
}