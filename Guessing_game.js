const readlineSync = require("readline-Sync");
let cn=43;
let i;
while(i != cn){
    i=readlineSync.question("Enter a number ");
    if(i != cn){
        console.log("Try again");
    }
    else{
        console.log("Bravo!!!");
    }
}

console.log("You have entered a correct number ");