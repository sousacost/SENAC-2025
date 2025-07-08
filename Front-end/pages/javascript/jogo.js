
var container = document.getElementById('container')
flag = true
function CreateSquare(){
    if(document.querySelector('.square')!==null){
        document.querySelector('.square').remove()
    }
    let a = document.createElement('div')
    a.className = 'square'
    a.addEventListener('click', ()=>{
        CreateSquare()
    })
    if(flag){
        a.style.backgroundColor = "black"
    } else{
        a.style.backgroundColor = "red"
    }
    flag = !flag
    container.appendChild(a)
}

CreateSquare()
    


    
