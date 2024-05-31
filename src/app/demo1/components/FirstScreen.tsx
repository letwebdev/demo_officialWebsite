"use client"
import { descriptions } from "../data"

export function FirstScreen() {
  return (
    <Carousel
      animation="slide"
      className="h-[calc(100vh_-_var(--height-header))]"
      indicatorContainerProps={{ className: "hidden" }}
    >
      {Descriptions({ descriptions })}
    </Carousel>
  )
}

function Descriptions(props: { descriptions: typeof descriptions }) {
  return (
    <>
      {props.descriptions.map((description) => (
        <Description
          key={description.heading}
          description={description}
          className="h-[calc(100vh_-_var(--height-header))]  flex justify-center flex-col pb-[15%] pl-[10%]"
        />
      ))}
    </>
  )
}

function Description(props: {
  description: (typeof descriptions)[0]
  className?: Element["className"]
}) {
  return (
    <section className={props.className}>
      <h2>{props.description.heading}</h2>
      <ul>
        {props.description.paragraphs.map((paragraph) => {
          return <li key={props.description.heading}>{paragraph}</li>
        })}
      </ul>
    </section>
  )
}
