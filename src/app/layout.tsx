"use client"
import "./globals.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import CssBaseline from "@mui/material/CssBaseline"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import Footer from "./Footer"

import React from "react"
import { Header } from "./Header"

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
