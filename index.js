let btn = document.querySelector("button");
let main = document.querySelector("main");
let colors = ["teal", "blue", "aqua", "green", "purple", "pink", "yellow", "orange", "red", "brown"];

btn.addEventListener("click", function() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let div = document.createElement("div");
    div.style.backgroundColor = randomColor;
    console.log(randomColor,colors.indexOf(randomColor));
    div.innerHTML = randomColor;
    main.style.overflow = "hidden";
    div.style.height = "7rem";
    div.style.width = "7rem";
    div.style.position = "absolute";
    div.style.top = Math.random() * 100 + "%";
    div.style.left = Math.random() * 100 + "%";
    main.appendChild(div);

});