import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export const useToggle = () => {
  const { appState, setAppState } = useContext(AppContext)

  const toggled = appState.searchBarToggled

  const handleToggle = () => {
    setAppState((prev) => ({ ...prev, searchBarToggled: !prev.searchBarToggled }))
  }

  return [toggled, handleToggle] as const
}
