
//document.writeln("HELLO WORD!");
var container = document.getElementById("container")
var elemento = document.createElement('button') //ceiando um botão  

elemento.textContent = "Aperte" //define o conteudo textualdo elemento
//elemento.style.backgroundColor = '#FF0000' // é possivel estilizar os elementos
elemento.id =  'btn' // define um "id" ao elemento.
elemento.className = 'btn' //define uma classe ao elemetno, .classlist 
// também pode ser usado se for adicionar mais de uma classe
// container.appendChild(elemento) // adiciona um elemento filho
// texto = `Literal`
// texto = `bnt`

//container.innerHTML += `<button class="btn"> Literal</button>`
//container.innerHTML += `<button class="${texto}"> ${Literal}</button>`
texto = `Literal`
containex.innerHTML += `<button class="${texto}"> ${Literal}</button>`
