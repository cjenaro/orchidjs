import about from "./about"
import { html } from "lit-html"

const contact = () => {
  return html`
    ${about()}
    <h1>I am the contact page</h1>
  `
}

export default contact
