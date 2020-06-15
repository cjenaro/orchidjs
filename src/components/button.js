import { html } from "lit-html"
import component from "../lib/component"

export default function button(parentId) {
  const actions = {
    setColor(context, payload) {
      context.commit("setColor", payload)
    },
  }

  const mutations = {
    setColor(state, payload) {
      state.color = payload
      return state
    },
  }

  const initialState = {
    color: "red",
  }

  let color = "red"
  const onStateChange = (state) => {
    color = state.color
  }

        const { store } = component({ onStateChange, comp: button,  parentId,  actions, mutations, initialState })

        console.log(store, color)
        return html` <button @click="${() => store.dispatch("setColor", color === "red" ? "blue": "red" )}">
    ${color}
  </button>`
}

