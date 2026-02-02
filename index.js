let btn = document.querySelector("button");
let main = document.querySelector("main");
let colors = ["teal", "blue", "aqua", "green", "purple", "pink", "yellow", "orange", "red", "brown"];

btn.addEventListener("click", function() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let div = document.createElement("div");
    div.style.backgroundColor = randomColor;
    console.log(randomColor,colors.indexOf(randomColor));
    div.style.borderRadius = "50%";
    main.style.overflow = "hidden";
    let c1 = Math.floor(Math.random() * 6);
    div.style.height = `${c1}rem`;
    div.style.width = `${c1}rem`;
    div.style.position = "absolute";
    div.style.top = Math.random() * 100 + "%";
    div.style.left = Math.random() * 100 + "%";
    main.appendChild(div);

});