import { Banner } from "../components/elements/Banner/Banner"
import { LandingDiscountedProducts } from "../components/modules/LandingDiscountedProducts/LandingDiscountedProducts"
import { LandingRecommendedProducts } from "../components/modules/LandingRecommendedProducts/LandingRecommendedProducts"
import { MainLayout } from "../components/layouts/MainLayout/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <LandingRecommendedProducts />
      <LandingDiscountedProducts />
    </MainLayout>
  )
}
