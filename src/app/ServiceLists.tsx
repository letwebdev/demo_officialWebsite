"use client"
import ServiceList from "./ServiceList"

export function ServiceLists() {
  return (
    <div className="grid grid-cols-2 gap-x-5">
      <ServiceList
        service="Service A"
        subservices={["Subservice A", "Subservice B"]}
      />
      <ServiceList
        service="Service B"
        subservices={["Subservice A", "Subservice B"]}
      />
    </div>
  )
}
