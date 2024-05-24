"use client"
import { Card, Tooltip } from "@mui/material"
import React from "react"

export function HeaderDropdown({ children, dropdown }) {
  return (
    <div>
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "white",
              color: "black",
            },
          },
        }}
        title={<Card className="p-2">{dropdown}</Card>}
      >
        {children}
      </Tooltip>
    </div>
  )
}
