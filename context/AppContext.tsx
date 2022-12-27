import { createContext, Dispatch, SetStateAction, useState } from "react"

interface Props {
  children?: React.ReactNode
}

interface AppState {
  searchBarToggled: boolean
}

interface Context {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

const initailStateValue = {
  searchBarToggled: false
}

export const AppContext = createContext({} as Context)

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [appState, setAppState] = useState(initailStateValue)

  return <AppContext.Provider value={{ appState, setAppState }}>{children}</AppContext.Provider>
}
