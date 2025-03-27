//arrays method
let cars=["audi","bmw","xuv","maruti"];
console.log(cars.push("toyota"));
console.log(cars);
console.log(cars.unshift("farari"));
console.log(cars);
console.log(cars.pop());
console.log(cars.shift());
//concat method
arr1=[1,2,3];
arr2=[4,5,6];
console.log(arr1.concat(arr2));
console.log(arr1.reverse());
console.log(arr1.reverse());
console.log(arr2.slice(2));
console.log(arr2.slice(-2));
//splice method
let colors=["red","yellow","blue","orange","pink","white"];
console.log(colors.splice(4));//['pink','white']
console.log(colors.splice(0,1));//['red']
console.log(colors);//['yellow','blue','orange']
console.log(colors.splice(0,1,"black","grey"));//["black","grey",'blue','orange']




