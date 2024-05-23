"use client"
import React from "react"
import ServiceList from "./ServiceList"

export function ServiceLists() {
  return (
    <>
      <ServiceList
        service="Service A"
        subservices={["Subservice A", "Subservice B"]}
      />
      <ServiceList
        service="Service B"
        subservices={["Subservice A", "Subservice B"]}
      />
    </>
  )
}
