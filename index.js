VANTA.BIRDS({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: 0xc1a36,
  color1: 0x3030c2,
  color2: 0x4e8b9f,
});

const date = new Date();
const hours = date.getHours();
console.log("Date: ", hours);

const openModal = document.querySelector("a[data-open]");
const closeModal = document.querySelector("button[data-close]");
const modal = document.querySelector("[data-modal]");
const button = document.querySelector("[data-button]");
const modalTitle = document.querySelector(".modal__title");

console.log(modalTitle.textContent);

console.log(openModal);

openModal.addEventListener("click", onOpenModal);
closeModal.addEventListener("click", onCloseModal);

function onOpenModal() {
  modal.classList.remove("backdrop-hidden");
  button.classList.toggle("backdrop-hidden");

  if (hours >= 6 && hours <= 11) {
    modalTitle.textContent = "Добрий ранок! Гарного тобі дня!";
  } else if (hours >= 12 && hours <= 21) {
    modalTitle.textContent = "Я радий тебе бачити! Заходь частіше!";
  } else if (hours >= 22 && hours <= 1) {
    modalTitle.textContent = "Здається вже запізно,  час лягати! Добраніч!";
  } else {
    modalTitle.textContent = "Ти чого тут ходиш? Бачив яка зараз година!?";
  }
 
}

function onCloseModal() {
  modal.classList.add("backdrop-hidden");
  button.classList.toggle("backdrop-hidden");
  
}
