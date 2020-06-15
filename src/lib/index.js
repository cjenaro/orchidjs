import router from "./router"
import { render } from "lit-html"

export default function appRender(container) {
  if (!container) return console.log("wtf")
  render(router(container), container)
}
