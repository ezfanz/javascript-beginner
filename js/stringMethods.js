/* string methods = allow you to manipulate and work
with text (strings) */

let userName = "BroCode";

/* Find Character  */
userName.charAt(1);

/* Find Index*/
userName.indexOf("o");

/* Find Last Of Index */
userName.lastIndexOf("o");

/* Find Length Of The String */
userName.length;

/* trim */
userName.trim();

/* UpperCase & LowerCase */
userName.toUpperCase();
userName.toLowerCase();

/*repeat & startWith/endsWith */
userName.repeat(3);
let result = userName.startsWith(" ");
let result2 = userName.endsWith(" ");

/*includes*/
let result3 = userName.includes(" ");

if(result3){
    console.log("Your username can't begin with ' '");
}else{
    console.log(userName);
}

let phoneNumber = "019-320-5891"

// phoneNumber = phoneNumber.replaceAll("-", "/");

// phoneNumber = phoneNumber.padStart(15, "0");

phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);