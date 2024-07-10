const readlineSync = require("readline-Sync");
let num=readlineSync.question("Write any number ");
num=parseInt(num);

if(num%2==0 ){
    console.log("The number is divided by 2");
}
else if( num%3==0){
    console.log("The number is divided by 3");
}
else{
    console.log("The number is not divided by 2 and 3");
}