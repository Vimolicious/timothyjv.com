export class WebComponent extends HTMLElement {
  constructor(selector) {
    super();
    const template = document.querySelector(selector);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
