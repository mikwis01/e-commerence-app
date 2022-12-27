import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu"
import { SearchbarDropdown } from "../SearchbarDropdown/SearchbarDropdown"

export const NavMenu = () => {
  return (
    <div className="flex w-[90px] justify-between">
      <SearchbarDropdown />
      <HamburgerMenu />
    </div>
  )
}
