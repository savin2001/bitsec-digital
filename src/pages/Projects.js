import React from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Typography,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
} from "@mui/material";

const topics = [
    "Finance",
    "Business",
    "Marketing",
    "Sales",
    "Design and development",
    "Technology",
];

const Projects = () => {
    return (
        <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 60 }}
            ></Container>
            <Container
                maxWidth="xl"
                sx={{ flexGrow: 1, py: 2, backgroundColor: "primary.background", color: "white" }}
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
                            variant="h4"
                            sx={{ p: 3, m: 3 }}
                            gutterBottom
                            component="div"
                        >
                            Our Projects
                        </Typography>
                        
                        <Typography
                            variant="body2"
                            sx={{ p: 3, m: 3 }}
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi odio placeat vitae delectus,
                            cupiditate eius tempora architecto voluptate libero!
                            Id sunt excepturi quasi, quis fugiat dolore dicta
                            voluptas maiores sint?
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
                sx={{ flexGrow: 1, py: 2, backgroundColor: "primary.main" }}
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
                        <Grid
                            container
                            spacing={2}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                        >
                            {topics.map((topic, index) => (
                                <Grid item xs={4} sm={4} md={4} key={index}>
                                    <Card sx={{ textAlign: "left" }}>
                                        <CardMedia
                                            component="img"
                                            image="https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                            alt="blog photos"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {topic}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link
                                                to={`/project`}
                                                style={{
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                >
                                                    Read more
                                                </Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
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
    );
};

export default Projects;
