/* Method Chaining = Calling one method after another 
                    in one continuous line of code.
 */

let userName = window.prompt("Enter Your Username");

/* ---------- NO METHOD CHAINING ------- */

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extractChars = userName.slice(1);
// extractChars = extractChars.toLocaleLowerCase();
// userName = letter + extractChars;

/*----------- METHOD CHAINING ---------- */

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);