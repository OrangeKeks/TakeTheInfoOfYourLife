let pos = document.getElementById('btn');
let timer = 10;
function timers()
{

timer--;
pos.style.filter = `blur(${timer}px)`;
if (timer <= 0)
{
clearInterval(inter);
}
}

function turnon()
{
   let inter = setInterval(timers, 35);
}

pos.addEventListener("click",  turnon);








let searchBtn = document.getElementById("searchBtn");
let searchValue = document.getElementById("searchValue");
let card = document.getElementById("card");
let load = document.getElementById("load");
let decor = document.getElementById("decor");

let dataCard;

searchBtn.addEventListener("click", getCard);

async function getCard()
{
decor.classList.add("d-none");
load.classList.remove("d-none");
card.classList.add("d-none");
const respone = await fetch(`https://api.github.com/users/${searchValue.value}`);

if (respone.ok)
{
   dataCard = await respone.json()
   console.log("Данные:", dataCard);
   generetaCard();
}
else
{
decor.classList.remove("d-none");
}
load.classList.add("d-none");
searchValue.value = "";
}

function generetaCard()
{
   card.innerHTML =
   `<img src="${dataCard.avatar.url}">
   <h1>${dataCard.login}</h1>
   <p>${dataCard.bio}</p>
    <nav>
       <div class="text-blue">
           <i class="far fa-books"></i>
           <span>${dataCard.public_repos}</span>
       </div>
       <div class="text-red">
           <i class="far fa-star"></i>
           <span>${dataCard.following}</span>
       </div>
       <div class="text-yellow">
           <i class="far fa-heart"></i>
           <span>${dataCard.followers}</span>
       </div>
       <div class="text-green" id="btn">
           <i class="fal fa-house"></i>
           <span>${dataCard.location}</span>
       </div>
    </nav>
    <a href="${dataCard.html_url}">Перейти</a>`

    card.classList.remove('d-none');
}
