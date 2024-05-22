"use client"
import "./globals.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import CssBaseline from "@mui/material/CssBaseline"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import Link from "next/link"

import React from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <head>
        <title>Company A</title>
      </head>
      <html lang="en">
        <CssBaseline />
        <body>
          <AppRouterCacheProvider>
            <header className="px-[20%] py-[10px] flex items-center justify-between text-2xl ">
              <div>Company A</div>
              <nav>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className="text-xl"
                >
                  <Tab
                    label="首页"
                    value="/"
                    href="/"
                    component={Link}
                  />
                  <Tab
                    label="产品服务"
                    value="/services"
                    href="/services"
                    component={Link}
                  />
                  <Tab
                    label="精品案例"
                    value="/examples"
                    href="/examples"
                    component={Link}
                  />
                  <Tab
                    label="关于"
                    value="/about"
                    href="/about"
                    component={Link}
                  />
                </Tabs>
              </nav>
            </header>
            {children}
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  )
}
// function MyTabs() {
//   // You need to provide the routes in descendant order.
//   // This means that if you have nested routes like:
//   // users, users/new, users/edit.
//   // Then the order should be ['users/add', 'users/edit', 'users'].
//   const routeMatch = routeMatch(["/inbox/:id", "/drafts", "/trash"]);
//   const currentTab = routeMatch?.pattern?.path;

//   return (
//     <Tabs value={currentTab}>
//       <Tab
//         label="Inbox"
//         value="/inbox/:id"
//         to="/inbox/1"
//         component={Link}
//       />
//       <Tab
//         label="Drafts"
//         value="/drafts"
//         to="/drafts"
//         component={Link}
//       />
//       <Tab
//         label="Trash"
//         value="/trash"
//         to="/trash"
//         component={Link}
//       />
//     </Tabs>
//   );
// }
