const readlineSync=require("readline-Sync")
let marks={
    harry :90,
    shubam :9,
    lovish:56,
    monica:4
}
for(let i=0; i<Object.keys(marks).length;i++){
    console.log("the marks of " + Object.keys(marks)[i] + " are "+marks[Object.keys(marks)[i]]);
}