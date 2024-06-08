import * as React from "react"
import Timeline from "@mui/lab/Timeline"
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent"
import { newsList } from "../data"

export default function News() {
  return (
    <Paper
      className="flex flex-col items-center justify-center p-8 mx-auto"
      elevation={3}
    >
      <Typography variant="h3">News</Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}::before`]: {
            content: "none",
          },
        }}
      >
        {newsList.map((item) => (
          <TimelineItem key={item.title}>
            <TimelineOppositeContent
              color="textSecondary"
              className="flex-none"
            >
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography
                  variant="h4"
                  className="mb-1 text-2xl"
                >
                  {item.title}
                </Typography>
                <Typography className="overflow-ellipsis max-w-[70%]">
                  {item.text}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  )
}
