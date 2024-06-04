import { NextResponse } from "next/server"

export async function GET() {
  const itemData = [
    {
      img: "/favicon",
      title: "Product A",
      description: "Description A",
    },
    {
      img: "/favicon",
      title: "Product B",
      description: "Description B",
    },
    {
      img: "/favicon",
      title: "Product C",
      description: "Description C",
    },
    {
      img: "/favicon",
      title: "Product D",
      description: "Description D",
    },
  ]
  const headers = new Headers()

  headers.append("Content-Type", "application/json")
  const response = new NextResponse(JSON.stringify(itemData), { headers })
  return response
}
