import { FaSearch } from "react-icons/fa"

export const Searchbar = () => {
  return (
    <div
      className={`flex items-center justify-between w-full md:w-4/6 h-8 text-white rounded border-2 border-grayLight`}>
      <input
        type="text"
        placeholder="Search ..."
        className="bg-transparent border-none placeholder:text-grayLight indent-2 w-2/3 h-full"
      />
      <span className="h-4/6 w-[1px] bg-grayLight"></span>
      <select className="bg-graySemiDark flex items-center pb-0.5 text-center w-1/3 h-full">
        <option value="Category">All</option>
        <option value="Hoodies">Hoodies</option>
        <option value="Pants">Pants</option>
        <option value="Underwear">Underwear</option>
      </select>
      <button className="bg-gradient-to-b from-purpleLight to-purpleDark w-10 h-8 flex items-center justify-center rounded-tr rounded-br -mr-0.5">
        <FaSearch color="#fff" />
      </button>
    </div>
  )
}
