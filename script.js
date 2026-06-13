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
price:500,
image:"images/1780832329597.jpg"
},

{
title:"고요가 머무는 곳",
category:"풍경",
price:500,
image:"images/1781255699856.jpg"
},


{
title:"햇살이 앉은 곳",
category:"풍경",
price:500,
image:"images/1781341720258.jpg"
},

{
title:"초여름",
category:"풍경",
price:500,
image:"images/1781341720187.jpg"
}
];

function setCategory(category){
currentCategory = category;
render();
}

function purchase(){
window.open(
"https://instagram.com/sh.market.1",
"_blank"
);
}

function openModal(photo){

document.getElementById("modal").classList.add("active");

document.getElementById("modalImg").src =
photo.image;

document.getElementById("modalTitle").innerText =
photo.title;

document.getElementById("modalCategory").innerText =
"카테고리 : " + photo.category;

document.getElementById("modalPrice").innerText =
"₩ " + photo.price.toLocaleString();

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

photo.title
.toLowerCase()
.includes(keyword)

);

document.getElementById("gallery").innerHTML =

filtered.map(photo => `

<div class="card"><img
src="${photo.image}"
onclick='openModal(${JSON.stringify(photo)})'
draggable="false"

«»

<div class="content"><h3>${photo.title}</h3><p>${photo.category}</p><p class="price">
₩ ${photo.price.toLocaleString()}
</p><button
class="buy-btn"
onclick="purchase()">
인스타 문의
</button>

</div></div>`).join("");

}

document.addEventListener(
"contextmenu",
e => e.preventDefault()
);

render();