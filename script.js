var startbutton = document.getElementById("start-btn");
var nextbutton = document.getElementById("next-btn");
var enterhighScore = document.getElementById("enter-high-score")
const questionContainterElement = document.getElementById("question-container")
var timeText = document.getElementById("time")
const button1 = document.getElementById("btn1")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex
const endScreenElement = document.getElementById("end-screen")
const scoreboardElement = document.getElementById("scoreboard")
const resetButton = document.getElementById("reset-button")
const restartButton = document.getElementById("restart-button")
var highScorePage = document.getElementById("high-scores")
var leaderBoard = document.getElementById("scores")
var scores = []
const finalScore = document.getElementById("score")
var userName = document.getElementById("initials")
const finishButton = document.getElementById("finish-button")
const submitButton = document.getElementById("submit-button")
timerInterval = null
secondsLeft = 75;

// function timer(){
//         var counter = 80;
//         setInterval(function() {
//           counter--;
//            if (counter >= 0) {
//               span = document.getElementById("time");
//               span.innerHTML = counter;
//            }
//            else {
//             window.location.reload();
//                alert ("sorry out of time.")
//               clearInterval(counter);
//             }
//             timeText.textContent = counter;
//           }, 1000);
//      };

function timer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeText.textContent = secondsLeft
        if (secondsLeft <= 0) {
            endGame()
            window.location.reload
            clearInterval(timerInterval);
            nextbutton.classList.add("hide")
        }
    }, 1000)
}

startbutton.addEventListener("click", startGame)
nextbutton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()

})
document.getElementById

function setNextQuestion(questions) {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

restartButton.addEventListener("click", startGame)
restartButton.addEventListener("click", timer)

function startGame(){
    console.log("started");
    timer();
    startbutton.classList.add("hide");
    questionContainterElement.classList.remove("hide");
    timeText.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    setNextQuestion()
}


function showQuestion(question){
    questionElement.innerText = question.question
     question.answers.forEach(function (answers) {
             const button = document.createElement("button");
             button.innerText = answers.text;
             button.classList.add("btn");
             if (answers.correct) {
                 button.dataset.correct = answers.correct;
                 button.addEventListener("click", function(e) {
                    selectAnswer(e)
                 })
             }
             button.addEventListener("click", selectAnswer);
             answerButtonsElement.appendChild(button);
             button.addEventListener("click", function(e) {
                selectAnswer(e)
                secondsLeft -= 20;
              })
     })
};

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
        finishButton.classList.remove("hide")
    }
}
finishButton.addEventListener("click", endGame)

function endGame() {
    finishButton.classList.add("hide")
    questionElement.classList.add("hide")
    answerButtonsElement.classList.add("hide")
    endScreenElement.classList.remove("hide")
    //stop timer, enter time value to scoreboard
    //initials need to go to scoreboard
        clearInterval(timerInterval);
    finalScore.innerText = (secondsLeft)
}
submitButton.addEventListener("click", submitScore)
function populateScoreboard() {
  leaderBoard.innerHTML = ""
  for (i = 0; i < scores.length; i++) {
    var players = document.createElement("li")
        players.innerText = scores[i][0]+", "+scores[i][1]
        leaderBoard.appendChild(players)
  }
}
function submitScore() {
    endScreenElement.classList.add("hide")
    submitButton.classList.add("hide")
    scoreboardElement.classList.remove("hide")
    scores.push([finalScore.innerHTML, userName.value])
    scores.sort(function(a, b) {
     return b[0] - a[0]
    })
    populateScoreboard()
}

function resetGame() {//NEED TO RESET STATES CORRECTLY TO BEGIN THE TEST AGAIN
    submitButton.classList.remove("hide")
    nextbutton.classList.remove("hide")
    questionElement.classList.remove("hide")
    answerButtonsElement.classList.remove("hide")
    endScreenElement.classList.add("hide")
    scoreboardElement.classList.add("hide")
    startGame()
    // secondsLeft = 75;
  }
  
  restartButton.addEventListener("click", resetGame) 
  
  resetButton.addEventListener("click", clearBoard)
    function clearBoard() {
      scores = []
      populateScoreboard()
    }
  
  highScorePage.addEventListener("click", showScores)
    function showScores() {
      scoreboardElement.classList.remove("hide")
      questionElement.classList.add("hide")
    answerButtonsElement.classList.add("hide")
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
//  we need questions
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
