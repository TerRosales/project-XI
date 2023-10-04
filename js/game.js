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
const lifeCount = document.getElementById('life-counter');
const retryButton = document.getElementById('retry');



let attemptsRemaining = 5;


lifeCount.innerHTML = attemptsRemaining;




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
                correctAnswer = generateMath();
                answerInput.value = '';
            } else if (attemptsRemaining > 0) {
                resultElement.classList.add('wrongAnswer');
                resultElement.textContent = `Correct Answer is`;
                    setTimeout(function() {
                        resultElement.textContent = correctAnswer;
                        setTimeout(function() {
                            resultElement.textContent = `Try Again`;
                            correctAnswer = generateMath();
                            resultElement.classList.remove('wrongAnswer');
                        }, 1000)
                    }, 900)
                attemptsRemaining--;
                lifeCount.innerHTML = attemptsRemaining;
                
            } else {
                if (attemptsRemaining >= 0) {
                    resultElement.innerHTML = "<p><span>Game Over</span>, Try Again<p>"

                    setTimeout(function() {
                        retryButton.textContent = 'Retry';
                        firstNumber.textContent = ' ';
                        secondNumber.textContent = ' ';
                        operatorSign.textContent= ' ';
                        setInterval(function() {
                            rulesDialogBox.classList.add('showGameRules');
                            rulesDialogBox.classList.remove('hiddenRules');
                        },1300)
                    }, 1200)
        
                    correctAnswer = generateMath();
                    answerInput.value = '';
                    attemptsRemaining = 5;
                }
            }
        }
    })
});






