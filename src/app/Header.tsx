"use client"
import Link from "next/link"
import { Tabs, Tab, Drawer, Card, Container } from "@mui/material"
import React from "react"
import Popper from "@mui/material/Popper"
import { ServiceLists } from "./ServiceLists"

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
          <HeaderMenu>
            <Tab
              label="Services"
              value="/services"
              href="/services"
              component={Link}
            />
          </HeaderMenu>
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

import AccordionActions from "@mui/material/AccordionActions"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { MouseTwoTone } from "@mui/icons-material"
import zIndex from "@mui/material/styles/zIndex"

export default function HeaderMenu({ children }) {
  const mountPoint = useRef(null)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [anchorHovered, setAnchorHovered] = useState(false)
  const [menuHovered, setMenuHovered] = useState(false)

  function handleHover(target: "anchor" | "menu") {
    switch (target) {
      case "anchor":
        setAnchorHovered(true)
        setMenuHovered(false)
        setAnchorEl(mountPoint.current)
        break
      case "menu":
        setMenuHovered(true)
        break

      default:
        target satisfies never
    }
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!menuHovered) {
  //       handleClose()
  //     }
  //   }, 800)
  // }, [anchorHovered, menuHovered])
  function handleOut(target: "anchor" | "menu") {
    switch (target) {
      case "anchor":
        setAnchorHovered(false)
        break
      case "menu":
        setMenuHovered(false)
        break

      default:
        target satisfies never
    }
  }
  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div>
      <div
        ref={mountPoint}
        onMouseOver={() => {
          handleHover("anchor")
        }}
        onMouseOut={() => {
          handleOut("anchor")
        }}
      >
        {children}
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        <Container
          onMouseLeave={handleClose}
          onMouseOver={() => {
            handleHover("menu")
          }}
        >
          <ServiceLists />
        </Container>
      </Menu>
    </div>
  )
}

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"

export function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary>Accordion 1</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
