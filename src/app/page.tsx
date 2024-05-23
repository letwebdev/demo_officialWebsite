"use client"
import { Button, Container, Paper, Tab, Tabs } from "@mui/material"
import Carousel from "react-material-ui-carousel"
export default function Home() {
  return (
    <main>
      <FirstScreen />
      <ProductServices />
    </main>
  )
}

const services = [
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
  {
    heading: "Service D",
    description: "Description D",
  },
]
function FirstScreen() {
  return (
    <Carousel
      animation="slide"
      className="h-[calc(100vh_-_var(--height-header))]"
      indicatorContainerProps={{ className: "relative top-[-200px] z-[1]" }}
    >
      {services.map((item, i) => (
        <Service
          key={i}
          service={item}
        />
      ))}
    </Carousel>
  )
}

function Service(props: { service: (typeof services)[0] }) {
  return (
    <div className="h-[calc(100vh_-_var(--height-header))]  flex items-center justify-center flex-col pb-[200px]">
      <h2>{props.service.heading}</h2>
      <p>{props.service.description}</p>
    </div>
  )
}

function ProductServices() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <h2>产品服务</h2>
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <div
      // value={value}
      // index={0}
      >
        Item One
      </div>
      <div
      // value={value}
      // index={1}
      >
        Item Two
      </div>
      <div
      // value={value}
      // index={2}
      >
        Item Three
      </div>
    </>
  )
}
