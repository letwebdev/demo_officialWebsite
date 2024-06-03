export const services = [
  {
    heading: "Service A",
    description: "Description A",
  },
  {
    heading: "Service B",
    description: "Description B",
  },
  {
    heading: "Service C",
    description: "Description C",
  },
] as const
export const subservices = [
  {
    heading: "Subservice A",
    description: "Description A",
  },
  {
    heading: "Subservice B",
    description: "Description B",
  },
  {
    heading: "Subservice C",
    description: "Description C",
  },
] as const

export const navTabs = [
  {
    label: "Home",
    href: "/",
    withDropdown: false,
  },
  {
    label: "Services",
    href: "/services",
    withDropdown: true,
  },
  {
    label: "Showcase",
    href: "/showcase",
    withDropdown: false,
  },
  {
    label: "About",
    href: "/about",
    withDropdown: true,
  },
] as const

export const subabouts = ["Activities", "Culture", "Join us"] as const
