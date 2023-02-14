function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');

const divBoxes = document.querySelector('#boxes');

function createBoxes(amount) {
  amount = input.value;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    const size = 30 + 10*i;
    divBoxes.append(div);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
  }
}

buttonCreate.addEventListener("click", createBoxes);

function destroyBoxes() {
  divBoxes.textContent = "";
  input.value = "";
  // const divs = document.querySelectorAll('#boxes div');
  // divs.forEach((div) => {
  //   div.remove();
  // })
}

buttonDestroy.addEventListener("click", destroyBoxes);
