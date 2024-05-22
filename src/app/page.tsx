"use client"
import { Button, Paper, Tab, Tabs } from "@mui/material"
import React from "react"
import Carousel from "react-material-ui-carousel"
export default function Home() {
  return (
    <main>
      <FirstScreen />
      <ProductServices />
    </main>
  )
}

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
]
function FirstScreen() {
  return (
    <div className="min-h-[100vh]">
      <Carousel animation="slide">
        {items.map((item, i) => (
          <Item
            key={i}
            item={item}
          />
        ))}
      </Carousel>
    </div>
  )
}

function Item(props: { item: (typeof items)[0] }) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  )
}

function ProductServices() {
  const [value, setValue] = React.useState(0)

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
