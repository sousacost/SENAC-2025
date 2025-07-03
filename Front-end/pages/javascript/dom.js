
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

var container = document.getElementById(`containex`)

container.innerHTML = `
        <Div class="aa">

            <img class="top"
                src="https://image.discovery.indazn.com/ca/v2/ca/image?id=2qbw8h5rftc6ih6bdrxc0dupd_image-header_pRow_1750863072000&quality=50"
                alt="220" width="200">

            <img class="circulo"
                src="https://th.bing.com/th/id/R.31b17a5f971bd2d35a0e98856ab151fb?rik=c9%2fczsMPO%2fu0Ow&riu=http%3a%2f%2fminutoligado.com.br%2fwp-content%2fuploads%2f2014%2f04%2fwallpaper-flamengo.jpg&ehk=8mw2Bn7iW5neb0gCpZOvVYw%2bGdP6sR%2fuYTuVfrvRU%2bA%3d&risl=&pid=ImgRaw&r=0"
                alt="100" width="100" height="">

            <div class="text">
                <p>
                <h3>Flamengo perde de 4x2 para o poderoso Bayern. </p>
            </div>
        
        </Div>
`
