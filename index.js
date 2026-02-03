let main = document.querySelector("main");
let img = document.querySelector("img");
main.addEventListener("mousemove", function(hola) {
  img.style.top = hola.y + "px";
  img.style.left = hola.x + "px";
  console.log(hola.x, hola.y);
})