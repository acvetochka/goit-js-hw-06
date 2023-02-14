const list = document.querySelector('ul#categories');
const listItem = list.children;
console.log("Number of categories: " + listItem.length);

const items= document.querySelectorAll(".item");
items.forEach((item) => {
    console.log("Category: " + item.firstElementChild.textContent);
    const itemsElements = item.querySelector("ul");
    console.log("Elements: " + itemsElements.children.length);
  });
