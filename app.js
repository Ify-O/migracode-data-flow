const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    director: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];

// for (const film of films) {
//     const {title, director, certificate, duration} = film
//     const card = document.getElementById("film-card").content.cloneNode(true);
//     // Now we are querying our cloned fragment, not the entire page.
//     card.querySelector("h3").textContent = title;
//     card.querySelector(
//       "[data-director]"
//     ).textContent = `Director: ${director}`;
//     card.querySelector("time").textContent = `${duration} minutes`;
//     card.querySelector(
//       "[data-certificate]"
//     ).textContent = `Certificate: ${certificate}`;

//     document.body.append(card);
// }

function createCardComponent({ title, director, duration }) {
  const cardContainer = document.createElement("div");
  cardContainer.classList = "card";
  const cardImg = document.createElement("img");
  const filmTitle = document.createElement("h3");
  const filmDirector = document.createElement("p");
  const filmDuration = document.createElement("p");

  cardImg.src = "https://picsum.photos/id/237/200/300";
  filmTitle.textContent = title;
  filmDirector.textContent = director;
  filmDuration.textContent = duration;

  cardContainer.append(cardImg, filmTitle, filmDirector, filmDuration);
  return cardContainer;
}

const body = document.querySelector("body");

const filmCards = films.map(createCardComponent);
const btn = document.querySelector("button");

body.append(...filmCards); //(...[obj1, obj2, ob3]) ---> (obj1, obj2, ob3)
