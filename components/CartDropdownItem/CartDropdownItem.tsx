import React from "react"

export const CartDropdownItem = () => {
  return (
    <div className="w-full bg-graySemiLight rounded-lg h-16 mt-2 flex">
      <img
        className="w-16 h-full object-scale-down object-center"
        src={"https://media.graphassets.com/KdugWaL5TGiCJDAXt2Dy"}
        alt={"test"}
      />
      <div className="flex-1 py-1 px-2 text-xs justify-between flex flex-col">
        <p>Super Long Product Name</p>
        <div className="flex justify-between">
          <p className="text-[10px] opacity-50">Qty: 999</p>
          <p className="font-bold">$5123</p>
        </div>
      </div>
    </div>
  )
}
