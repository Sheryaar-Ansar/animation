let boxes = document.querySelectorAll('.box');
let resetGame = document.querySelector('.reset-game button');
let player0 = true;
const msgContainer = document.querySelector('.msg-container');
const startGame = document.querySelector('.msg-container button');
const winnerMsg = document.querySelector('.msg')

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const resetBtn = () =>{
    player0 = true;
    enabledBtns();
    msgContainer.classList.add('hide')
}
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('Button is clicked')
        if (player0) {
            box.innerText = 'X';
            box.style.color='rgb(103, 240, 240)';
            player0 = false;
        } else {
            player0 = true;
            box.innerText = '0'
            box.style.color = 'rgb(240, 130, 103)'
        }
        box.disabled = true
        checkWinner();
    })
})
const disabledBtns = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}
const enabledBtns = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ''
    }
}
const showWinner = (winner) =>{
    winnerMsg.innerText = `Congrats! Winner Is Player ${winner}`;
    msgContainer.classList.remove('hide')
    disabledBtns()
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pattern1 = boxes[pattern[0]].innerText;
        let pattern2 = boxes[pattern[1]].innerText;
        let pattern3 = boxes[pattern[2]].innerText;

        if (pattern1 != '' && pattern2 != '' && pattern3 != '') {
            if (pattern1 === pattern2 && pattern2 === pattern3) {
                console.log('winner', pattern1)
                showWinner(pattern1)
                boxes.disabled = true
            }
        }
    }
}
startGame.addEventListener('click', resetBtn);
resetGame.addEventListener('click', resetBtn);
