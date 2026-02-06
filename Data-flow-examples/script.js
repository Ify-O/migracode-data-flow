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
    directory: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];
console.log(films[0].title, "<----- films.title");

//PRACTICE
//render the filmCard in the UI
// const filmCard = document.createElement("section"); //create an element
// //the "section" is the tag name of the element we want to create and it is a string. We can create any element we want by passing the tag name as an argument to the createElement method. is is also a div.
// //filmCard.textContent = films[0].title; //append title to the element
// const title = document.createElement("h1") //creating a title element with h1
// const director = document.createElement("p"); //creating a director element with p
// director.textContent = films[0].director; //appending the director element to the filmCard element
// title.textContent = films[0].title; //appending the title element to the filmCard element
// document.body.appendChild(title);
// document.body.appendChild(director);

// document.body.appendChild(filmCard); //append the element to the body

//USE1
//refactor this logic to use the filmCard template instead of creating the elements manually
function createFilmCard(film) {
  const filmCard = document
    .getElementById("film-card-template")
    .content.cloneNode(true);

  filmCard.querySelector("h3").textContent = film.title;
  filmCard.querySelector("p").textContent = film.director;
  filmCard.querySelector("data").textContent = film.certificate;
  filmCard.querySelector("time").textContent = film.duration;

  return filmCard;
}

//document.body.append(createFilmCard(films[0]), createFilmCard(films[1]));

//USE 2
// using a for loop to create a film card for each film in the films array and append it to the body

// for (const film in films) { //create a for loop to iterate through the films array and create a film card for each film
//   const card = createFilmCard(film); //call the function to create a film card for each film
//   document.body.appendChild(card);
// }

//USE 3
//another way to do this

// const filmCards = [];

// for (const film of films) {
//   const card = createFilmCard(film);
//   filmCards.push(card);
// }
// document.body.append(...filmCards);

const filmCards = films.map(createFilmCard); //this helps to automatically create a film card for each film in the films array and return an array of film cards
document.body.append(...filmCards);
