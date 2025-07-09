
var Container = document.getElementById('container')
var gameContainer = document.createElement('div')
gameContainer.className = 'game-container'

Container.appendChild(gameContainer)
for (let i = 0; i < 25; i++) {
    let cell = document.createElement('div')
    cell.className = 'cell'
    gameContainer.appendChild(cell)
}
flag = true
function CreateSquare() {
    if (document.querySelector('.square') !== null) {
        document.querySelector('.square').remove()
    }
    let a = document.createElement('div')
    a.className = 'square'
    a.addEventListener('click', () => {
        CreateSquare()


    })
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)

    a.style.backgroundColor =  'rgb('+red+','+green+','+blue+')'
    var cells = document.querySelectorAll('.cell')
    var randomIndex = Math.floor(Math.random() * 25)
    let randomcell = cells[randomIndex]

    randomcell.appendChild(a)
}

CreateSquare()

//if(flag){
//      a.style.backgroundColor = "black"
//   } else{
//      a.style.backgroundColor = "red"
//  }
//flag = !flag




