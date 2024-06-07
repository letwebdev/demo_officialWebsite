import * as React from "react"
import Image from "next/image"

export default async function ProductList() {
  const productList = [
    {
      img: "/demo_officialwebsite/favicon.ico",
      title: "Product A",
      description: "Description A",
    },
    {
      img: "/demo_officialwebsite/favicon.ico",
      title: "Product B",
      description: "Description B",
    },
    {
      img: "/demo_officialwebsite/favicon.ico",
      title: "Product C",
      description: "Description C",
    },
    {
      img: "/demo_officialwebsite/favicon.ico",
      title: "Product D",
      description: "Description D",
    },
  ]

  return (
    <Box
      sx={{ flexGrow: 1 }}
      className="max-w-[90%] mx-auto"
    >
      <Grid
        container
        spacing={2}
      >
        {productList.map((product) => (
          <Grid
            item
            xs={3}
            key={product.title}
          >
            <Card variant="outlined">
              <Box sx={{ p: 2 }}>
                <Image
                  width={208}
                  height={208}
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                  className="p-[50px]"
                />
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {product.description}
                  </Typography>
                </Stack>
              </Box>
              <Container
                sx={{ p: 2 }}
                className="text-center"
              >
                <Button variant="contained">Reserve</Button>
              </Container>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
