const storedData = sessionStorage.getItem('userData');
const closeRulesButton = document.getElementById('close-btn');
const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const calcSign = document.getElementById('cal-sign');
const answerInput = document.getElementById('answerInput');
const submitAnswer = document.getElementById('submit-answer');
const resultElement = document.getElementById('result');
const idEntry = document.getElementById('id-entry');
const rulesShow = document.getElementById('rules-btn');
const rulesDialogBox = document.getElementById('menu-rules');
const operatorSign = document.getElementById('operator');

let attemptsRemaining = 3;

if (storedData) {
    idEntry.textContent = storedData;
}

rulesShow.addEventListener("click", () => {
    rulesDialogBox.classList.add('showGameRules');

    rulesDialogBox.classList.remove('hiddenRules');
})


closeRulesButton.addEventListener("click", () => {
    rulesDialogBox.classList.remove('showGameRules');

    rulesDialogBox.classList.add('hiddenRules');
})

resultElement.addEventListener("click", () => {
    function generateMath () {
        const num1 = Math.floor(Math.random() * 100);
        const num2 = Math.floor(Math.random() * 100);
    
        firstNumber.textContent = num1;
        secondNumber.textContent = num2;
    
        const operation = Math.random() < 0.5 ? '+' : '-';

        operatorSign.textContent = operation;
    
        return operation === '+' ? num1 + num2 : num1 - num2;

    }
    let correctAnswer = generateMath();


    


    submitAnswer.addEventListener('click' , () => {
        const userAnswer = parseInt(answerInput.value, 10);
    
        if (!isNaN(userAnswer)) {
            if (userAnswer === correctAnswer) {
                resultElement.textContent = "Thats Correct!"
                resultElement.classList.add('correctAnswer');
                setTimeout(function() {
                    resultElement.classList.remove('correctAnswer');
                    resultElement.textContent = "Next Question";
                }, 2000);
                attemptsRemaining = 2;
                correctAnswer = generateMath();
                answerInput.value = '';
            } else if (attemptsRemaining > 0) {
                resultElement.textContent = `Try Again! ${attemptsRemaining - 1} ${attemptsRemaining - 1 === 1 ? 'try' : 'tries'} left. `;
                resultElement.classList.add('wrongAnswer');

                attemptsRemaining--;
            } else {
                resultElement.textContent = "Game Over, Play Again"
                rulesDialogBox.classList.add('showGameRules');

                rulesDialogBox.classList.remove('hiddenRules');
                correctAnswer = generateMath();
                answerInput.value = '';
                attemptsRemaining = 3;
            }
        }

        if (attemptsRemaining === 0) {
            resultElement.textContent = "Game Over, Play Again"
            rulesDialogBox.classList.add('showGameRules');

            rulesDialogBox.classList.remove('hiddenRules');
            correctAnswer = generateMath();
            answerInput.value = '';
            attemptsRemaining = 3;
        }
    })
});






