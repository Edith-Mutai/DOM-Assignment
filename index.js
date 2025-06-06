document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = "silver";

  const title = document.querySelector("h1");
  title.style.color = "green";

  const h3Tags = document.querySelectorAll("h3");
  h3Tags.forEach(h3 => {
    h3.style.textTransform = "uppercase";
  });

  const fruitList = document.getElementById("fruList");
  const newFruit = document.createElement("li");
  newFruit.textContent = "Pineapples";
  newFruit.classList.add("new-item");
  fruitList.appendChild(newFruit);

  const vegList = document.getElementById("vegList");
  const newVeg = document.createElement("li");
  newVeg.textContent = "Carrots";
  newVeg.classList.add("new-item");
  vegList.appendChild(newVeg);
});
