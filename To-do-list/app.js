const inputBox = document.querySelector('.inputBox');
const searchBtn = document.querySelector('.addBtn');
let listContainer = document.querySelector('.listContainer');


searchBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert('Please Write Something To Add')
    } else {
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li)
        let spanClose = document.createElement('span');
        spanClose.innerHTML = 'x'
        li.append(spanClose);
        liList();
       
    }
    inputBox.value='';
    saveData();
})
const liList = () =>{
    listContainer.addEventListener('click', (e) => {
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');
            saveData();
        }else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove('li');
            saveData();
        }
    })
}
const saveData = () =>{
    localStorage.setItem('todolist', listContainer.innerHTML);
}
const showData = () =>{
    listContainer.innerHTML = localStorage.getItem('todolist')
}
showData()
