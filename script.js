let currentCategory = "전체";

const photos = [

{
title:"민들레 홀씨",
category:"꽃",
price:500,
image:"images/1780575171750.jpg"
},

{
title:"사람마다 다르게 느끼는 돌다리",
category:"풍경",
price:600,
image:"images/1780832329597.jpg"
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
onerror="this.src='images/1780575171750.jpg'"
>

<div class="watermark">
SH.MARKET.1
</div>

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

render();
function openModal(src){
document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src=src;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

document.addEventListener("contextmenu", e=>{
e.preventDefault();
});

document.addEventListener("dragstart", e=>{
e.preventDefault();
});

document.addEventListener("selectstart", e=>{
e.preventDefault();
});