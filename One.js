console.log("My name is Arshita");
console.log(11);
console.log("Hello");
let a=10;
let b=5;
console.log("sum is "+a+b);
//trafic light code
let Light="green";

if(Light=="red"){
    console.log("Stop! light color is red");
}else if(Light=="yellow"){
    console.log("slow down! light color is yellow");
}else if(Light=="green"){
    console.log("go! light color is green");
}
//Operators
let age=25;
console.log(age>18);//true
console.log(age<18);//false
//non number
'a'<'A'//false
'a'<'b'//true
'A'<'B'//true
//practice set : create a system to calculate popcorn price based on the ize customer asked for:
let price=50;
if(price==250){
    console.log("size is 'XL'")
}else if(price==200){
    console.log("size is 'L'")
}else if(price==100){
    console.log("size is 'M'")
}else if(price==50){
    console.log("size is 'S'")
}else{
    console.log("not avalable")
}
//using switch statement day of week 
let day=1;
switch(day){
    case 1:console.log("Sunday");
    break;
    case 2:console.log("Monday");
    break;
    case 3:console.log("Tuesday")
    break;
    case 4:console.log("Wednesday")
    break;
    case 5:console.log("Thursday")
    break;
    case 6:console.log("Friday")
    break;
    case 7:console.log("Saturday")
    break;
    default:
        console.log("not a week day")
}
//page ke up side alert using
alert("something is wromg");
console.log("this is simpe log");
console.error("this is error msg");
console.warn("this is warning msg")
let name=prompt("enter your name");
console.log(name);