"use client"

import { listOfHonorsAndQualifications } from "./data"
import Image from "next/image"

export default function HonorsAndQualifications() {
  return (
    <Paper className="flex flex-col items-center justify-center p-9 gap-6">
      <Typography variant="h2">Honors and qualifications</Typography>
      <Typography>subtitle</Typography>
      <Carousel
        animation="slide"
        indicators={false}
        navButtonsAlwaysInvisible
        duration={3000}
        interval={3000}
        className="w-[700px]"
      >
        {listOfHonorsAndQualifications
          .filter((item) => Number(item.id) % 3 === 0)
          .map((item) => (
            <Box
              className="flex gap-x-4"
              key={item.id}
            >
              <Image
                src={item.image}
                width={200}
                height={200}
                alt={item.id}
              />
              <Image
                key={item.id + 1}
                src={item.image}
                width={200}
                height={200}
                alt={item.id}
              />
              <Image
                key={item.id + 2}
                src={item.image}
                width={200}
                height={200}
                alt={item.id}
              />
            </Box>
          ))}
      </Carousel>
    </Paper>
  )
}
