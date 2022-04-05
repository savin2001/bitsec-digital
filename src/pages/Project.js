import React from 'react'
import { Container, Typography, Grid } from "@mui/material";

const Project = () => {
  return (
    <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 60 }}
            ></Container>
            <Container
                maxWidth="xl"
                sx={{ flexGrow: 1, py: 2, backgroundColor: "primary.main" }}
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyJTIwcHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
                }}
            >
                <Grid
                    container
                    spacing={2}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    style={{}}
                >
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={2}
                    ></Grid>
                    <Grid item xs={8}>
                        <Typography
                            variant="h4"
                            sx={{ p: 3, m: 3 }}
                            color="white"
                            gutterBottom
                            component="div"
                        >
                            Our Project Title
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ p: 3, m: 3 }}
                            color="white"
                            gutterBottom
                            component="div"
                        >
                            With our innovative and insightful technology, we
                            strive to enhance our users’ every day experiences.
                            Founded in 2000, our incredible team of engineers,
                            programmers, designers and marketers have worked
                            tirelessly to bring Bitsec Digital to the forefront
                            of the industry. 
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={2}
                    ></Grid>
                </Grid>
            </Container>
            <Container
                maxWidth="xl"
                sx={{
                    flexGrow: 1,
                    py: 2,
                    backgroundColor: "primary.background",
                    color: "primary.light", 
                    textAlign: "left",
                }}
            >
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={2}
                    ></Grid>
                    <Grid item xs={8}>
                        <Typography
                            variant="body2"
                            sx={{ p: 3, m: 3 }}
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt eligendi ad ratione facere vero
                            maiores error rem architecto recusandae tempora, hic
                            mollitia voluptas, voluptate nam earum? Blanditiis,
                            eos est quam minus ut debitis, nesciunt illum
                            consequatur corrupti similique laudantium doloremque
                            nihil dolore repellendus ullam quia. Mollitia
                            necessitatibus explicabo vitae debitis asperiores
                            numquam, aspernatur similique perspiciatis
                            voluptates, magnam fugiat sint sed neque cumque aut
                            id quod? Enim eaque debitis ipsum laborum sunt illo.
                            Quas laborum magnam consectetur. Rerum reprehenderit
                            minima molestiae ad adipisci maxime laboriosam
                            incidunt non expedita voluptatem voluptate iusto
                            quia veritatis, officiis hic quasi corrupti eum
                            aliquam. Corporis, qui!
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ p: 3, m: 3 }}
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt eligendi ad ratione facere vero
                            maiores error rem architecto recusandae tempora, hic
                            mollitia voluptas, voluptate nam earum? Blanditiis,
                            eos est quam minus ut debitis, nesciunt illum
                            consequatur corrupti similique laudantium doloremque
                            nihil dolore repellendus ullam quia. Mollitia
                            necessitatibus explicabo vitae debitis asperiores
                            numquam, aspernatur similique perspiciatis
                            voluptates, magnam fugiat sint sed neque cumque aut
                            id quod? Enim eaque debitis ipsum laborum sunt illo.
                            Quas laborum magnam consectetur. Rerum reprehenderit
                            minima molestiae ad adipisci maxime laboriosam
                            incidunt non expedita voluptatem voluptate iusto
                            quia veritatis, officiis hic quasi corrupti eum
                            aliquam. Corporis, qui!
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ p: 3, m: 3 }}
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt eligendi ad ratione facere vero
                            maiores error rem architecto recusandae tempora, hic
                            mollitia voluptas, voluptate nam earum? Blanditiis,
                            eos est quam minus ut debitis, nesciunt illum
                            consequatur corrupti similique laudantium doloremque
                            nihil dolore repellendus ullam quia. Mollitia
                            necessitatibus explicabo vitae debitis asperiores
                            numquam, aspernatur similique perspiciatis
                            voluptates, magnam fugiat sint sed neque cumque aut
                            id quod? Enim eaque debitis ipsum laborum sunt illo.
                            Quas laborum magnam consectetur. Rerum reprehenderit
                            minima molestiae ad adipisci maxime laboriosam
                            incidunt non expedita voluptatem voluptate iusto
                            quia veritatis, officiis hic quasi corrupti eum
                            aliquam. Corporis, qui!
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={2}
                    ></Grid>
                </Grid>
            </Container>
        </>
  )
}

export default Project