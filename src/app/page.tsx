"use client";
export default function Home() {
  return (
    <main>
      <FirstScreen />
    </main>
  );
}
import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];
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
  );
}

function Item(props: { item: (typeof items)[0] }) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
