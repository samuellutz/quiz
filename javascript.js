 
 var timerinterval = setInterval(() => {
     
 }, 75000 );
//  first we need questions
 var questions =  [
     {
         prompt: "What vitamin did sailors need to prevent scurvy?\N(a) vitamin c\N(b) vitamin A\N(c) vitamin B1\N(d) all of the above",
         answer: "a"
     },
     {
         prompt: "where do dolphins live?\N(a) a lake\N\(b)the river\N\(c)space\N\(d)the sea",
         answer: "d"
     },
     {
         prompt: "what is the third letter of the alphabet?\N(a) B\N\(b) C\n\(c) D\N\(d) Z",
         answer: "b"
     },
     {
         prompt: "what are your eyes for? \N(a) Hearing \N\(b)taste\N\(c)touch\N\(d) to see",
         answer: "d"
     },
 ];
//  we need for the prompt to pop up at random on the screen
for (var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer); 
    {score++;
        alert("correct");
    else {
        alert("incorrect");
        };
    };
};
alert ("you got " + score + "/" + questions.length)
// we need for the game to be able to tell when the answer is correct and if not subtract time
// we need a way to keep score.
// we need for it to save to local data.
 var score = 0;