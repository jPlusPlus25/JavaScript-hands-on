//function
function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

function isadult(){
    let age=13;
    if(age>=18){
        console.log("adult");
    }else{
        console.log("not adult")
    }
}

print1to5();
isadult();
function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
}
printPoem();

function dice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
}
dice();
function printname(name){
    console.log(name);
} 
printname("Arshita");
function printInfo(name,age){
    console.log(name,age);
}
printInfo("Arshita",25);
function averagenum(a,b,c){
    console.log((a+b+c)/3);
}
averagenum(5,6,7);
function multiplicationtable(num){
    for(let i=1;i<=10;i++){
        console.log(num +" X "+i+" = "+num*i);
    }
}multiplicationtable(5);
function sumofnum(num){
    
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i;
    }

    return sum;
}
console.log(sumofnum(5));
let arr=["Ar","sh","it","a"];
function concat(arr){
    let result="";
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result;
}
//console.log(concat(arr));

function multipleGreet(func,n){//higher order function
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet=function(){
    console.log("Hello");
}
multipleGreet(greet,2);
let odd=function(n){
    console.log(!(n%2==0));
}
let even=function(n){
    console.log(n%2==0);
}
function oddOrEven(request){
    if(request=="odd"){
        let odd=function(n){
        console.log(!(n%2==0));
    }
        return odd;
    }else if(request=="even"){
        let even=function(n){
        console.log(n%2==0);
        }
        return even;
    }else{
        console.log("not even or not odd");
    }
}const calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },sub:function(a,b){
        return a-b;
    },mul:function(a,b){
        return a*b;
    }
};
//try & catch
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch{
    console.log("caught an error.. a is not define");
}console.log("hello");
console.log("hello");
const sum=(a,b)=>{
    console.log(a+b);
};
const cube=(n)=>{
    return n*n*n;
}
const pow=(a,b)=>{
    return a**b;
}
