const readlineSync = require("readline-Sync");

const mean=(a,b,c,d) =>{
    return (a+b+c+d)/4;
}
x=parseInt(readlineSync.question("Enter the 1st num : "));
y=parseInt(readlineSync.question("Enter the 2nd num : "));
z=parseInt(readlineSync.question("Enter the 3rd num : "));
j=parseInt(readlineSync.question("Enter the 4th num : "));

console.log(mean(x,y,z,j));
