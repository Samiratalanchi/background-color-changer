
window.onload = hello;

function hello() { 
    // get by querySelector
    var back= document.querySelector("body");
    // get by id value
    var button= document.getElementById("colorChanger");
    var label= document.getElementById("colorValue");

    window.onclick=function(event){
        if (event.target==button) {
            let color= "#";
            color += Math.random().toString(16).slice(2,8).toUpperCase();

            back.style.backgroundColor = color;
            label.innerText = color;
        }
    }
}
