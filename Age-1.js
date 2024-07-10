
const readlineSync = require("readline-Sync");
let age=readlineSync.question("what is your age?" );
age=parseInt(age);
if(age>10 && age<20){
  console.log("your age is between 10 and 20");
}
else{
  console.log("your age is not between 10 and 20");
}