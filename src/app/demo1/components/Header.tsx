import { navTabs } from "../data"
import SearchIcon from "@mui/icons-material/Search"
export default function Header() {
  const [value, setValue] = React.useState<string>(navTabs[0].href)
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <header className="px-[12%] py-[10px] flex items-center justify-between text-2xl h-[--height-header]">
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
      <Searchbar />
    </header>
  )
}

function HeaderTabList() {
  return navTabs.map((tab) => {
    return (
      <Tab
        key={tab.label}
        label={tab.label}
        value={tab.href}
        href={tab.href}
        component={Link}
      />
    )
  })
}

function Searchbar() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 230 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
