function Funcoes() {

    function Comum() {
        alert("Função comum!")
    }

    function RetornaValor(){
        //processamento
        return 10
    }

    var retorno = RetornaValor()

    alert(retorno)
    
    Comum()

    function ComumComParametro(parametro) {
        alert("Função com parâmetro: " + parametro)
    }

    ComumComParametro(15);

    ()=> {
        alert("Função de seta ou Lambda")
    }

    (function () {
        alert("Função anônima.")
    })

}
