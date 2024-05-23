"use client"
import "./globals.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import CssBaseline from "@mui/material/CssBaseline"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import Link from "next/link"
import Image from "next/image"

import favicon from "./favicon.ico"

import { Tabs, Tab } from "@mui/material"
import React from "react"
import ServiceList from "./ServiceList"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <head>
        <title>Company A</title>
      </head>
      <html lang="en">
        <CssBaseline />
        <body>
          <AppRouterCacheProvider>
            <Header />
            {children}
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  )
}

function Header() {
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

function Footer() {
  return (
    <footer className="flex justify-center gap-x-10 px-[10%] pt-[20px] pb-[150px]  text-font-white">
      <section>
        <h2 className="text-center min-w-[300px] mb-0">Services</h2>
        <div className="grid grid-cols-2 gap-x-5">
          <ServiceList
            service="Service A"
            subservices={["Subservice A", "Subservice B"]}
          />
          <ServiceList
            service="Service B"
            subservices={["Subservice A", "Subservice B"]}
          />
        </div>
      </section>
      <section>
        <h2 className="text-center mb-2">Contact us</h2>
        <ul className="flex  flex-col text-sm gap-y-1">
          <li>
            <label>Address:</label> abc
          </li>
          <li>
            <label>Phone:</label> 1234-56789
          </li>
          <li>
            <label>Email:</label> service@abc.com
          </li>
          <li className="grid grid-cols-[auto,auto]">
            <label>Working days:&nbsp;</label>
            <span>Monday through Friday from 8:30 a.m. to 6 p.m.</span>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-center mb-5">Official account</h2>
        <Image
          src={favicon}
          width={200}
          height={200}
          alt="QR code"
        />
      </section>
    </footer>
  )
}
