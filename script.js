let currentCategory = "전체";

const photos = [

{
title:"민들레 홀씨",
category:"꽃",
price:500,
image:"images/1780575171750.jpg"
},

{
title:"숲 사이로",
category:"풍경",
price:600,
image:"images/1780832329597.jpg"
},

{
title:"고요가 머무는 곳",
category:"풍경",
price:600,
image:"images/1781255699856.jpg"
}
];

function setCategory(category){
currentCategory = category;
render();
}

function purchase(title){

window.open(
"https://instagram.com/sh.market.1",
"_blank"
);

}

function openModal(image){

document.getElementById("modalImg").src = image;

document.getElementById("modal")
.classList.add("active");

}

function closeModal(){

document.getElementById("modal")
.classList.remove("active");

}

function render(){

const keyword =
document.getElementById("search")
.value
.toLowerCase();

const filtered =
photos.filter(photo =>

(currentCategory === "전체" ||
photo.category === currentCategory)

&&

photo.title.toLowerCase().includes(keyword)

);

document.getElementById("gallery").innerHTML =

filtered.map(photo => `

<div class="card">

<img
src="${photo.image}"
onclick="openModal('${photo.image}')"
draggable="false"
>

<div class="content">

<h3>${photo.title}</h3>

<p>${photo.category}</p>

<p class="price">
₩ ${photo.price.toLocaleString()}
</p>

<button
class="buy-btn"
onclick="purchase('${photo.title}')">
인스타 문의
</button>

</div>

</div>

`).join("");

}

document.addEventListener("contextmenu", e =>
e.preventDefault()
);

render();