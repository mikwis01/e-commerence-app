import { ShoppingCartButton } from "../ShoppingCartButton/ShoppingCartButton"
import { UserAccountButton } from "../UserAccountButton/UserAccountButton"
import { SearchbarDropdownButton } from "../SearchbarDropdownButton/SearchbarDropdownButton"
import { HamburgerMenuButton } from "../HamburgerMenuButton/HamburgerMenuButton"

export const NavMenu = () => {
  return (
    <div className="flex w-[90px] justify-between">
      <ShoppingCartButton />
      <UserAccountButton />

      <SearchbarDropdownButton />
      <HamburgerMenuButton />
    </div>
  )
}
