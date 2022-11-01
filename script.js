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


//PokeAPI
const tombolPokeAPI = document.getElementsByClassName("tombol-pokeapi")[0];
const tombolPokeAPIPikachu = document.getElementsByClassName("tombol-pikachu")[0];
const panelPokeAPIContainer = document.getElementsByClassName("panel-pokeapi-container")[0];

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

//Weather API
const tombolCari = document.getElementsByClassName("tombol-cari")[0]
const panelWeatherAPI = document.getElementsByClassName("weatherapi-panel-now-container")[0]
const panel2WeatherAPI = document.getElementsByClassName("weatherapi-panel-3day-container")[0]


const getWeatherForecast = async (cityName) => {
    try {
      const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=3`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key": "806bb6fda8mshb80e3daa6706bf6p1712c3jsn196736f59f81"
        },
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '806bb6fda8mshb80e3daa6706bf6p1712c3jsn196736f59f81',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function fetchDataWeather(namakota){

    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${namakota}&days=3`, options);

    const json = await response.json();

    panelWeatherAPI.innerHTML += `
    <h3>Cuaca Kota ${json.location.name} Saat Ini</h3>
    <p>${json.current.condition.text}</p>
    <img src="${json.current.condition.icon}">
    <p>temperatur: ${json.current.temp_c}</p>
    <p>kelembaban: ${json.current.humidity}</p>
    <p>terakhir diperbarui pada: ${json.current.last_updated}</p>
    `

    for (i = 0; i < json.forecast.forecastday.length; i++){
        const day = json.forecast.forecastday[i];
        console.log(day);
        panel2WeatherAPI.innerHTML += `
        <div class="weatherapi-panel-3day wp${i}">
            <h3>Cuaca Kota Tanggal ${day.date}</h3>
            <p>${day.day.condition.text}</p>
            <img src="${day.day.condition.icon}">
            <p>temperatur rata-rata: ${day.day.avgtemp_c} &#8451</p>
            <p>(temperatur minimum: ${day.day.mintemp_c} &#8451,</p>
            <p>temperatur maksimum: ${day.day.maxtemp_c} &#8451)</p>
            <p>kelembaban rata-rata: ${day.day.avghumidity} %</p>
        </div>
        `
    }

}

const searchWeather = async () => {
    const cityName = document.getElementsByClassName("input-kota")[0].value;
    if (!cityName) {
        panelWeatherAPI.style.display = "none";
        panel2WeatherAPI.style.display = "none";
        return null;
    }
  
    const weatherData = await getWeatherForecast(cityName);
    if (!weatherData.error) {
        panelWeatherAPI.innerHTML = "";
        panel2WeatherAPI.innerHTML = "";
        panelWeatherAPI.style.backgroundColor = "";
        panelWeatherAPI.style.display = "flex";
        panel2WeatherAPI.style.display = "flex";
        fetchDataWeather(cityName);
    } else {
        panelWeatherAPI.style.display = "flex";
        panelWeatherAPI.innerHTML = `<h4>Nama Kota ${cityName} Tidak Ada</h4>`;
        panel2WeatherAPI.innerHTML = "";
        panelWeatherAPI.style.backgroundColor = "rgb(243, 99, 95)";
    }
  }