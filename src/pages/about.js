import { css } from "../lib/css"
import { html } from "lit-html"
import { guard } from "lit-html/directives/guard"
import store from "../lib/store"

const about = () => {
  return html`
    <div id="about">
      <h1
        class="${css`
          color: ${store.state.color};
          display: flex;
        `}"
      >
        I am the about page
      </h1>
      ${nestMe(store.state.color)}
    </div>
  `
}

const nestMe = (thisColor) => {
  const setColor = (color) => {
    if (color === "blue") {
      store.dispatch("setColor", { color: "red", owner: about, id: "about" })
    } else {
      store.dispatch("setColor", { color: "blue", owner: about, id: "about" })
    }
  }

  return html`
    <h1>Im nested!!, the color is: ${thisColor}</h1>
    <button @click="${() => setColor(thisColor)}">Change Color</button>
  `
}
export default about
