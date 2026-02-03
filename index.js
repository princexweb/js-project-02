const items = [
  {
    name: "Mountain",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "A beautiful view of mountains with clouds and nature vibes."
  },
  {
    name: "Laptop Workspace",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Clean coding workspace setup with laptop and desk."
  },
  {
    name: "Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    description: "Hot coffee cup perfect for morning energy."
  },
  {
    name: "Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Relaxing beach with blue water and peaceful environment."
  },
  {
    name: "City Night",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
    description: "City lights at night with amazing urban view."
  }
];
console.log(items.length);
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let c1 = Math.floor(Math.random() * items.length);
    let img = document.querySelector("img");
    img.src = items[c1].image;
    let name = document.querySelector(".name");
    name.textContent = items[c1].name;
    let desc = document.querySelector("");
    desc.textContent = items[c1].description;
});