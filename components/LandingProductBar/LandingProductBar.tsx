interface Props {
  header: string
}

export const LandingProductBar = ({ header }: Props) => {
  return (
    <div className="bg-graySemiDark w-5/6 max-w-5xl rounded-md text-white py-5 flex flex-col items-center gap-5 md:grid md:place-items-center md:grid-cols-4 md:gap-0">
      <p className="font-semibold w-5/6 col-start-1 col-end-5 md:ml-[2%] md:place-self-start md:pb-5">
        {header}
      </p>
      <div className="bg-graySemiLight h-36 md:h-52 lg:h-72 w-5/6 rounded-md"></div>
      <div className="bg-graySemiLight h-36 md:h-52 lg:h-72 w-5/6 rounded-md"></div>
      <div className="bg-graySemiLight h-36 md:h-52 lg:h-72 w-5/6 rounded-md"></div>
      <div className="bg-graySemiLight h-36 md:h-52 lg:h-72 w-5/6 rounded-md"></div>
    </div>
  )
}
