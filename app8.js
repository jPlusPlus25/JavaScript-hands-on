const student1={
    name:"Jay",
    marks:91,
    prop:this,//global scope
    getName:function(){
        return this.name;
    },
};
let arr=[1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);
//or
