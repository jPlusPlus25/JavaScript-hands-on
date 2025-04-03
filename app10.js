//spread litral
let arr=[1,3,2,6,5,8,5,4];
let newArr=[...arr];
console.log(newArr);
let chars=[..."hello"];
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let num=[...odd,...even];
console.log(num);//(10) [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

