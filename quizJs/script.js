const questions = [
    {
        qna : 'Konsa is mein relative URL ka sahi tag hai',
        answers : [
            { text : 'a href="www.facebook.com"', correct : false},
                {text : 'a href="./index.html"', correct : true},
                {text : 'a href="./index.html#top"', correct : false},
            
        ]
    },
    {
        qna : 'Konsa is mein image (<img>) ka sahi tag hai',
        answers : [
            {
                text : 'img source = "./home/pages/images/image.png"', correct : false},
                {text : 'img href = "./images/img.png"', correct : false},
                {text : 'img src = "./images/img.png', correct : true},
            
        ]
    },
    {
        qna : 'Konsa is mein absolute URL ka sahi tag hai',
        answers : [
            {
                text : 'a href="www.facebook.com"', correct : true},
                {text : 'a href="./index.html"', correct : false},
                {text : 'a href="./index.html#top"', correct : false},
            
        ]
    },
    {
        qna : 'konsa sign id ko likhne se pehle lagatey hain',
        answers : [
            {
                text : '.', correct : false},
                {text : 'id', correct : false},
                {text : '#', correct : true},
            
        ]
    },
    {
        qna : 'image ko website ke page ke right par lejaane ke liye konsa tag use kartey hain',
        answers : [
            {
                text : 'img src="./images/img.png image="right"', correct : false},
                {text : 'img src="./images/img.png text="right"', correct : false},
                {text : 'img src="./images/img.png align="right"', correct : true},
            
        ]
    },
    {
        qna : 'konsa sign class ko likhne se pehle lagatey hain',
        answers : [
            {
                text : '.', correct : true},
                {text : 'class', correct : false},
                {text : '#', correct : false},
            
        ]
    },
    {
        qna : 'konsa tag mail bhejne ke liye use hota hai',
        answers : [
            {
                text : 'a href="mailto:someone@example.com"', correct : true},
                {text : 'a href=mailto:"someone@example.com"', correct : false},
                {text : 'a href="someone@example.com"', correct : false},
            
        ]
    },
    {
        qna : 'konsa correct tag hai width aur height likhne ke liye',
        answers : [
            {
                text : 'img src="./images/img.png" wid = "2" height = "10" ', correct : false},
                {text : 'img src="./images/img.png" width= "2px" hei = "10px" ', correct : false},
                {text : 'img src="./images/img.png" width = "2px" height = "10px" ', correct : true},
            
        ]
    },
    {
        qna : 'New Tab par link kholne ka sahi tag?',
        answers : [
            {
                text : 'a href = "www.facebook.com" target="blank"', correct : false},
                {text : 'a href = "www.facebook.com" blank="_target"', correct : false},
                {text : 'a href = "www.facebook.com" target="_blank" ', correct : true},
            
        ]
    },
    {
        qna : 'Image par title tag laganey ka sahi tag',
        answers : [
            {
                text : 'img src="./images/img.png" title:Example', correct : false},
                {text : 'img src="./images/img.png" alt="title"', correct : false},
                {text : 'img src="./images/img.png" title="title"', correct : true},
            
        ]
    },
]

const actualQuestion = document.querySelector('.question');
const liBtns = document.querySelector('.answerBtn');
const nextBtn = document.querySelector('.next');

let currQuestionidx = 0;
let score = 0;

const startQuiz = () =>{
    currQuestionidx = 0;
    score = 0;
    nextBtn.innerHTML = 'Next'
    showQuestion();
}

const resetBtns = () =>{
    nextBtn.style.display = 'none'
    while(liBtns.firstChild){
        liBtns.removeChild(liBtns.firstChild);
    }
}
const showQuestion = () =>{
    resetBtns()
    let questDisplay = questions[currQuestionidx];
    let questionNo = currQuestionidx + 1;

    actualQuestion.innerHTML = questionNo + '.' + questDisplay.qna;

    questDisplay.answers.forEach(answer=>{
        const btn = document.createElement('button');
        btn.innerHTML = answer.text;
        btn.classList.add('btn');
        liBtns.appendChild(btn);

        if(answer.correct){
            btn.dataset.correct = answer.correct; 
        }
        liBtns.addEventListener('click', answerBtn)
    })

}
const answerBtn =(e)=>{
    const btnTarget = e.target;
    let isCorrect = btnTarget.dataset.correct === 'true';

    if(isCorrect){
        btnTarget.classList.add('iscorrect');
        score++;
    }else{
        btnTarget.classList.add('isfalse');
    }
    Array.from(liBtns.children).forEach(btn=>{
        if(btn.dataset.correct === 'true'){
            btn.classList.add('iscorrect')
        }
        btn.disabled = 'true'
    })
    nextBtn.style.display = 'block'

}

const showScore = () =>{
    resetBtns();
    actualQuestion.innerHTML = `You Scored ${score} out of ${currQuestionidx}`;
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
}
const handleNextBtn = () =>{
    currQuestionidx++;
    if(currQuestionidx < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}

nextBtn.addEventListener('click', ()=>{
    if(currQuestionidx < questions.length){
        handleNextBtn()
    }else{
        startQuiz()
    }
})

startQuiz()