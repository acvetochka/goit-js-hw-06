function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

const handleClick = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
};

button.addEventListener("click", handleClick);

