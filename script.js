let currentCategory = "전체";

const photos = [

{
title:"민들레 홀씨",
category:"꽃",
price:500,
image:"1780575171750.jpg"
},

{
title:"노을진 바다",
category:"풍경",
price:5000,
image:"images/sunset.jpg"
},

{
title:"숲속 사슴",
category:"동물",
price:7000,
image:"images/deer.jpg"
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
onerror="this.src='https://via.placeholder.com/600x400?text=Photo'"
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

render();
