var startbutton = document.getElementById("start-btn");
var nextbutton = document.getElementById("next-btn");
const questionContainterElement = document.getElementById("question-container")
const timeText = document.getElementById("time")
const button1 = document.getElementById("btn1")

startbutton.addEventListener("click", startGame)
document.getElementById
function startGame(){
    timer()
    console.log("started")
    startbutton.classList.add("hide")
    questionContainterElement.classList.remove("hide")
    timeText.classList.remove("hide")
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
          alert('sorry, out of time');
          clearInterval(counter);
        }
        timeText.textContent = counter;
      }, 1000);
 };

// function startTimer(){
//     var counter = 75;
//     setInterval(function() {
//       counter--;
//       if (counter >= 0) {
//         span = document.getElementById("timer");
//         span.innerHTML = counter;
//       }
//       if (counter === 0) {
//           alert('sorry, out of time');
//           clearInterval(counter);
//       }
//     }, 1000);
//   }
//   $("#btn2").click(function(){
//       startTimer();
//    });
// getting a timer working
//  first we need questions
const questions =  [
     {
         question: "What vitamin did sailors need to prevent scurvy?",
         answer1: "Vitamin C",
         answer2: "Vitamin A",
         answer3: "Vitamin B1",
         answer4: "All of the above",
         correctAnswer: "Vitamin C"
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

alert ("you got " + score + "/" + questions.length)
// we need for the game to be able to tell when the answer is correct and if not subtract time
// we need a way to keep score.
// we need for it to save to local data.
 var score = 0;

 button1.addEventListener("click", eval) // you have access to the text content of the button using "this" this.textContent