const timeEl = document.getElementById("time");
var secondsLeft = 100;
var timerOn = false;

const startButton = document.querySelector("#startbutton");
const submitButton = document.querySelector("#submit");

function setTime() {
  // Sets interval in variables
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

// Define the initial state of the quiz
const currentQuestionIndex = 0;
const scoreArea = document.getElementById("scoreArea");
let score = 0;
const scoreDiv = document.createElement("div");
let qIndex = 0;
const quizContainer = document.getElementById("quizContainer");
const questionDiv = document.createElement("div");
const choicesDiv = document.createElement("div");

function questionRender() {
  // if the user finished the last question, this will trigger
  if (qIndex >= quizQuestions.length) {
    questionDiv.textContent = "CONGRATS! YOU'VE FINISHED THE QUIZ!";
    submitButton.style.display = "none";
    choicesDiv.style.display = "none";
    quizQuestions.question.style.display = "none";
    clearInterval(timerInterval);
    return;
    // display score
  }

  if (qIndex === 0) {
    // Create a new div element for the question and choice
    quizContainer.appendChild(questionDiv);
    quizContainer.appendChild(choicesDiv);
  }
  // display score
  scoreDiv.textContent = "Score: " + score;
  scoreArea.appendChild(scoreDiv);

  // populate question
  questionDiv.textContent = JSON.stringify(quizQuestions[qIndex].question);

  // populate choices
  for (let choice of quizQuestions[qIndex].choices) {
    // only create the radio elements and append to parent at first render
    // otherwise, just switch out the input and label text/value
    if (qIndex === 0) {
      let label = document.createElement("label");
      let input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      choicesDiv.appendChild(input);
      choicesDiv.appendChild(label);
    }
    label.innerText = choice;
    input.value = choice;
  }
}

function submit() {
  if (
    document.querySelector('input[name="choice"]:checked').value !==
    quizQuestions[qIndex].correctAnswer
  ) {
    secondsLeft -= 10; // Subtract 10 seconds from the timer
  } else if (
    document.querySelector('input[name="choice"]:checked').value ===
    quizQuestions[qIndex].correctAnswer
  ) {
    score += 20; //add points to score
  }
  console.log("yeethaw", score);

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
