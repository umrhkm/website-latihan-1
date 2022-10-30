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