// Array containing 5 question objects
const questions = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["head section", "body section", "", "head and body sections"],
    correctAnswer: 1,
  },
  {
    question:
      " ____ is a keyword used to declare a variable that cannot be reassigned a new value.",
    choices: ["const", "var", "let"],
    correctAnswer: 0,
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function functionName()",
      "function:functionName()",
      "functionName",
    ],
    correctAnswer: 0,
  },
  {
    question: "How does a FOR loop start?",
    choices: [
      "for(i=0;i++",
      "for (i<=5)",
      "for i= 1 to 5",
      "for(let i=0; i >5;i++)",
    ],
    correctAnswer: 3,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    choices: ["rdn(7.85)", "round(7.85)", "Math.floor(7.85)", "Math.rdn(7.85)"],
    correctAnswer: 2,
  },
  {
    question: "How can you add a comment in a JavaScript?",
    choices: [
      "<-This is a comment->",
      "//This is a comment",
      "'This is a comment",
    ],
    correctAnswer: 1,
  },
];

function startQuiz() {
  let time = 75;
  const interval = document.getElementById("time");

  const timerInterval = setInterval(function () {
    time--;
    interval.textContent = time;
  }, 1000);

  let currentQuestionIndex = 0;
  const questionTitle = document.getElementById("question-title");
  const questionsDiv = document.getElementById("questions");
  const choices = document.getElementById("choices");
  const currentQuestion = questions[currentQuestionIndex];

  questionTitle.textContent = currentQuestion.question;
  questionsDiv.classList.remove("hide");

  const startScreen = document.querySelector("#start-screen");
  startScreen.classList.add("hide");
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);
