"use client"
import "./globals.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import CssBaseline from "@mui/material/CssBaseline"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"

import Footer from "./demo2/components/Footer"
import { Header } from "./demo2/components/Header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <head>
        <title>Company Demo</title>
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
