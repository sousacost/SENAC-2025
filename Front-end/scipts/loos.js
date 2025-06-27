function Loops(){
    var n = parseInt(prompt())
// o for é um laço (loop) de repetição que é usado quando se 
// sabe a quantidade de interação
    for(let i = 0;  i <= n; i++){
        alert(" for "+ i)
    }
}

// o laço while vai execultar uma ação enquanto uma condição for atendidada.
var flag = true
while(flag){ //com flag
    alert(" 1 while" + n)
    n--
    if (n == 0){
        flag = false
    }
}
while ( n !== 0){ //sem flag
    alert(" 2 while" + n)
    n--
}