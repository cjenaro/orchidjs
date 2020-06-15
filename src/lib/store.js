import Store from "beedle"
import { render } from "lit-html"

const actions = {
  setColor(context, payload) {
    context.commit("setColor", payload)
  },
}

const mutations = {
  setColor(state, { id, ...rest }) {
    setState(state, id, rest)
    state.color = payload.color
    state.owner = payload.owner
    state[id] = { id, color, owner }
    return state
  },
}

const initialState = {
  color: "red",
  owner: () => {},
  id: "",
}

const storeInstance = new Store({
  actions,
  mutations,
  initialState,
})

storeInstance.subscribe((state) => {
  if (!state.id) return
  render(state.owner(), document.getElementById(state.id))
})

export default storeInstance

const setState = (id, pieceOfState) => {
  state[id] = pieceOfState
}

const getState = (id) => {
  return state[id]
}
