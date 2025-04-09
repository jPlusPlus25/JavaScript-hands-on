/*h1=document.querySelector("h1");
function changeColor(color,delay,nextColorChange){//nextColorChange ae callback che
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange)nextColorChange();
    },delay);
}
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("orange",1000);
    });
});
//callback ki nesting ko callbackhell kehte he*/
/*function savetoDb(data){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        console.log("your data was saved :",data);
    }else{
        console.log("weak connection. data not saved");
    }
}*/

/*function savetoDb(data,succsess,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        succsess();
    }else{
        failure();
    }
}
savetoDb(
    "SlTIET",
    ()=>{
        console.log("succsess:your data was saved");
        savetoDb("Arshita" ,
            ()=>{
                console.log("succsess2: hello");
            },
                ()=>{
                    console.log("failure2:weak connection");
                }
        );
    },
    ()=>{
        console.log("failure:weak connection. data not saved");
    }
);*/
//refacoring with promises
function savetoDb(data){
    return new Promise((success,failure)=>{
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success("success: data was save");
    }else{
        failure(" failure : weak connection");
    }
    });
}
                //then() and catch() methods
/*savetoDb("Arshita").then(()=>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected");
});*/
                //promise chainning
/*savetoDb("Arshita")
    .then(()=>{
    console.log("data 1 saved:promise was resolved");
    return savetoDb("hello world")
})
    .then(()=>{
        console.log("data 2 saved:promise was resolved");
    })

.catch(()=>{
    console.log("promise was rejected");
});*/
                //result & errors in promises
 /*savetoDb("Arshita")
                .then((result)=>{
                console.log("data 1 saved:promise was resolved");
                console.log("result of promise:",result);
                return savetoDb("hello world")
            })
                .then((result)=>{
                    console.log("data 2 saved:promise was resolved");
                    console.log("result of promise:",result);
                })
            
            .catch((errors)=>{
                console.log("promise was rejected");
                console.log("errors of promise:",errors);
            }); */
            
//async function
async function greet(){
    return "hello!";
}  
greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was :",result);
})          
.catch((err)=>{
    console.log("promise was rejected with err :",err);
});
