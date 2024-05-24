"use client"
import Link from "next/link"
import { ServiceLists } from "./ServiceLists"
import { HeaderDropdown } from "./HeaderDropdown"

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
          <HeaderDropdown dropdown={<ServiceLists />}>
            <Tab
              label="Services"
              value="/services"
              href="/services"
              component={Link}
            />
          </HeaderDropdown>
          <Tab
            label="Showcase"
            value="/showcase"
            href="/showcase"
            component={Link}
          />
          <HeaderDropdown dropdown={<About />}>
            <Tab
              label="About"
              value="/about"
              href="/about"
              component={Link}
            />
          </HeaderDropdown>
        </Tabs>
      </nav>
    </header>
  )
}

function About() {
  return (
    <ul className="flex">
      <List
        component="li"
        disablePadding
      >
        {["Activities", "Culture", "Join us"].map((item, index) => (
          <ListItemButton
            component="a"
            href=""
            sx={{ pl: 1, width: "fit-content" }}
            key={index}
          >
            <ListItemText
              primary={item}
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
