import * as React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import Image from "next/image"
import favicon from "@/app/favicon.ico"

export default function Products() {
  return (
    <Paper
      elevation={1}
      className="w-[80%] mx-auto"
    >
      <ImageList
        cols={2}
        component="ul"
        className="w-fit mx-auto"
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.title}
            className="flex flex-row items-center"
            component="li"
          >
            <Image
              width={208}
              height={208}
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="p-[50px]"
            />
            <ImageListItemBar
              title={<h3>{item.title}</h3>}
              subtitle={<p>by: {item.description}</p>}
              position="below"
              className="w-[200px]"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Paper>
  )
}

const itemData = [
  {
    img: favicon,
    title: "Title A",
    description: "Description A",
  },
  {
    img: favicon,
    title: "Title B",
    description: "Description B",
  },
  {
    img: favicon,
    title: "Title C",
    description: "Description C",
  },
  {
    img: favicon,
    title: "Title D",
    description: "Description D",
  },
]
