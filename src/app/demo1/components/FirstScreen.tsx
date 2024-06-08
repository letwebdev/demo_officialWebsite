"use client"
import { descriptions } from "../data"
import Carousel from "react-material-ui-carousel"

export function FirstScreen() {
  return (
    <Carousel
      animation="slide"
      className="h-[calc(100vh_-_var(--height-header))]"
      indicatorContainerProps={{ className: "hidden" }}
    >
      {descriptions.map((description) => (
        <Description
          key={description.heading}
          description={description}
          className="h-[calc(100vh_-_var(--height-header))]  flex justify-center flex-col pb-[15%] pl-[10%]"
        />
      ))}
    </Carousel>
  )
}

function Description(props: {
  description: (typeof descriptions)[0]
  className?: Element["className"]
}) {
  return (
    <section className={props.className}>
      <Typography variant="h2">{props.description.heading}</Typography>
      <ul>
        {props.description.paragraphs.map((paragraph) => (
          <li key={paragraph}>{paragraph}</li>
        ))}
      </ul>
    </section>
  )
}
