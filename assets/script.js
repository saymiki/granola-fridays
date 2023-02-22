// Define an array of quiz questions and answer choices
var quizQuestions = [
  {
    question: "Where do you go to make a repository?",
    choices: ["GitHub", "Club Penguin", "Facebook"],
    correctAnswer: "GitHub"
  },
  {
    question: "What does HTML stand for?",
    choices: ["Hairy Triceratops Makes Lemonade", "Harry Tries Making Limeaid", "HyperText Markup Language"],
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "What is the correct way to comment out lines in HTML?",
    choices: ["<!--- --->", "// //", "?? ?? ??"],
    correctAnswer: "<!--- --->"
  }
];

// Define the quiz settings
var quizDuration = 60; // in seconds
var highScoresKey = "highScores";

// Define the initial state of the quiz
var currentQuestionIndex = 0;
var score = 0;

// Get references to the HTML elements
var startButton = document.getElementById("start-button");
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var submitButton = document.getElementById("submit");
var timerEl = document.querySelector(".time");
var scoreEl = document.getElementById("score");
var highScoresEl = document.getElementById("high-scores");

// Define a function to start the quiz
function startQuiz() {
  // Hide the start button and display the quiz container
  startButton.style.display = "none";
  quizContainer.style.display = "visible";
  // Display the first quiz question
  displayQuizQuestion(); !!!!!!!
  console.log("test ", startButton.style.display)
  console.log("test ", quizContainer.style.display)
  // Start the quiz timer
  startQuizTimer();
}

// Add an event listener to the start button
startButton.addEventListener("click", startQuiz);
