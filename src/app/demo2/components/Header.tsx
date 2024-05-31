"use client"
import Link from "next/link"
import { ServiceLists } from "./ServiceLists"
import { HeaderDropdown } from "./HeaderDropdown"
import { navTabs, subabouts } from "../../demo1/data"

export function Header() {
  const [value, setValue] = React.useState<string>(navTabs[0].href)
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <header className="px-[20%] py-[10px] flex items-center justify-between text-2xl h-[--height-header]">
      <h1>Company A</h1>
      <nav>
        <Tabs
          value={value}
          onChange={handleChange}
          className="text-xl"
        >
          {HeaderTabList()}
        </Tabs>
      </nav>
    </header>
  )
}

function HeaderTabList() {
  return navTabs.map((tab) => {
    if (!tab.withDropdown) {
      return (
        <Tab
          key={tab.label}
          label={tab.label}
          value={tab.href}
          href={tab.href}
          component={Link}
        />
      )
    } else {
      const dropdown =
        tab.label === "Services"
          ? ServiceLists()
          : tab.label === "About"
          ? About()
          : (tab satisfies never)
      return (
        <>
          <HeaderDropdown dropdown={dropdown}>
            <Tab
              key={tab.label}
              label={tab.label}
              value={tab.label}
              href={tab.href}
              component={Link}
            />
          </HeaderDropdown>
        </>
      )
    }
  })
}

function About() {
  return (
    <ul className="flex">
      <List
        component="li"
        disablePadding
      >
        {subabouts.map((subabout) => (
          <ListItemButton
            component="a"
            href=""
            sx={{ pl: 1, width: "fit-content" }}
            key={subabout}
          >
            <ListItemText
              primary={subabout}
              primaryTypographyProps={{
                fontSize: "0.8rem",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </ul>
  )
}
