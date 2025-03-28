//for of loop
let fruits=["mango","apple","banana","graps"];

for(fruit of fruits){
    console.log(fruit);
}
//nested for of loop
let heroes =[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
for( hero of heroes){
    for( list of hero){
        console.log(list);
    }
}