/* const = a variable that can't be changed */

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}

// console.log(`The circumference of the circle is: ${circumference}`);