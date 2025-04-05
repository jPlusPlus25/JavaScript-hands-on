//event listenrs
const box1=document.getElementById('box-1');
box1.addEventListener('click',()=>{
    console.log('click by event');
});

box1.addEventListener('click',()=>{
    console.log('click by event 2');
});
box1.addEventListener('click',(e)=>{ //e or event
    console.log('event object',e);//event object ni badhi information mle
});
box1.addEventListener('mousemove',(e)=>{ //e or event
    console.log('event object',e.clientX,e.clientY);//event object ni badhi information  e.clientX,e.clientY: event object 68 54
});
const nameInput =document.getElementById('nameInput');
nameInput.addEventListener('keydown',(e)=>{
    console.log('key',e.key);
});
nameInput.addEventListener('focus',(e)=>{
    console.log('key',e);
});