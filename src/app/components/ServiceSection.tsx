"use client"
import { services, subservices } from "../data"

export function ServiceSection() {
  const [value, setValue] = useState(0)
  function handleChange(_event: React.SyntheticEvent, newValue: number) {
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
        classes={{ flexContainer: "justify-around px-[10%]" }}
      >
        {ServiceTabList()}
      </Tabs>
      <Subservice tabIndex={value} />
    </article>
  )
}

function ServiceTabList() {
  return services.map((service, index) => {
    return (
      <Tab
        key={service.heading}
        label={service.heading}
        value={index}
        component="h3"
        className="max-w-[300px]"
      />
    )
  })
}

// TODO
function Subservice(props: { tabIndex: number }) {
  return (
    <ul className="grid grid-cols-[auto,auto] gap-y-10">
      {subservices.map((subservice) => (
        <li
          className="w-[300px] justify-self-center"
          key={subservice.description}
        >
          <h3>{subservice.heading}</h3>
          <p>{subservice.description}</p>
        </li>
      ))}
    </ul>
  )
}
