const getJokeBtn = document.getElementById("getJokeBtn");
const setup = document.getElementById("setup");
const punchlineBtn = document.getElementById("punchlineBtn");
const punchline = document.getElementById("punchline");

getJokeBtn.addEventListener("click", function () {
  generateJoke();
});

punchlineBtn.addEventListener("click", function () {
  punchline.style.display = "block";
  punchlineBtn.style.display = "none";
});

function generateJoke() {
  fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
      "x-rapidapi-key": "c151f1fcd3msh0a7058898e35666p1e5812jsnf49e9ac5654a",
    },
  })
    .then((response) => response.json())
    .then((obj) => {
      console.log("obj", obj);
      getJoke(obj);
    })
    .catch((err) => {
      console.error(err);
    });
}

function getJoke(res) {
  setup.innerHTML = `<p>${res.body[0].setup}</p>`;
  punchline.innerHTML = `<p>${res.body[0].punchline}</p>`;
  punchlineBtn.style.display = "block";
}
