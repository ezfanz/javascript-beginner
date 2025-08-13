/* logical operators = used to combine or manipulate boolean values
                      (True or False) 
                      AND = &&
                      OR = || 
                      NOT = !
*/

const temp = 20;
const isSunny = true;

/* AND Example && */
if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}else{
    console.log("The weather iS BAD");
}

/* OR Example || */
if(temp <= 0 || temp > 30){
    console.log("The weather is BAD");
}else{
    console.log("The weather iS GOOD");
}

/* NOT Example ! */
if(!isSunny){
    console.log("It is SUNNY");
}else{
    console.log("It is CLOUDY");
}