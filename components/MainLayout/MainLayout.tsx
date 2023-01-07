import { Footer } from "../Footer/Footer"
import { Nav } from "../Nav/Nav"

type Props = {
  children?: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="flex flex-col py-8 gap-8 items-center">{children}</main>
      <Footer />
    </>
  )
}
