import Head from "next/head"
import React from "react"
import { MainLayout } from "../../components/MainLayout/MainLayout"

export const index = () => {
  return (
    <>
      <Head key={""}>
        <title>G TECH</title>
        <meta name="description" content="G-TECH e-commerence app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout></MainLayout>
    </>
  )
}
