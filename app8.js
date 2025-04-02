const student1={
    name:"Jay",
    marks:91,
    prop:this,//global scope
    getName:function(){
        return this.name;
    },
};
//foreach loop
let arr=[1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);
//or
arr.forEach(function(el){
    console.log(el);
});
let arr1=[
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
arr1.forEach((student)=>{
    console.log(student.name)
});
arr1.forEach((student)=>{
    console.log(student.marks)
});
let arr2=[1,2,3,4,5];
function print(el){
    console.log(el*2);
}
arr2.forEach(print);
//or
arr2.forEach(function(el){
    console.log(el);
});
//map function
let num=[1,2,3,4];
let double =num.map(function(el){
    return el*el;
});