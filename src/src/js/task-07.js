const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener("change", event => {
    span.style.fontSize = `${event.target.value}px`;
});



