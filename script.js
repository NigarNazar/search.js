const inputElementi = document.querySelector('.input-document')
const addTodoBtn = document.querySelector('.document-check')
const toTodoBtn = document.querySelector('.document-xmark')

const todoList =  document.querySelector('.document-container')


addTodoBtn.addEventListener('click' , function(e){
const kilklediyimElement = e.target
if(kilklediyimElement.classList.contains('document-work')){
kilklediyimElement.parentElement.classList.add('document-style')
  
}

e.preventDefault() 
 

const newTodoDivi = document.createElement('div')
newTodoDivi.classList.add('document-work')
// console.log(newTodoDivi)
const todoLi = document.createElement('li')
todoLi.classList.add('document-style')
// console.log(todoLi)
const todoButton = document.createElement('button')
todoButton.classList.add('button-work')
todoButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
todoButton.addEventListener('click' , function(e){
    const clickElement = e.target
    if(clickElement.classList.contains('button-work')){
        clickElement.parentElement.classList.add('delete')
       
    }
    e.preventDefault()
    
})
if(inputElementi.value===""){
    return;
}
todoLi.innerText = inputElementi.value
// console.log(todoLi)
// todoLi.appendChild(todoButton)
newTodoDivi.appendChild(todoLi)
// console.log(newTodoDivi)
newTodoDivi.appendChild(todoButton)
todoList.appendChild(newTodoDivi)

// inputElementi.appendChild(todoList)
inputElementi.value = ''
// }
})


toTodoBtn.addEventListener('click' , function(e){
const klikElementi = e.target
if(klikElementi.classList.contains('inputElementi')){
    klikElementi.parentElement.classList.add('delete')
    console.log(klikElementi)
}
e.preventDefault()

inputElementi.value = ''
})


 


