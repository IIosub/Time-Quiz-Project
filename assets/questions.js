// Array containing 5 question objects
const questions = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "head section",
      "body section",
      "head and body sections",
      "none of this",
    ],
    correctAnswer: 1,
  },
  {
    question:
      " ____ is a keyword used to declare a variable that cannot be reassigned a new value.",
    choices: ["const", "var", "let", "for"],
    correctAnswer: 0,
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function functionName()",
      "function:functionName()",
      "functionName",
      "function",
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
      "for= i++",
    ],
    correctAnswer: 3,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    choices: ["rdn(7.85)", "round(7.85)", "Math.floor(7.85)", "Math.rdn(7.85)"],
    correctAnswer: 2,
  },
  {
    question: "How can you add a single line comment in a JavaScript?",
    choices: [
      "<-This is a comment->",
      "//This is a comment",
      "'This is a comment",
      "/*This is a comment",
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
  const currentQuestion = questions[currentQuestionIndex];

  questionTitle.textContent = currentQuestion.question;
  questionsDiv.classList.remove("hide");

  const startScreen = document.querySelector("#start-screen");
  startScreen.classList.add("hide");

  const choicesContainer = document.getElementById("choices");
  const ulElement = document.createElement("ol");
  const firstQuestionChoices = currentQuestion.choices;

  firstQuestionChoices.forEach((choiceText, index) => {
    const liElement = document.createElement("li");
    liElement.textContent = choiceText;
    ulElement.appendChild(liElement);

    liElement.addEventListener("click", () => {
      const barLine = document.createElement("hr");
      questionsDiv.appendChild(barLine);

      const answer = document.createElement("p");
      questionsDiv.appendChild(answer);

      if (index === currentQuestion.correctAnswer) {
        answer.textContent = "Correct!";
      } else {
        answer.textContent = "Incorect!";
      }
    });
  });

  choicesContainer.appendChild(ulElement);
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);
