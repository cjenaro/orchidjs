import index from "../pages"
import contact from "../pages/contact"
import about from "../pages/about"
import store from "./store"
import { render } from "lit-html"

let root
const routes = {
  "/": index,
  "/about": about,
  "/contact": contact,
}

const getRouteElement = () => {
  const pathname = window.location.pathname
  return routes[pathname]()
}

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname)

  render(getRouteElement(pathname), root)
}

window.onpopstate = () => {
  render(getRouteElement(), root)
}

document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    onNavigate(this.pathname)
  })
})

export const rerender = () => render(getRouteElement(), root) 

export default function router(container) {
  root = container
  return getRouteElement()
}
