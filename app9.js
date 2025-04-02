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
