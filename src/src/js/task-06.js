const input = document.querySelector("#validation-input");
const inputLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", event => {
  if (event.target.value.length === inputLength) {
    input.classList.add("valid");

    if (input.classList.contains('invalid')) {
        input.classList.remove('invalid');
    }
  } else {
    input.classList.add("invalid");
  }
});