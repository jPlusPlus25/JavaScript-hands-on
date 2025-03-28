//favorite movie
const favoritemovie= "avtar";
let guess=prompt("write movie");
while((guess!=favoritemovie)&&(guess!="quit")){
    guess=prompt("wrong guess.please try again");
}if(guess==favoritemovie){
    console.log("congratulation");
}
