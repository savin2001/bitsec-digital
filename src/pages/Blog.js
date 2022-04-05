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

const Blog = () => {
    return (
        <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 60 }}
            ></Container>
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
                                            image="data:image/png;base64,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"
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
                                                to={`/article`}
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

export default Blog;
