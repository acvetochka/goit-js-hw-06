const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
// Варіант 1
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item")
  list.append(item);
});

// Варіант 2
// const element = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// list.insertAdjacentHTML("beforeend", element);

