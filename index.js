let hi = document.querySelector('h1');
let body = document.querySelector('body');
body.addEventListener('keydown', (hello) => {
  hi.innerHTML = hello.code;
});