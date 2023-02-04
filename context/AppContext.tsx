import { createContext, Dispatch, SetStateAction, useState } from "react"

interface Props {
  children?: React.ReactNode
}

interface AppState {
  searchBar: boolean
  mobileMenu: boolean
}

interface Context {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
  handleToggle: () => void
}

const initailStateValue = {
  searchBar: false,
  mobileMenu: false
}

export const AppContext = createContext({} as Context)

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [appState, setAppState] = useState(initailStateValue)

  const handleToggle = () => {
    setAppState((prev) => ({ ...prev, searchBar: !prev.searchBar }))
  }

  return (
    <AppContext.Provider value={{ appState, setAppState, handleToggle }}>
      {children}
    </AppContext.Provider>
  )
}
