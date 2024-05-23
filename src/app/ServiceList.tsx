import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

export default function ServiceList(props: {
  service: string
  subservices: string[]
}) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="ul"
    >
      <ListItemText primary={props.service} />
      <List
        component="li"
        disablePadding
      >
        {props.subservices.map((subservice, index) => (
          <ListItemButton
            component="a"
            href=""
            sx={{ pl: 1, width: "fit-content" }}
            key={index}
          >
            <ListItemText
              primary={subservice}
              primaryTypographyProps={{
                fontSize: "0.7rem",
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </List>
  )
}
