"use client"

const navTabs = [
  {
    label: "demo1",
    href: "/demo1",
  },
  {
    label: "demo2",
    href: "/demo2",
  },
] as const

export default function Index() {
  const [value, setValue] = React.useState<string>("")
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <main>
      <nav className="flex flex-col items-center justify-center h-[70vh]">
        <Tabs
          value={value}
          onChange={handleChange}
        >
          {navTabs.map((tab) => (
            <Tab
              className="text-2xl"
              key={tab.label}
              label={tab.label}
              value={tab.href}
              href={tab.href}
              component={Link}
            />
          ))}
        </Tabs>
      </nav>
    </main>
  )
}
