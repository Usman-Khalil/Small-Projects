let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll("#button");
let ac = document.querySelector("#AC");
let del = document.querySelector("#Del");
let equal = document.querySelector("#equal");
let msg = document.querySelector("h1");


ac.addEventListener("click" , () => {
        screen.innerText = "";
})

del.addEventListener("click" , () => {
        screen.innerText = screen.innerText.toString().slice(0,-1);
})

equal.addEventListener("click" , () => {
        screen.innerText = eval(screen.innerText) ;
})

msg.addEventListener("click" , () => {;
        screen.style.fontSize = "50px";
        screen.style.color = " #29bf12";
})

buttons.forEach ((button)  => {
    button.addEventListener("click" , () => {
        console.log(button.innerText);
        screen.innerText = screen.innerText  + button.innerText;
    })
})



