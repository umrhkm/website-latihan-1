const modal = document.querySelector('.modal')
const openModal = document.querySelector(".tombol-kirim")
const closeModal = document.querySelector(".close-modal")
const yakin = document.querySelector(".tombol-yakin")
const accordion = document.getElementsByClassName("accordion")
const acc1Span = document.querySelector(".acc1-span")
const acc2Span = document.querySelector(".acc2-span")
const acc3Span = document.querySelector(".acc3-span")

openModal.addEventListener('click', () => {
    modal.style.display = "flex";
})

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
})

yakin.addEventListener('click', () => {
    modal.style.display = "none";
})

for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', () => {
        const panel = accordion[i].nextElementSibling;
        if (panel.style.maxHeight === "300px") {
            panel.style.padding = "0px 15px";
            panel.style.maxHeight = "0";
            if (i === 0){
                accordion[i].style.borderTop = "1px solid rgba(0,0,0, 0.6)";
                accordion[i].style.borderRight = "1px solid rgba(0,0,0, 0.6)";
                accordion[i].style.borderLeft= "1px solid rgba(0,0,0, 0.6)";
                accordion[i].style.borderBottom = "1px solid rgba(0,0,0, 0.3)";
                acc1Span.style.transform = "rotate(90deg)";
            }
            if (i === 1){
                accordion[i].style.borderRight = "1px solid rgba(0,0,0, 0.6)";
                accordion[i].style.borderLeft = "1px solid rgba(0,0,0, 0.6)";
                accordion[i].style.borderBottom = "1px solid rgba(0,0,0, 0.3)";
                acc2Span.style.transform = "rotate(90deg)";
            } else if (i === 2){
                accordion[i].style.border = "1px solid rgba(0,0,0, 0.6)";
                accordion[i].style.borderRadius = "0px 0px 5px 5px";
                acc3Span.style.transform = "rotate(90deg)";
                accordion[i].style.borderTop = "0";
                accordion[i].style.borderBottom = "1px solid rgba(0,0,0, 0.6)";
                panel.style.borderBottom = "0";
                panel.style.borderRadius = "0 0 0px 0px";
            }
        } else {
            if (i === 0){
                panel.style.borderBottom = "1px solid rgba(0,0,0, 0.3)";
                accordion[i].style.border = "1px solid rgba(0,0,0, 0.6)";
                accordion[i].style.borderBottom = "1px solid rgba(0,0,0, 0.3)";
                acc1Span.style.transform = "rotate(-90deg)";
            }
            if (i === 1){
                accordion[i].style.border = "1px solid rgba(0,0,0, 0.6)";
                accordion[i].style.borderTop = "0";
                accordion[i].style.borderBottom = "1px solid rgba(0,0,0, 0.3)";
                panel.style.borderBottom = "1px solid rgba(0,0,0, 0.3)";
                acc2Span.style.transform = "rotate(-90deg)";
            } else if (i === 2){
                accordion[i].style.border = "1px solid rgba(0,0,0, 0.6)";
                accordion[i].style.borderTop = "0";
                accordion[i].style.borderRadius = "0px 0px 0px 0px";
                accordion[i].style.borderBottom = "1px solid rgba(0,0,0, 0.3)";
                panel.style.borderBottom = "1px solid rgba(0,0,0, 0.6)";
                panel.style.borderRadius = "0 0 5px 5px";
                acc3Span.style.transform = "rotate(-90deg)";
            }
            panel.style.padding = "15px 15px";
            panel.style.maxHeight = "300px";
        }
    })
}

let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("slider");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);

const tombolCek = document.querySelector(".tombol-cek");

tombolCek.addEventListener('click', () => {
    let value = document.getElementsByClassName("input-angka")[0].value
    let jawaban = document.getElementsByClassName("game-answer")[0]
    console.log(value)
    if (value-1 === -1){
        jawaban.innerHTML = "invalid input"
    } else if (value % 3 === 0 && value % 5 === 0){
        jawaban.innerHTML = "FizzBuzz!"
    } else if (value % 5 === 0) {
        jawaban.innerHTML = "Buzz!"
    } else if (value % 3 === 0){
        jawaban.innerHTML = "Fizz!"
    } else{
        jawaban.innerHTML = `${value}`
    }
})

const tombolPokeAPI = document.getElementsByClassName("tombol-pokeapi")[0];
const tombolPokeAPIPikachu = document.getElementsByClassName("tombol-pikachu")[0];
const panelPokeAPIContainer = document.getElementsByClassName("panel-pokeapi-container")[0];

// Contoh Bentuk 1
// tombolPokeAPI.addEventListener('click', () => {
//     panelPokeAPI.innerHTML = "";
//     const xhttp = new XMLHttpRequest();
//     const url = "https://pokeapi.co/api/v2/pokemon?limit=15";
//     const httpMethod = "GET";
//     xhttp.onload = function() {
//         const response = JSON.parse(this.responseText);
//         const results = response.results;
//         for (i = 0; i < results.length; i++){
//             panelPokeAPI.innerHTML += `${results[i].name}  <br>`;
//         }
//     }
//     xhttp.open(httpMethod, url);
//     xhttp.send();
// })

// Contoh Bentuk 2
async function fetchData(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
        method: "GET"});

    const json = await response.json();
    const results = json.results;

    for (i = 0; i < results.length; i++){
        const response2 = await fetch(`${results[i].url}`, {
            method: "GET"});
        const json2 = await response2.json();

        panelPokeAPIContainer.innerHTML += `
        <div class="pokemon-card-${json2.types[0].type.name}">
            <p>${json2.name}</p>
            <img src="${json2.sprites.back_default}"></img>
            <p>${json2.types[0].type.name}</p>
        </div>
        `;
    }

}

async function fetchDataPikachu(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25", {
        method: "GET"});

    const json = await response.json();
    panelPokeAPIContainer.innerHTML = `<p>${json.id}</p>
    <p>${json.name}</p>
    <img src="${json.sprites.back_default}"></img>
    <p>${json.types[0].type.name}</p>`;
}

tombolPokeAPIPikachu.addEventListener('click', () => {
    panelPokeAPIContainer.innerHTML = "";
    panelPokeAPIContainer.style.display = "flex";
    panelPokeAPIContainer.style.flexDirection = "column";
    fetchDataPikachu();
})

tombolPokeAPI.addEventListener('click', () => {
    panelPokeAPIContainer.innerHTML = "";
    panelPokeAPIContainer.style.display = "flex";
    panelPokeAPIContainer.style.flexDirection = "row";
    panelPokeAPIContainer.style.flexWrap = "wrap";
    
    fetchData();
})