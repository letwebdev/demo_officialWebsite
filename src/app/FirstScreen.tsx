"use client"
import { services } from "./data"

export function FirstScreen() {
  return (
    <Carousel
      animation="slide"
      className="h-[calc(100vh_-_var(--height-header))]"
      indicatorContainerProps={{ className: "relative top-[-30%] z-[1]" }}
    >
      {services.map((service) => (
        <Service
          key={service.heading}
          service={service}
          className="h-[calc(100vh_-_var(--height-header))]  flex items-center justify-center flex-col pb-[20%]"
        />
      ))}
    </Carousel>
  )
}
function Service(props: {
  service: (typeof services)[0]
  className?: Element["className"]
}) {
  return (
    <section className={props.className}>
      <h2>{props.service.heading}</h2>
      <p>{props.service.description}</p>
    </section>
  )
}
