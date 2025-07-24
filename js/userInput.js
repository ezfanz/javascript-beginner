/* How to accept user input in JavaScript 
    1. Easy Way = Window Prompt
    2. Profesional Way = HTML textbox
*/

/* Easy Way */

// let userName;

// userName = window.prompt("Enter your name: ");

// console.log(`Your name is ${userName}`);

/* Professional Way */
let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(`Your name is ${username}`);
    document.getElementById("myH1").textContent = `Welcome ${username}`;
}
