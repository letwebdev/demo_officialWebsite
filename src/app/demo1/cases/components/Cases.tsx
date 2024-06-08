export default function Cases() {
  return (
    <Container
      component={"section"}
      className="flex flex-col items-center justify-center gap-y-3"
    >
      <Typography variant="h3">Cases</Typography>
      <Typography>customized resolutions</Typography>
      {CaseList()}
      <Button
        variant="outlined"
        className="my-[20px]"
      >
        View More
      </Button>
    </Container>
  )
}
import * as React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import IconButton from "@mui/material/IconButton"
import InfoIcon from "@mui/icons-material/Info"
import Image from "next/image"
import { items } from "../data"

function CaseList() {
  return (
    <ImageList
      cols={3}
      gap={100}
    >
      {items.map((item) => (
        <ImageListItem
          key={item.title}
          className="w-[200px] h-[200px]"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={200}
            height={200}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
