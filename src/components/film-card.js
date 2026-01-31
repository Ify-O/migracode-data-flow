class FilmCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") ?? "Untitled film";
    const director = this.getAttribute("director") ?? "Unknown director";
    const duration = this.getAttribute("duration");

    this.innerHTML = `
      <article class="film-card">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__director">Director: ${director}</p>
        ${
          duration
            ? `<p class="film-card__duration">Duration: ${duration} minutes</p>`
            : ""
        }
      </article>
    `;
  }
}

customElements.define("film-card", FilmCard);
