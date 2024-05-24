"use client"
import { services } from "./data"
type ServiceReadnotonly = Readnotonly<(typeof services)[0]>
type ServiceNotConst = {
  [Key in keyof ServiceReadnotonly]: Key extends string ? string : Key
}

export function FirstScreen() {
  return (
    <Carousel
      animation="slide"
      className="h-[calc(100vh_-_var(--height-header))]"
      indicatorContainerProps={{ className: "relative top-[-30%] z-[1]" }}
    >
      {services.map((service: ServiceNotConst) => (
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
  service: ServiceNotConst
  className?: Element["className"]
}) {
  return (
    <section className={props.className}>
      <h2>{props.service.heading}</h2>
      <p>{props.service.description}</p>
    </section>
  )
}
