const pokemons = [
  {
    id: 1,
    name: "이상해씨",
    type: "풀",
    url: "./img/0001이상해씨.png",
  },
  {
    id: 2,
    name: "파이리",
    type: "불꽃",
    url: "./img/0004파이리.png",
  },
  {
    id: 3,
    name: "피카츄",
    type: "전기",
    url: "./img/0025피카츄.png",
  },
  {
    id: 4,
    name: "꼬부기",
    type: "물",
    url: "./img/0007꼬부기.png",
  },
];

const list = document.getElementById("list");

function showList(val = "") {
  list.innerHTML = "";
  const res = pokemons.forEach((pokemon) => {
    if (pokemon.name.includes(val)) {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src = '${pokemon.url}' alt='${pokemon.name}'>
        <p>이름 : ${pokemon.name} </p>
        <p>속성 : ${pokemon.type} </p>
      `;
      list.appendChild(li);
    }
  }); // end showList
}

showList();

// 검색 기능
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);
  showList(val);
});
