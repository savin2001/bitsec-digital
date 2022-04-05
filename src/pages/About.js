import React from "react";

import {
    Container,
    Typography,
    Grid,
    
} from "@mui/material";

const About = () => {
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
                        <Typography
                            variant="h4"
                            sx={{ p: 3, m: 3 }}
                            gutterBottom
                            component="div"
                        >
                            Our Business
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ p: 3, m: 3, fontWeight: "light" }}
                            gutterBottom
                            component="div"
                        >
                            Changing the Game
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ p: 3, m: 3 }}
                            gutterBottom
                            component="div"
                        >
                            With our innovative and insightful technology, we
                            strive to enhance our users’ every day experiences.
                            Founded in 2000, our incredible team of engineers,
                            programmers, designers and marketers have worked
                            tirelessly to bring Bitsec Digital to the forefront
                            of the industry. We will continue to work
                            relentlessly to become the technological standard,
                            providing big picture insights and solutions for
                            companies of all sizes. Get in touch to learn more.
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
    );
};

export default About;
