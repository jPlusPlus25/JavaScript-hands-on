function hello(){
    console.log("inside hello fnc");
    console.log("hello");
}
function demo(){
    console.log("calling hello fnc");
    hello();
}
console.log("calling demo fnc");
demo();
console.log("done, bye!");

//visualizing the call stack
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans=two()+one();
    console.log(ans);
}
three();