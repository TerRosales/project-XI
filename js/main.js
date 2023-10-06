const menuDiv = document.getElementById('menu');
const infoList = document.getElementById('info-list');
const rulesDialogBox = document.getElementById('menu-rules');
const closeRulesButton = document.getElementById('close-btn');
const playButton = document.getElementById('play-btn');
const usernameEntryField = document.getElementById('newUserInput');
const newUserLabelForAlert = document.getElementById('newPasswordInput');
const validationAlert = document.getElementById('alert-message');

playButton.addEventListener("click",  () => {
    const inputValue = usernameEntryField.value;
    const isValid = /^[A-Za-z]*[0-9]+[A-Za-z]*$/.test(inputValue) && inputValue.length >= 4;

    if (isValid) {
        playButton.disabled = true;

        sessionStorage.setItem('userData', inputValue);

        usernameEntryField.disabled = true;

        rulesDialogBox.classList.remove('hidden');

        rulesDialogBox.classList.add('show');

        menuDiv.classList.add('move-left');

        infoList.classList.add('move-left');

        playButton.disabled = true;

        validationAlert.textContent = '';

        usernameEntryField.style.border = '0.20rem solid rgba(2, 2, 2, 0.90)'

    } else {
        validationAlert.innerHTML = 'MAXIMUM 8 CHARACTERS <br> MINIMUM 4 CHARACTERS <br> ENTER ATLEAST 1 NUMBER';

        usernameEntryField.style.border = '0.2rem solid red'
    }

})

closeRulesButton.addEventListener("click", () => {
    rulesDialogBox.classList.remove('show');

    rulesDialogBox.classList.add('hidden');

    menuDiv.classList.remove('move-left')

    sessionStorage.clear;

    playButton.disabled = false;

    usernameEntryField.disabled = false;
})




