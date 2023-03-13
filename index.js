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

const openModal = document.querySelector("a[data-open]");
const closeModal = document.querySelector("button[data-close]");
const modal = document.querySelector("[data-modal]");
const button = document.querySelector("[data-button]");

console.log(openModal);

openModal.addEventListener("click", onOpenModal);
closeModal.addEventListener("click", onCloseModal);

function onOpenModal() {
  modal.classList.remove("backdrop-hidden");
  button.classList.toggle("backdrop-hidden");
  console.log("HIIIII");
}

function onCloseModal() {
  modal.classList.add("backdrop-hidden");
  button.classList.toggle("backdrop-hidden");
  console.log("BYEEE");
}
