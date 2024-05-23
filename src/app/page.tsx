"use client"
import { Tab, Tabs, Button } from "@mui/material"
import Carousel from "react-material-ui-carousel"
export default function Home() {
  return (
    <main>
      <FirstScreen />
      <div>
        <Button
          variant="contained"
          className="!sticky  top-[30%] left-[100%]"
        >
          Contact us
        </Button>
        <ProductServices />
      </div>
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
      indicatorContainerProps={{ className: "relative top-[-30%] z-[1]" }}
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
    <div className="h-[calc(100vh_-_var(--height-header))]  flex items-center justify-center flex-col pb-[20%]">
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
    <article className="max-w-[80%] mx-auto h-[500px]">
      <h2 className="text-center">Services</h2>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        centered
        className="mb-11"
      >
        <Tab
          label="Service A"
          value={0}
          component="h3"
        />
        <Tab
          label="Service B"
          value={1}
          component="h3"
        />
        <Tab
          label="Service C"
          value={2}
          component="h3"
        />
      </Tabs>
      <Subservice value={value} />
    </article>
  )
}
function Subservice(_props: { value: number }) {
  return (
    <div className="grid grid-cols-[auto,auto] gap-y-10">
      {["A", "B", "C", "D"].map((serviceType, index) => (
        <div
          className="w-[300px] justify-self-center"
          key={index}
        >
          <h3>subservice {serviceType}</h3>
          <p>description</p>
        </div>
      ))}
    </div>
  )
}
