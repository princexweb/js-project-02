let ag = document.querySelector('main'); 
ag.addEventListener('mousemove', (e) => {
    console.log(e.clientX, e.clientY);
    let x = e.clientX;
    let y = e.clientY;
    ag.style.setProperty('--x', x + 'px');
    ag.style.setProperty('--y', y + 'px');
});