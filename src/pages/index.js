import { html } from "lit-html"
import button from "../components/button"

const index = () => html`
  <div id="index-page">
     <h1>I am the homepage</h1>
     ${button("index-page")}
  </div>
`

export default index
