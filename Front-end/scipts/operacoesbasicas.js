function calculadora(){

    var a = parseFloat(prompt("Digite o primeiro valor"))
    var b = parseFloat(prompt("Digite o segundo valor:"))
    var tipo = prompt("informe o tipo de operação correspondente (+. -, *, /).")
    
    if( tipo === "+"){
        alert("soma = " + (a + b))
    }
    if(tipo === "-"){
        alert("subtração = " + (a + b))
    }
    if(tipo === "*"){
        alert("multiplição = "+ (a * b))
    }
    if(tipo === "/ = "){
        alert("divisão = "(a / b))
}
}