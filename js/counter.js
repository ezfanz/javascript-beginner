/*Counter Program */

const deacreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

/* function to increase */
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

/* function to deacrease */
deacreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

/* function to reset */
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}