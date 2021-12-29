var startbutton = document.getElementById("start-btn");
var nextbutton = document.getElementById("next-btn");
const questionContainterElement = document.getElementById("question-container")
const timeText = document.getElementById("time")
const button1 = document.getElementById("btn1")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex

startbutton.addEventListener("click", startGame)
nextbutton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})
document.getElementById
function startGame(){
    timer()
    console.log("started")
    startbutton.classList.add("hide")
    questionContainterElement.classList.remove("hide")
    timeText.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion(questions) {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
     question.answers.forEach(function (answers) {
             const button = document.createElement("button");
             button.innerText = answers.text;
             button.classList.add("btn");
             if (answers.correct) {
                 button.dataset.correct = answers.correct;
             }
             button.addEventListener("click", selectAnswer);
             answerButtonsElement.appendChild(button);
         })
}

function resetState() {
    clearStatusClass(document.body)
    nextbutton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedbutton = e.target
    const correct = selectedbutton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextbutton.classList.remove("hide")
    }else {
        startbutton.innerText = "restart"
        startbutton.classList.remove("hide")
    }
}

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
    function timer(){
    var counter = 80;
    setInterval(function() {
      counter--;
       if (counter >= 0) {
          span = document.getElementById("time");
          span.innerHTML = counter;
       }
       else {
        window.location.reload();
           alert ("sorry out of time.")
          clearInterval(counter);
        }
        timeText.textContent = counter;
      }, 1000);
 };

//  first we need questions
const questions =  [
     {
         question: "What vitamin did sailors need to prevent scurvy?",
        answers: [
            {text: "Vitamin C", correct: true},
            {text: "Vitamin A", correct: false},
            {text: "Vitamin B1", correct: false},
            {text: "all of the above", correct: false},
        ]
    },
    {
        question: "where do dolphins live?",
       answers: [
           {text: "a lake", correct: false},
           {text: "a River", correct: false},
           {text: "space", correct: false},
           {text: "a sea", correct: true},
       ]
   },
   {
    question: "what is the third letter of the alphabet?",
   answers: [
       {text: "B", correct: false},
       {text: "C", correct: true},
       {text: "D", correct: false},
       {text: "Z", correct: false},
   ]
    },
    {
        question: "what are your eyes for?",
       answers: [
           {text: "hearing", correct: false},
           {text: "Taste", correct: false},
           {text: "Smelling", correct: false},
           {text: "Seeing", correct: true},
       ]
    }

];
        
//  we need for the prompt to pop up at random on the screen
