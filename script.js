const addList = document.querySelector('.list');
const addBtn = document.querySelector('.fas.fa-calendar-plus')
const inputField = document.getElementById('input');
console.log(addBtn)
addBtn.addEventListener('click',()=>{
    console.log("buttonclick")
         
    const createElement = document.createElement('div');
    createElement.classList.add('create-div');
    createElement.innerText = inputField.value;
    addList.appendChild(createElement);
    inputField.value = '';


    createElement.addEventListener('click', ()=>{
        createElement.style.textDecoration = 'line-through'
    })

    createElement.addEventListener('dblclick', ()=>{
        console.log("cisono")
        addList.removeChild(createElement);
    })

  })