var startbutton = document.getElementById("start-btn");
var nextbutton = document.getElementById("next-btn");
const questionContainterElement = document.getElementById("question-container")
const timeText = document.getElementById("time")
const button1 = document.getElementById("btn1")
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex

startbutton.addEventListener("click", startGame)
document.getElementById
function startGame(){
    timer()
    console.log("started")
    startbutton.classList.add("hide")
    questionContainterElement.classList.remove("hide")
    timeText.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    setNextQuestion()
}

function setNextQuestion(questions) {
    showQuestions(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(question){
    questionElement.innerText = questions.question

}

function selectAnswer(answer) {

}
    function timer(){
    var counter = 80;
    setInterval(function() {
      counter--;
       if (counter >= 0) {
          span = document.getElementById("time");
          span.innerHTML = counter;
        //   window.location.reload();
       }
       else {
           alert ("sorry out of time.")
          clearInterval(counter);
        }
        window.location.reload() 
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
    }
]
        
//      {
//          prompt: "where do dolphins live?\N(a) a lake\N\(b)the river\N\(c)space\N\(d)the sea",
//          answer: "d"
//      },
//      {
//          prompt: "what is the third letter of the alphabet?\N(a) B\N\(b) C\n\(c) D\N\(d) Z",
//          answer: "b"
//      },
//      {
//          prompt: "what are your eyes for? \N(a) Hearing \N\(b)taste\N\(c)touch\N\(d) to see",
//          answer: "d"
//      },
//  ];
//  we need for the prompt to pop up at random on the screen
