import * as React from "react"
import Card from "@mui/material/Card"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import Image from "next/image"

export default function ProductList() {
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 360 }}
    >
      <Box sx={{ p: 2 }}>
        <Image
          width={208}
          height={208}
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="p-[50px]"
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            Toothbrush
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
          >
            $4.50
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography
          gutterBottom
          variant="body2"
        >
          Select type
        </Typography>
        <Stack
          direction="row"
          spacing={1}
        >
          <Chip
            color="primary"
            label="Soft"
            size="small"
          />
          <Chip
            label="Medium"
            size="small"
          />
          <Chip
            label="Hard"
            size="small"
          />
        </Stack>
      </Box>
    </Card>
  )
}
