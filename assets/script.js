const timeEl = document.getElementById("time");
var secondsLeft = 100;
var timerOn = false;
var timerInterval;

const startButton = document.querySelector("#startbutton");
const submitButton = document.querySelector("#submit");

function setTime() {
  // Sets interval in variables
  if (!timerOn) {
    timerOn = true;
    // onclick start button will disappear
    tryAgainButton.style.visibility = "hidden";
    startButton.style.visibility = "hidden";
    submitButton.style.visibility = "visible";

    timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      // preventDefault(event);

      if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      } else if (qIndex >= quizQuestions.length) {
        {
          clearInterval(timerInterval);
          timeEl.textContent = "0"; // Set the timer to zero
          // Handle end of the quiz
        }
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
const highscoresContainer = document.getElementById("highscoresContainer");
const highscoresDiv = document.createElement("div");
const questionDiv = document.createElement("h1");
const choicesDiv = document.createElement("div");
const label = document.createElement("label");
const input = document.createElement("input");
input.type = "radio";
input.name = "choice";

function questionRender() {
  // if the user finished the last question, this will trigger
  if (qIndex >= quizQuestions.length) {
    questionDiv.textContent =
      "CONGRATS! YOU'VE FINISHED THE QUIZ! " + "Your final score is " + score;
    // display score
    submitButton.style.visibility = "hidden";
    choicesDiv.innerHTML = "";
    // scoreDiv.innerHTML = "0";
    scoreDiv.style.display = "hidden";
    tryAgainButton.style.visibility = "visible";
    saveButton.style.visibility = "visible";
    nameInput.style.visibility = "visible";
    return;
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
  // clear choicesDiv before populating with new choices
  choicesDiv.innerHTML = "";

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

const tryAgainButton = document.getElementById("tryAgainButton");

// Add event listener to the "Try Again" button
tryAgainButton.addEventListener("click", function () {
  // Reset the necessary variables and elements to restart the quiz
  qIndex = 0;
  score = 0;
  secondsLeft = 100;
  timerOn = false;
  timeEl.textContent = secondsLeft;
  // choicesDiv.style.display = "visible";
  scoreDiv.style.display = "visible";
  scoreDiv.textContent = "Score: " + score;
  saveButton.style.visibility = "hidden";
  nameInput.style.visibility = "hidden";
  // quizQuestions.question.style.display = "visible";

  // Hide the "Try Again" button
  tryAgainButton.style.visibility = "visible";

  // Call the function to render the first questions
  setTime();
});

const saveButton = document.getElementById("saveButton");
const nameInput = document.getElementById("nameInput");

saveButton.addEventListener("click", function () {
  let name = nameInput.value;
  // Do something with the name, such as storing it in localStorage
  // console.log("Name: " + name);
  localStorage.setItem("name", name);
  const storedName = localStorage.getItem("name");
  // console.log("Stored Name: " + storedName);
  highscoresContainer.appendChild(highscoresDiv);
  highscoresDiv.innerHTML = storedName;
});
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
