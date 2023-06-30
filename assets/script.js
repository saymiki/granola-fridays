const timeEl = document.getElementById("time");
var secondsLeft = 100;
var timerOn = false;

const startButton = document.querySelector("#startbutton");
const submitButton = document.querySelector("#submit");

function setTime() {
  // Sets interval in variable
  if (!timerOn) {
    timerOn = true;
    // onclick start button will disappear
    startButton.style.display = "none";
    submitButton.style.visibility = "visible";
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      // preventDefault(event);

      if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
    }, 1000);
    questionRender();
  }
}

// Define an array of quiz questions and answer choices
const quizQuestions = [
  {
    question: "Where do you go to make a repository?",
    choices: ["GitHub", "Club Penguin", "Facebook"],
    correctAnswer: "GitHub",
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "Hairy Triceratops Makes Lemonade",
      "Harry Tries Making Limeaid",
      "HyperText Markup Language",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    question: "What is the correct way to comment out lines in HTML?",
    choices: ["<!--- --->", "// //", "?? ?? ??"],
    correctAnswer: "<!--- --->",
  },
];

// Define the quiz settings
const highScoresKey = "highScores";

// Define the initial state of the quiz
const currentQuestionIndex = 0;
const score = 0;
let qIndex = 0;
const quizContainer = document.getElementById("quizContainer");
const questionDiv = document.createElement("div");
const choicesDiv = document.createElement("div");

function questionRender() {
  // if the user finished the last question, this will trigger
  if (qIndex >= quizQuestions.length) {
    questionDiv.textContent = "CONGRATS! YOU'VE FINISHED THE QUIZ!";
    submitButton.style.display = "none";
  }

  if (qIndex === 0) {
    // Create a new div element for the question
    quizContainer.appendChild(questionDiv);
    quizContainer.appendChild(choicesDiv);
  }

  // populate question
  questionDiv.textContent = JSON.stringify(quizQuestions[qIndex].question);

  // populate choices
  for (let choice of quizQuestions[qIndex].choices) {
    let label = document.createElement("label");
    label.innerText = choice;
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "choice";
    input.value = choice;
    choicesDiv.appendChild(input);
    choicesDiv.appendChild(label);
  }
}

function submit() {
  // if the input.value of the chosen answer === null (undefined?), throw a warning and return (to kill the rest of the function)
  // if the input.value of the chosen answer !== quizQuestions[qIndex].correctAnswer, minus time
  // else (the answer is correct) add points

  qIndex++;
  questionRender();
  console.log(qIndex);
}

// Psuedocode
// create a cycle for the arrays
// assign css to arrays so they display properly
// onclick of start button first array will appear
// upon selection of answer score will increase or stay the same
// if correct asnwer increase score
// if  other than correct answer time will decrease
// once answer is chosen next array will appear
// cycle repeats until end of array

// at end of array display score
// allow input field for highscore input and to save
// create try again button to redirect to start and essenstially refresh the page maybe
