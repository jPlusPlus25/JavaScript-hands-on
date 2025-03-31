//function
function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

function isadult(){
    let age=13;
    if(age>=18){
        console.log("adult");
    }else{
        console.log("not adult")
    }
}

print1to5();
isadult();
function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
}
printPoem();

function dice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
}
dice();
function printname(name){
    console.log(name);
} 
printname("Arshita");