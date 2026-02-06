const state = {
  films: [
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
  ],
  searchTerm: ""
}


function createCardComponent({title, director, duration}) {
    const cardContainer = document.createElement('div')
    cardContainer.classList = 'card'
    const cardImg = document.createElement('img')
    const filmTitle = document.createElement('h3')
    const filmDirector = document.createElement('p')
    const filmDuration = document.createElement('p')

    cardImg.src = 'https://picsum.photos/id/237/200/300'
    filmTitle.textContent = title
    filmDirector.textContent = director
    filmDuration.textContent =duration

    cardContainer.append(cardImg, filmTitle, filmDirector, filmDuration)
    return cardContainer
}

const render = () => {
  const main = document.querySelector('main')
  main.innerHTML = ""

  const filterFilms = state.films.filter((film) => film.title.toLowerCase().includes(state.searchTerm.toLowerCase())) 
   const filmCards = filterFilms.map(createCardComponent); 
  main.append(...filmCards) //(...[obj1, obj2, ob3]) ---> (obj1, obj2, ob3)

}

render()

const searchBox = document.getElementById("search")

const handleInput = (event) => {
  state.searchTerm = event.target.value 

  render()
}

searchBox.addEventListener("input", handleInput)