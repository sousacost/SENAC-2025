
//document.writeln("HELLO WORD!");
var container = document.getElementById("containex")
var elemento = document.createElement('button') //ceiando um botão  

elemento.textContent = "Aperte" //define o conteudo textualdo elemento
//elemento.style.backgroundColor = '#FF0000' // é possivel estilizar os elementos
elemento.id =  'btn' // define um "id" ao elemento.
elemento.className = 'btn' //define uma classe ao elemetno, .classlist 
// também pode ser usado se for adicionar mais de uma classe

function Acao(){
    alert("Ação")
}
container.appendChild(elemento) // adiciona um elemento filho
 Literal = `Literal`
 texto = `bnt`

container.innerHTML += `<button class="btn"> Literal</button>`
container.innerHTML += `<button class="${texto}"> ${Literal}</button>`


var pessoa =[
{
"nome": "Jason",
"foto":"https://tse2.mm.bing.net/th/id/OIP.kH4rwTrPd7EvfcGxGlPg9gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
"post":"https://tse3.mm.bing.net/th/id/OIP.AO94syirkeI9IIUROXlu1gHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
"descrição":"Jason"
},
{
"nome": "Atores invocação",
"foto": "https://tse2.mm.bing.net/th/id/OIP.6I87zGmf3YqycLrcfuU9UgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
"post":"https://uploads.metropoles.com/wp-content/uploads/2016/06/09113341/THE-CONJURING-2-11.jpg",
"descrição":"Filme conpleto na Netiflix"
},
{
"nome": "Drop:Ameaça anonima",
"foto":"https://cinepop.com.br/wp-content/uploads/2025/01/drop1-1024x683.webp",
"post":"https://cinepop.com.br/wp-content/uploads/2025/01/drop3-1024x683.webp",
"descrição":"subgênero do terror e tecnologia"
},

]

for(let i = 0; i < pessoa.length; i++){
    container.innerHTML += `
        <Div class="aa">

            <img class="top"
                src="${pessoa[i].post}" alt="" width="300" height="200"></img>

               <img class="circulo"
                src="${pessoa[i].foto}" alt="" width="50" height="50"></img>
                
                <p>"${pessoa[i].descrição}"</p>
             
        </Div>
`

}
