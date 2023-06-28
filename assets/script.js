const timeEl = document.getElementById("time");
var secondsLeft = 100;
var timerOn = false;

const startButton = document.querySelector("#startbutton");

function setTime() {
  // Sets interval in variable
  if (!timerOn) {
    timerOn = true;
    // onclick start button will disappear
    startButton.style.display = "none";
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      // preventDefault(event);

      if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
    }, 1000);
  }
}

// // Define the quiz settings
// var quizDuration = 60; // in seconds
// var highScoresKey = "highScores";

// // Define the initial state of the quiz
// var currentQuestionIndex = 0;
// var score = 0;

// // Get references to the HTML elements
// var startButton = document.getElementById("start-button");
// var quizContainer = document.getElementById("quiz-container");
// var questionEl = document.getElementById("question");
// var choicesEl = document.getElementById("choices");
// var submitButton = document.getElementById("submit");
// var timerEl = document.querySelector(".time");
// var scoreEl = document.getElementById("score");
// var highScoresEl = document.getElementById("high-scores");

// // Define an array of quiz questions and answer choices
// const quizQuestions = [
//   {
//     question: "Where do you go to make a repository?",
//     choices: ["GitHub", "Club Penguin", "Facebook"],
//     correctAnswer: "GitHub",
//   },
//   {
//     question: "What does HTML stand for?",
//     choices: [
//       "Hairy Triceratops Makes Lemonade",
//       "Harry Tries Making Limeaid",
//       "HyperText Markup Language",
//     ],
//     correctAnswer: "HyperText Markup Language",
//   },
//   {
//     question: "What is the correct way to comment out lines in HTML?",
//     choices: ["<!--- --->", "// //", "?? ?? ??"],
//     correctAnswer: "<!--- --->",
//   },
// ];
