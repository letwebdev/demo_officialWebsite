"use client"

export function HeaderDropdown(props: {
  children: ReactElement
  dropdown: ReactElement
}) {
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
        title={<Card className="p-2">{props.dropdown}</Card>}
      >
        {props.children}
      </Tooltip>
    </div>
  )
}
