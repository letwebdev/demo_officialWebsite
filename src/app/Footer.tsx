"use client"
import Image from "next/image"
import favicon from "./favicon.ico"
import React from "react"
import { ServiceLists } from "./ServiceLists"

export default function Footer() {
  return (
    <footer className="flex justify-center gap-x-10 px-[10%] pt-[20px] pb-[150px]  text-font-white">
      <section>
        <h2 className="text-center min-w-[300px] mb-0">Services</h2>
        <div className="grid grid-cols-2 gap-x-5">
          <ServiceLists />
        </div>
      </section>
      <section>
        <h2 className="text-center mb-2">Contact us</h2>
        <ul className="flex  flex-col text-sm gap-y-1">
          <li>
            <label>Address:</label> abc
          </li>
          <li>
            <label>Phone:</label> 1234-56789
          </li>
          <li>
            <label>Email:</label> service@abc.com
          </li>
          <li className="grid grid-cols-[auto,auto]">
            <label>Working days:&nbsp;</label>
            <span>Monday through Friday from 8:30 a.m. to 6 p.m.</span>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-center mb-5">Official account</h2>
        <Image
          src={favicon}
          width={200}
          height={200}
          alt="QR code"
        />
      </section>
    </footer>
  )
}