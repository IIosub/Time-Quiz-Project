// Array containing 5 question objects
const questions = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["head section", "body section", "", "head and body sections"],
    correctAnswer: 1,
  },
  {
    question:
      " ____ is a keyword used to declare a variable that cannot be reassigned a new value.",
    answers: ["const", "var", "let"],
    correctAnswer: 0,
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function functionName()",
      "function:functionName()",
      "functionName",
    ],
    correctAnswer: 0,
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      "for(i=0;i++",
      "for (i<=5)",
      "for i= 1 to 5",
      "for(let i=0; i >5;i++)",
    ],
    correctAnswer: 3,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: ["rdn(7.85)", "round(7.85)", "Math.floor(7.85)", "Math.rdn(7.85)"],
    correctAnswer: 2,
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: [
      "<-This is a comment->",
      "//This is a comment",
      "'This is a comment",
    ],
    correctAnswer: 1,
  },
];

function startQuiz() {
  let time = 0;
  const interval = document.getElementById("time");

  const timerInterval = setInterval(function () {
    time++;
    interval.textContent = time;
  }, 1000);
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);
