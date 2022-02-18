const getJokeBtn = document.getElementById("getJokeBtn");
const setup = document.getElementById("setup");
const punchlineBtn = document.getElementById("punchlineBtn");
const punchline = document.getElementById("punchline");

getJokeBtn.addEventListener("click", function () {
  generateJoke();
  punchline.style.display = "none";
  punchlineBtn.style.display = "block";
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
      "x-rapidapi-key": "a7f2e439f4msh5846e8913135da4p119c6cjsn99dd95a99657",
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
