let arr = [
    {
        nam:"prince",
        age:18, 
        height :5.6,
        weight:58
    },
    {
        nam:"rahul",
        age:18, 
        height :5.7,
        weight:58
    },
    {
        nam:"john",
        age:18, 
        height :5.7,
        weight:58
    },
    {
        nam:"doe",
        age:18, 
        height :5.7,
        weight:58
    },
    {
        nam:"smith",
        age:18, 
        height :5.7,
        weight:58
    },
    {
        nam:"wick",
        age:18, 
        height :5.7,
        weight:58
    },

]
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
btn.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*arr.length);
    h1.innerText = `Name : ${arr[random].nam} `;
})