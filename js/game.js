const idEntry = document.getElementById('id-entry');
const storedData = sessionStorage.getItem('userData');
const rulesShow = document.getElementById('rules-btn');
const infoList = document.getElementById('info-list');
const rulesDialogBox = document.getElementById('menu-rules');
const closeRulesButton = document.getElementById('close-btn');
const playButton = document.getElementById('play-btn');
const usernameEntryField = document.getElementById('newUserInput');
const newUserLabelForAlert = document.getElementById('newPasswordInput');
const validationAlert = document.getElementById('alert-message');

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
