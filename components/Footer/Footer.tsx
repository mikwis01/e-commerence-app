import Link from "next/link"
import { LogoFooter } from "../LogoFooter/LogoFooter"
import { ABOUT_LINKS, CONTACT_LINKS } from "./constants"

export const Footer = () => {
  return (
    <footer className="py-8 bg-graySemiDark text-white grid place-items-center w-full">
      <div className="flex flex-col md:flex-row md:justify-between w-5/6 gap-8 max-w-5xl">
        <div className="">
          <h4 className="font-semibold pb-3">About</h4>
          <ul className="text-xs flex flex-col gap-1 opacity-50">
            {ABOUT_LINKS.map((link) => (
              <li key={link.header}>
                <Link href={link.href}>{link.header}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="font-semibold ">
          <h4 className="pb-3">Contact</h4>
          <ul className="text-xs flex flex-col gap-1">
            {CONTACT_LINKS.map((link) => (
              <li key={link.text}>
                <Link href={link.href} className="flex gap-2 items-center">
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <LogoFooter />
      </div>
    </footer>
  )
}
