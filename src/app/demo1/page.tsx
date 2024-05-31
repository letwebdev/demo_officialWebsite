"use client"

import { FirstScreen } from "./components/FirstScreen"
import Products from "./components/Products"

export default function Home() {
  return (
    <>
      {FirstScreen()}
      {Products()}
    </>
  )
}
