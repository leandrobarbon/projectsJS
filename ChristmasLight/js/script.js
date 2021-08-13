let ledRed = document.querySelector('.ledRed');
let ledOrange = document.querySelector('.ledOrange');
let ledYellow = document.querySelector('.ledYellow');
let ledGreen = document.querySelector('.ledGreen');
let ledBlueLight = document.querySelector('.ledBlueLight');
let ledBlue = document.querySelector('.ledBlue');
let ledPurple = document.querySelector('.ledPurple');

let buttonTurn = document.querySelector('.turn');

let buttonAlternative = document.querySelector('.alternative');

let buttonfast = document.querySelector('.fast');

buttonTurn.addEventListener('click', function () {
   ledRed.classList.toggle("ledRed-on");
   ledOrange.classList.toggle("ledOrange-on");
   ledYellow.classList.toggle("ledYellow-on");
   ledGreen.classList.toggle("ledGreen-on");
   ledBlueLight.classList.toggle("ledBlueLight-on");
   ledBlue.classList.toggle("ledBlue-on");
   ledPurple.classList.toggle("ledPurple-on");
});


buttonAlternative.addEventListener('click', function () {
   ledRed.classList.toggle("ledRed-alt");
   ledOrange.classList.toggle("ledOrange-alt");
   ledYellow.classList.toggle("ledYellow-alt");
   ledGreen.classList.toggle("ledGreen-alt");
   ledBlueLight.classList.toggle("ledBlueLight-alt");
   ledBlue.classList.toggle("ledBlue-alt");
   ledPurple.classList.toggle("ledPurple-alt");
});

buttonfast.addEventListener('click', function () {
   ledRed.classList.toggle("ledRed-fast");
   ledOrange.classList.toggle("ledOrange-fast");
   ledYellow.classList.toggle("ledYellow-fast");
   ledGreen.classList.toggle("ledGreen-fast");
   ledBlueLight.classList.toggle("ledBlueLight-fast");
   ledBlue.classList.toggle("ledBlue-fast");
   ledPurple.classList.toggle("ledPurple-fast");
});

