import Head from "next/head"
import { Banner } from "../components/Banner/Banner"
import { LandingDiscountedProducts } from "../components/LandingDiscountedProducts/LandingDiscountedProducts"
import { LandingRecommendedProducts } from "../components/LandingRecommendedProducts/LandingRecommendedProducts"
import { MainLayout } from "../components/MainLayout/MainLayout"

export default function Home() {
  return (
    <>
      <Head key={""}>
        <title>G TECH</title>
        <meta name="description" content="G-TECH e-commerence app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Banner />
        <LandingRecommendedProducts />
        <LandingDiscountedProducts />
      </MainLayout>
    </>
  )
}
