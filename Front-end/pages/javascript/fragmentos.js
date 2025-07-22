const logoURL = 'https://tse4.mm.bing.net/th/id/OIP.IiQPLktWtgBtnWbmHbLQxAHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'


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
sobre.textContent = 'sobre'

var servicos = document.createElement('a')
servicos.setAttribute('href', '#')
servicos.textContent = 'servicos'

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
container.append(main,r)
main.setAttribute('href', '#')








//endregion
