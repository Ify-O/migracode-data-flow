class MyButton extends HTMLElement {
  connectedCallback() {
    const buttonText = this.getAttribute("button-text") ?? "Button";
    const variant = this.getAttribute("variant") ?? "primary";
    const size = this.getAttribute("size") ?? "md";

    this.innerHTML = `
      <button class="btn btn--${variant} btn--${size}">
        ${buttonText}
      </button>
    `;
  }
}

customElements.define("my-button", MyButton);
