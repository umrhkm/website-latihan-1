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

        if (panel.style.display === "block") {
            panel.style.display = "none";
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
                acc3Span.style.transform = "rotate(-90deg)";
            }
            panel.style.display = "block";
        }
    })
}