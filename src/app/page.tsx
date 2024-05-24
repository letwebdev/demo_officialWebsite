"use client"

import { FirstScreen } from "./FirstScreen"
import { ServiceSection } from "./ServiceSection"

export default function Home() {
  return (
    <main>
      <FirstScreen />
      <ContactButton />
      <ServiceSection />
    </main>
  )
}

function ContactButton() {
  return (
    <Button
      variant="contained"
      className="sticky  top-[30%] left-[100%]"
    >
      Contact us
    </Button>
  )
}
