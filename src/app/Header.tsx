"use client"
import Link from "next/link"
import { Tabs, Tab } from "@mui/material"
import React from "react"

export function Header() {
  const [value, setValue] = React.useState("/")
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <header className="px-[20%] py-[10px] flex items-center justify-between text-2xl h-[--height-header]">
      <div>Company A</div>
      <nav>
        <Tabs
          value={value}
          onChange={handleChange}
          className="text-xl"
        >
          <Tab
            label="Home"
            value="/"
            href="/"
            component={Link}
          />
          <Tab
            label="Services"
            value="/services"
            href="/services"
            component={Link}
          />
          <Tab
            label="Showcase"
            value="/showcase"
            href="/showcase"
            component={Link}
          />
          <Tab
            label="About"
            value="/about"
            href="/about"
            component={Link}
          />
        </Tabs>
      </nav>
    </header>
  )
}
