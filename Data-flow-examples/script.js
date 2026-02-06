console.log("hello world");
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
//render the filmCard in the UI
const filmCard = document.createElement("section"); //create an element
//the "section" is the tag name of the element we want to create and it is a string. We can create any element we want by passing the tag name as an argument to the createElement method. is is also a div. 
//filmCard.textContent = films[0].title; //append title to the element
const title = document.createElement("h1") //creating a title element with h1
const director = document.createElement("p"); //creating a director element with p
director.textContent = films[0].director; //appending the director element to the filmCard element
title.textContent = films[0].title; //appending the title element to the filmCard element
document.body.appendChild(title);
document.body.appendChild(director);

document.body.appendChild(filmCard); //append the element to the body

