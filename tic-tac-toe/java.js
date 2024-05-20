let boxes = document.querySelectorAll('.box');
let resetGame = document.querySelector('.reset-game button');
let player0 = true
let msg = document.querySelector('.msg');
let msgContainer =document.querySelector('.msg-container');
let startGame = document.querySelector('.msg-container button');

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGameApp = () =>{
    player0=true
    enabledBtns()
    msgContainer.classList.add('hide')
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('Button is Clicked')
        if(player0){
            box.innerText = 'X';
            player0 = false;
        }else{
            player0 = true;
            box.innerText = '0'
        }
        box.disabled = true;
        checkWinner()
    })
})
const disabledBtns = ()=>{
    for(let box of boxes){
        box.disabled = true
    }
}
const enabledBtns = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ''
    }
}
const showWinner = (check) =>{
    msg.innerText= `Congrats! Player ${check} Is The Winner`;
    msgContainer.classList.remove('hide');
    disabledBtns()
}

const checkWinner = () =>{
    for(let pattern of winningPatterns){
        let pattern1 = boxes[pattern[0]].innerText;
        let pattern2 = boxes[pattern[1]].innerText;
        let pattern3 = boxes[pattern[2]].innerText;

        if(pattern1 != '' && pattern2 != '' && pattern3 != ''){
            if(pattern1===pattern2 && pattern2===pattern3){
                showWinner(pattern1)
            }
        }
    }
}
resetGame.addEventListener('click', resetGameApp)
startGame.addEventListener('click', resetGameApp)