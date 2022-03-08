const card = document.querySelector(".mt__card");

for (let i = 1; i <= 100; i++) {
  let tile = document.createElement("div");
  tile.classList.add("mt__tile");

  if (i % 3 === 0 || i % 5 === 0) {
    if (i % 3 === 0 && i % 5 === 0) {
      //what to do when buzz fizz
      tile.classList.add("mt__buzz-fizz");
      tile.innerHTML = `<p>buzz fizz</p>`;
    } else if (i % 3 === 0) {
      //what to do when fizz
      tile.classList.add("mt__fizz");
      tile.innerHTML = `<p>fizz</p>`;
    } else {
      //what to do when buzz buzz
      tile.classList.add("mt__buzz");
      tile.innerHTML = `<p>buzz</p>`;
    }
  } else {
    tile.innerHTML = `<p>${i}</p>`;
  }
  card.appendChild(tile);
}
