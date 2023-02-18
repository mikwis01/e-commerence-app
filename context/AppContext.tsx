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
  handleSearchbarToggle: () => void
  handleMobileMenuToggle: () => void
}

const initailStateValue = {
  searchBar: false,
  mobileMenu: false
}

export const AppContext = createContext({} as Context)

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [appState, setAppState] = useState(initailStateValue)

  const handleSearchbarToggle = () => {
    setAppState((prev) => ({ ...prev, searchBar: !prev.searchBar }))
  }

  const handleMobileMenuToggle = () => {
    setAppState((prev) => ({ ...prev, mobileMenu: !prev.mobileMenu }))
  }

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
        handleSearchbarToggle,
        handleMobileMenuToggle
      }}>
      {children}
    </AppContext.Provider>
  )
}
