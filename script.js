let questionsArray = [
  {
    question: "Who was the captain of PCT when they won the ICC World Cup in 1992?",
    options: ['Javed Miandad', 'Wasim Akram', 'Imran Khan', 'Inzamam-ul-Haq'],
    correct: 2,
  },
  {
    question: "Which Pakistani bowler has the most wickets in Test cricket?",
    options: ['S.Akhtar', 'W.Akram', 'W.Younis', 'Y.Shah'],
    correct: 1,
  },
  {
    question: "Who was the first Pakistani cricketer to score a triple century in Test cricket?",
    options: ['Hanif Mohammad', 'Javed Miandad', 'Inzamam-ul-Haq', 'Younis Khan'],
    correct: 0,
  }
];

let getQuestion = document.getElementById('question');
let getOptions = document.getElementsByClassName('choice');
let getNextButton = document.getElementById('submit-button');
let getScore = document.getElementsByClassName('score-container')[0]; 


function backgroundChanger(index) {
  getOptions[index].style.backgroundColor = 'rgb(2, 84, 2)';
}

function reversingBackgroundChanger(index) {
  getOptions[index].style.backgroundColor = 'rgb(66, 70, 152)';
}

let idx = 0;
function questionFunction() {
  if (idx < questionsArray.length) {
    let currentQuestion = questionsArray[idx];
    getQuestion.innerHTML = currentQuestion.question;

    for (let i = 0; i < getOptions.length; i++) {
      getOptions[i].innerHTML = currentQuestion.options[i];

      getOptions[i].onclick = function() {
        answer(currentQuestion.correct, i);
      };
    }
  } else {
    getQuestion.innerHTML = "Quiz Over! Do you want to try again?";
    getNextButton.innerHTML = "Play Again!";
  }
}

let score = 0;
function answer(correctIndex, selectedIndex) {
  if (selectedIndex === correctIndex) {
    alert("Correct");
    score++;
  } else {
    alert("Incorrect");
  }
  getScore.innerHTML = `Score: ${score}`;
  idx++;
}



getNextButton.addEventListener('click', function() {
  questionFunction();
});

questionFunction();
