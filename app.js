const rollButtonConst = document.getElementById("roll");
let winLoseConst = document.getElementById("winLoseMessage");
let score = document.getElementById("scoreString");
let num = document.getElementById("scoreNum")

winLoseConst.innerText = " ";
let sum = 0;

rollButtonConst.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
const diceImageConst = 'images/inverted-dice-' + randomNum + '.png';
   document.getElementById("diceImage").setAttribute('src', diceImageConst);
   



   if (randomNum === 1) {
       winLoseConst.innerText = "You lose!"
       rollButtonConst.style.display = "none"
   } else if (sum >= 20) {
    winLoseConst.innerText = "You win!"
    rollButtonConst.style.display = "none"

   } else {
        sum += randomNum;
       num.innerText = sum;

   }
});

