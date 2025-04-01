const student1={
    name:"Jay",
    marks:91,
    prop:this,//global scope
    getName:function(){
        return this.name;
    },
};