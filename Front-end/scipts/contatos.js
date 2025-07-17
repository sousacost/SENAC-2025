var contatos = [{
    "nome": "Beatriz",
    "email": "antoniow22@gmail",
    "Telefone": "8699643735",
    "Localizacao": "Bairro Anajás"
},

{
    "nome": "Julia",
    "email": " 1",
    "Telefone": "333333",
    "Localizacao": "1600.00"
},
{
    "nome": "Paulo",
    "email": " 2",
    "Telefone": "55555",
    "Localizacao": "1600.00"
}]
var nome = prompt("Didite o nome do contato: ")
var flag = false
for (let i = 0; i < contatos.length; i++) {
    if (nome === contatos[i].nome) {
        alert("Contato encontrado: \n" +
            contatos[i].nome + "\n" +
            contatos[i].email + "\n"
            + contatos[i].Telefone + "\n" +
            contatos[i].Localizacao)
        flag = false
        break;
    }

}
if (!flag) {
    alert("Contato não registrado")
}


//if( contato === )

