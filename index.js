let body = document.body
let box = document.getElementById("box")
let hel = document.querySelectorAll(".hel")
let audio;
body.addEventListener("keydown", (event) => {
    console.log(event.key);
    audio = new Audio(`./audio/${event.key}.mp3`);
    audio.play();
});
hel.forEach((element) => {
    element.childNodes[0].addEventListener("click", () => {
        audio = new Audio(`./audio/${element.id}.mp3`);
        audio.play();
    });
});