import React from "react"
import { LogoSvg } from "../LogoSvg/LogoSvg"

export const LogoFooter = () => {
  return (
    <div className="h-20 gap-0 flex flex-col justify-center items-center rounded-md bg-graySemiLight md:w-1/2">
      <LogoSvg />
      <p className="text-purpleLight font-bold text-xs">THE RIGHT CHOICE</p>
    </div>
  )
}
