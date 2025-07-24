const logoURL = 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize/2016/11/30/19/Logo-199302_128726_193614258_453669003.jpg'


// #region TOPO
const container = document.getElementById('container')
var topo = document.createDocumentFragment()


var containerTopo = document.createElement('div')
containerTopo.className = 'topo'

var logo = document.createElement('img')
logo.setAttribute('src', logoURL)
logo.setAttribute('alt', 'logo')
logo.setAttribute('width', '80')
logo.setAttribute('height.', '90')

var nav = document.createElement('nav')

var sobre = document.createElement('a')
sobre.setAttribute('href', '#')
sobre.textContent = 'Lista'

var servicos = document.createElement('a')
servicos.setAttribute('href', '#')
servicos.textContent = 'Assinar'

var login = document.createElement('a')
login.setAttribute('href', '#')
login.textContent = 'Login'

nav.append(sobre,servicos,login)



containerTopo.append(logo, nav)
topo.appendChild(containerTopo)
container.appendChild(topo)
logo.setAttribute('src',logoURL)



container.appendChild(topo)

//#endregion

//region MAIN

var main = document.createElement('div')
main.className = 'main'
var r = document.createElement('div')
r.className = 'r'
var b = document.createElement('div')
b.className = 'b'
main.appendChild(r)
container.append(main)
main.setAttribute('href', '#')

//#endregion

var Rodape = document.createDocumentFragment()
var containerrodape = document.createElement('div')
containerRodape.className = 'rodape'










