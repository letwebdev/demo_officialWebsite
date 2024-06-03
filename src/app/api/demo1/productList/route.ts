import { NextResponse } from "next/server"
import favicon from "@/app/favicon.ico"

export async function GET() {
  const itemData = [
    {
      img: favicon,
      title: "Product A",
      description: "Description A",
    },
    {
      img: favicon,
      title: "Product B",
      description: "Description B",
    },
    {
      img: favicon,
      title: "Product C",
      description: "Description C",
    },
    {
      img: favicon,
      title: "Product D",
      description: "Description D",
    },
  ]
  const response = new NextResponse(itemData)
  return response
}
