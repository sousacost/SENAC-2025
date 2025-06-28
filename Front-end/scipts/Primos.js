function Primos(){
    var n = parseInt(prompt("Forneça um número primo"))
    flag = true
    for ( let i = 2; i< n; i++){
        if(n % i === 0){
        flag = false}
}
if(flag){
    alert( " é primo.")
}else{
    alert("não é primo.")
}
}

