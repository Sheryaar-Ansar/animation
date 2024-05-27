const questions = [
    {
        qna : 'What is the largest animal in the world?',
        answers : [
            {text: 'King Kong', correct: false},
            {text: 'Blue Whale', correct: true},
            {text: 'Snake', correct: false},
            {text: 'The Meg', correct: false},
        ]
    },
    {
        qna : 'What is the smallest country in the world?',
        answers : [
            {text: 'Vatican City', correct: true},
            {text: 'Bhutan', correct: false},
            {text: 'Nepal', correct: false},
            {text: 'Srilanka', correct: false},
        ]
    },
    {
        qna : 'What is the largest desert in the world?',
        answers : [
            {text: 'Kalahari', correct: false},
            {text: 'Gobi', correct: false},
            {text: 'Sahaki', correct: false},
            {text: 'Antartica', correct: true},
        ]
    },
    {
        qna : 'What is the smallest continent in the world?',
        answers : [
            {text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Artic', correct: false},
            {text: 'Europe', correct: false},
        ]
    },
]

const questionActual = document.querySelector('.question');
const nextBtn = document.querySelector('.next');
const answerBtnss = document.querySelector('.answerBtn');

let currQuestionidx = 0;
let score = 0;

const startQuiz = () =>{
    currQuestionidx = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function resetBtns(){
    nextBtn.style.display = 'none';
    while(answerBtnss.firstChild){
        answerBtnss.removeChild(answerBtnss.firstChild);
    }
}

const showQuestion = () =>{
    resetBtns();
    let questDisplay = questions[currQuestionidx];
    let questionNo = currQuestionidx + 1;
    questionActual.innerHTML = questionNo + '.' + questDisplay.qna;

    questDisplay.answers.forEach(answer=>{
        const btn = document.createElement('button');
        btn.innerHTML = answer.text;
        btn.classList.add('btn');
        answerBtnss.appendChild(btn);
        if(answer.correct){
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', answerBtns)
    })

}
const answerBtns = (e)=>{
    const box = e.target;
    let isCorrect = box.dataset.correct === 'true';
    if(isCorrect){
        box.classList.add('iscorrect')
        score++;
    }else{
        box.classList.add('isfalse')
    }
    Array.from(answerBtnss.children).forEach(btn=>{
        if(btn.dataset.correct === 'true'){
            btn.classList.add('iscorrect')
        }
        btn.disabled = 'true'
    })
    nextBtn.style.display = 'block'
}

const showScore = () =>{
    resetBtns()
    questionActual.innerHTML = `You Scored ${score} out of ${currQuestionidx}`;
    nextBtn.innerHTML = `Play Again`;
    nextBtn.style.display = 'block'
}

const handleNextBtn=()=>{
    currQuestionidx++;
    if(currQuestionidx < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click', ()=>{
    if(currQuestionidx < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})
startQuiz()