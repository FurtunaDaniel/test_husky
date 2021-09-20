import { createContext, FC, useContext } from 'react'
import { TodoStore } from './todo.store'

class RootStore {
  todoStore

  constructor() {
    this.todoStore = new TodoStore()
  }
}

const StoreContext = createContext<RootStore>(new RootStore())
const StoreProvider: FC<{ store: RootStore }> = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

const useStore = () => useContext(StoreContext)

export { RootStore, StoreProvider, useStore }
