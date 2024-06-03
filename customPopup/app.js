const submitBtn = document.querySelector('.submit');
const okBtn = document.querySelector('.ok');
const popUp = document.querySelector('.popup')

submitBtn.addEventListener('click', ()=>{
    popUp.classList.add('showPopup');
    submitBtn.style.visibility = 'hidden';
})
okBtn.addEventListener('click', ()=>{
    popUp.classList.remove('showPopup');
    submitBtn.style.visibility = 'visible';
})