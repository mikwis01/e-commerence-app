import { FaUserAlt } from "react-icons/fa"

export const UserAccountButton = () => {
  return (
    <button className="text-white bg-gradient-to-b from-purpleLight to-purpleDark w-10 h-8 items-center justify-center rounded hidden md:flex">
      <FaUserAlt size={14} />
    </button>
  )
}
