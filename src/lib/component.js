import Store from "beedle"
import { rerender } from './router'

const component = ({ onStateChange, comp, parentId, actions, mutations, initialState }) => {
  const storeInstance = new Store({
    actions,
    mutations,
    initialState,
  })

  storeInstance.subscribe((state) => {
          onStateChange(state)
  })

   return { store: storeInstance, ...storeInstance.state }
}

export default component
