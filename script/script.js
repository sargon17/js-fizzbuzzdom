const card = document.querySelector(".mt__card");

for (let i = 1; i <= 100; i++) {
  let tile = document.createElement("div");
  tile.classList.add("mt__tile");

  if (i % 3 === 0 || i % 5 === 0) {
    if (i % 3 === 0 && i % 5 === 0) {
      tile.classList.add("mt__buzz-fizz");
      tile.innerHTML = `<p>buzz fizz</p>`;
    } else if (i % 3 === 0) {
      tile.classList.add("mt__fizz");
      tile.innerHTML = `<p>fizz</p>`;
    } else {
      tile.classList.add("mt__buzz");
      tile.innerHTML = `<p>buzz</p>`;
    }
  } else {
    tile.innerHTML = `<p>${i}</p>`;
  }
  card.appendChild(tile);
}
