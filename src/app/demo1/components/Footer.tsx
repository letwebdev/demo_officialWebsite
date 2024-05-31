"use client"

export default function Footer() {
  return (
    <footer className="flex justify-around  px-[10%] pt-[20px] pb-[150px]  text-white bg-[rgba(32,_32,_32,_1)]">
      <section>
        <h2 className=" min-w-[300px] mb-0">Company S</h2>
        <li className="grid grid-cols-[auto,auto]">
          <label>Working days:</label> Monday through Friday
          <label>Working hours:</label> from 9:00 to 18:00
        </li>
      </section>
      {ContactUs()}
      <section>
        <h3 className="mb-2">Products</h3>
        <ul className="flex  flex-col text-sm gap-y-1">
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          <li>Product 4</li>
        </ul>
      </section>
    </footer>
  )
}

function ContactUs() {
  const data = {
    heading: "Contact us",
    listItems: [
      { label: "Address", text: "abc" },
      { label: "QQ", text: "12356789" },
      { label: "Email", text: "service@abc.com" },
      { label: "Phone", text: "1234-56789" },
    ],
  }
  return (
    <section>
      <h3 className="mb-2">{data.heading}</h3>
      <ul className="flex  flex-col text-sm gap-y-1">
        {data.listItems.map((item) => {
          return (
            <li key={item.label}>
              <label>{item.label}: </label> {item.text}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
