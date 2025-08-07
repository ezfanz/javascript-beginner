/* If Statements = If a condition is true, execute some code if not, do something else */

// let age = 25;

// if(age >= 18 ){
//     console.log("You are old enough to enter this site");
// }else{
//     console.log("You must be 18+ to enter this site");

// }

/* If Statement */
let time = 9;

if (time < 12) {
  console.log("Good Morning");
} else {
  console.log("Good afternoon");
}

let isStudent = false;

if (isStudent) {
  console.log("You are a student!");
} else {
  console.log("You are NOT a student!");
}

let age = 29;
let hasLicense = true;

if (age >= 16) {
  console.log("You are old enough to drive");
  if (hasLicense) {
    console.log("You have your license!");
  } else {
    console.log("You do not have your license yet!");
  }
} else {
  console.log("You must be 18+ to have a license");
}

/* if else if */
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let umur = 0;

mySubmit.onclick = function () {
  umur = myText.value;
  umur = Number(umur);

  if (umur >= 100) {
    resultElement.textContent = `You are to OLD to enter this site`;
  } else if (umur == 0) {
    resultElement.textContent = `You can't enter You were just born.`;
  } else if (umur >= 18) {
    resultElement.textContent = `You are old enough to enter this site`;
  } else if (umur < 0) {
    resultElement.textContent = `Your age can't be below 0`;
  } else {
    resultElement.textContent = `You must be 18+ to enter this site`;
  }
};
