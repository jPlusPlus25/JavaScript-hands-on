//spread litral
let arr=[1,3,2,6,5,8,5,4];
let newArr=[...arr];
console.log(newArr);
let chars=[..."hello"];
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let num=[...odd,...even];
console.log(num);//(10) [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
//spread with object literals
let data={
    email:"arshitapatel077@gmail.com",
    password:"abc123",
};
let datacopy={...data,id:123};//{email: 'arshitapatel077@gmail.com', password: 'abc123', id: 123}
let datacopy1={...data,id:123,country:"India"};//{email: 'arshitapatel077@gmail.com', password: 'abc123', id: 123, country: 'India'}
let arr1=[1,3,2,6,5,8,5,4];//val
let obj1={...arr1};//obj ->key:val
let obj2={..."hello"}//onj ->key:val
//rest method
function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us: ",args[i]);
    }
}
//destructuring method
let names=["Arshita","Jay","Rutvi","Rahi","Monika"];
let [winner,runnerup,secondRunnerup]=names;
let[winner1,runnerup1,...others]=names;
//object destructuring method
const student={
    name:"arshita",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"arshita765",
    password:"abcd726"
};
let btn = document.querySelector("button");
console.dir(btn);
btn.onclick=function(){
    alert("button was clicked");
};
let btns=document.querySelectorAll("button");
for (btn of btns){
   // btn.onclick=sayHello;
    //btn.onmouseenter=function(){
     //   console.log("you entered a button");
    //}
    //console.dir(btn);
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}

function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("how are u?")
}
btn.onclick=sayHello;


