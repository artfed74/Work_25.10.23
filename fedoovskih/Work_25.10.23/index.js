// let cats=document.querySelector('#cats');
// cats.innerHTML="Коты-много едят";

// let p=document.createElement("p");
// let text=document.createTextNode("Этот текст был создан динамически");
// p.append(text);
// document.body.append(p);
let form=document.getElementById('form');
let a=document.getElementById('name');
let b=document.getElementById('email');
let button=document.getElementById('but');
form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log("Значение поля name:"+a.value);
    console.log("Значение поля email:"+b.value);
})




