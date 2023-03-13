import { ShoppingCartButton } from "../../elements/ShoppingCartButton/ShoppingCartButton"
import { UserAccountButton } from "../../elements/UserAccountButton/UserAccountButton"
import { SearchbarDropdownButton } from "../../elements/SearchbarDropdownButton/SearchbarDropdownButton"
import { HamburgerMenuButton } from "../../elements/HamburgerMenuButton/HamburgerMenuButton"

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
