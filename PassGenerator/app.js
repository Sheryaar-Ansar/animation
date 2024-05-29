const password = document.querySelector('#password');
const copyBtn = document.querySelector('.copy');
const generateBtn = document.querySelector('.btn');
const length = 12

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberCase = '123456789';
const specialCase = '!@#$%^&*()_-';

const sumofCase = upperCase+lowerCase+numberCase+specialCase;

generateBtn.addEventListener('click', ()=>{
    let random ='';
    random += upperCase[Math.floor(Math.random() * upperCase.length)];
    random += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    random += numberCase[Math.floor(Math.random() * numberCase.length)];
    random += specialCase[Math.floor(Math.random() * specialCase.length)];

    while(length > random.length){
    random += sumofCase[Math.floor(Math.random() * sumofCase.length)];
    }
    password.value = random;
})

copyBtn.addEventListener('click', ()=>{
    password.select()
    document.execCommand('copy');
})