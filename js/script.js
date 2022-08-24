let elList = document.querySelector(".list");
elList.setAttribute("width", "400px");
elList.setAttribute("height", "400px");


pokemons.forEach(pokemon => {
  let elLi = document.createElement("li");
  elLi.className = "card w-25 mx-1 my-5";

  let elImg = document.createElement("img");
  elImg.className = "card-img-top";
  elImg.src = pokemon.img;
  elImg.alt = pokemon.name;
  elImg.width = "100px";


  let elContent = document.createElement("div");
  elContent.className = "card-body";

  let elNameSpan = document.createElement("span");
  elNameSpan.className = "card-title fw-bold fs-3";
  elNameSpan.textContent = pokemon.name;

  let elNamewWeak = document.createElement("span");
  elNamewWeak.className = "card-text d-block opacity-75";
  elNamewWeak.textContent = pokemon.weaknesses.join(", ");

  elContent.append(elNameSpan, elNamewWeak);

  elLi.append(elImg, elContent);

  elList.appendChild(elLi);
});
