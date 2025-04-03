//map function
let num=[1,2,3,4];
let double =num.map(function(el){
    return el*el;
});
let students=[
    {name:"Arshita",
      marks:92,  
    },
    {name:"Shita",
     marks:96, 
    },
    {name:"Hrshita",
     marks:92.5, 
    },
];
let gpa = students.map((el)=>{
    return el.marks/10;
});
//filter function
let nums =[2,4,1,5,6,2,,8,9];
let even =nums.filter((el)=>{return el%2==0});
let odd =nums.filter((el)=>{return el%2!=0});
let smallnum =nums.filter((el)=>{return el<5});
//every method
[2,4,5].every((el)=>el%2==0);//false
[2,4,6].every((el)=>el%2==0);//true
//reduce method
let num1=[1,2,3,4];
let finalval=num1.reduce((res,el)=>res+el);
console.log(finalval);
let Array=[1,2,4,5,7,8,45];
let max=Array.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(max);
//check if all number in our array are multiples of 10 or not
let num2=[10,20,30,50,80];
let ans=num2.every((el)=>el%10==0);
console.log(ans);
//create a function to find the min number in an array
let array1=[2,4,5,6,1,9,5];
let min=array1.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
});
console.log(min);
//default value:
function sum(a,b=2){
    return a+b;
};
let arr=[1,3,2,6,5,8,5,4];
Math.min(...arr);//1
console.log(...arr);//1 3 2 6 5 8 5 4
console.log(..."Arshita");
arr.push(10);//10
arr.max(...arr);//10
//spread litral
let newArr=[...arr];
console.log(newArr);


