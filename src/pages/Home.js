import React from "react";
import {
    Container,
    Typography,
    Grid,
    Box,
    TextField,
    Button,
} from "@mui/material";
// import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 40 }}
            ></Container>
            {/* Landing page */}
            <Container
                maxWidth="xl"
                sx={{
                    flexGrow: 1,
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                style={{
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundImage: `url("https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
                }}
            >
                <Box
                    style={{
                        background: "rgba(0, 0, 0, 0.3)",
                        width: "100%",
                        backgroundSize: "cover",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ p: 3, m: 3 }}
                        gutterBottom
                        color="white"
                        component="div"
                    >
                        <i>Bitsec Digital</i>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ p: 3, m: 3 }}
                        gutterBottom
                        color="white"
                        component="div"
                    >
                        Transforming Lives. Through Digital
                    </Typography>
                </Box>
            </Container>

            {/* Story */}
            <Container
                maxWidth="xl"
                sx={{
                    flexGrow: 1,
                    py: "50px",
                    backgroundColor: "primary.background",
                    color: "secondary.contrastText",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
                            variant="h4"
                            sx={{ p: 3 }}
                            gutterBottom
                            component="div"
                        >
                            Our Story
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ p: 3 }}
                            gutterBottom
                            component="div"
                        >
                            Digital Society is the way to go!
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ p: 3, m: 3 }}
                            gutterBottom
                            component="div"
                        >
                            Bitsec Digital is a social enterprise led by Youths
                            for youths to leverage on the goodies brought about
                            by Digital era - to empower communities achieve the
                            best. It focuses on ways to improve human life at
                            various stages during this era of Digital
                            Transformation through training and empowering youth
                            on how to create and secure wealth online. In the
                            process, it is developing smart AI & ML experts to
                            provide top notch image processing solutions for
                            businesses of all sizes. Today; we offer smart,
                            creative and innovative services to dozens of
                            clients worldwide. Why not join our fast growing
                            client base? Get in touch today to learn more.
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

            {/* AI and ML */}
            <Container
                maxWidth="xl"
                sx={{ flexGrow: 1 }}
                style={{
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundImage: `url("https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60    ")`,
                }}
            >
                <Grid
                    container
                    spacing={2}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    style={{
                        background: "rgba(0, 0, 0, 0.3)",
                        width: "100%",
                    }}
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
                            gutterBottom
                            color="white"
                            component="div"
                        >
                            Our Innovative in AI & ML Image Processing
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ p: 3, m: 3, fontWeight: "light" }}
                            gutterBottom
                            color="white"
                            component="div"
                        >
                            The Possibilities Are Endless
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ p: 3, m: 3 }}
                            gutterBottom
                            color="white"
                            component="div"
                        >
                            At Bitsec Digital, our comprehensive technological
                            solutions help AI & ML industry leading companies
                            and individuals achieve greater success. Our Image
                            Processing Experts are well trained in processing
                            visual data in bulk ensuring clients satisfaction
                            beyond measure and within shortest time possible. In
                            order to ensure reliable outputs for our clients' AI
                            & ML endeavors, Bitsec Digital is continually
                            building upon its expert teams to have a deeper
                            knowledge and experience in Image processing
                            techniques, so as to stay in touch with new changes
                            in the field of AI & ML for better.
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

            {/* Quote */}
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    paddingY: 3,
                    backgroundColor: "primary.main",
                }}
            >
                <Container sx={{ flexGrow: 1, my: 3, height: "30vh" }}>
                    <Typography
                        variant="h6"
                        sx={{ p: 3, m: 3 }}
                        gutterBottom
                        component="div"
                    >
                        "The higher we are placed, the more humbly we should
                        walk"
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ p: 3, m: 3 }}
                        gutterBottom
                        component="div"
                    >
                        Marcus Tullius Cicero
                    </Typography>
                </Container>
            </Box>

            {/* Get in touch */}
            <Container
                maxWidth="xl"
                sx={{
                    flexGrow: 1,
                    px: 4,
                    height: "100%",
                    backgroundColor: "primary.background",
                    color: "secondary.contrastText",
                }}
            >
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={1}
                    ></Grid>
                    <Grid item xs={10}>
                        <Grid
                            container
                            spacing={2}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                            sx={{ textAlign: "left" }}
                        >
                            <Grid item xs={4} sm={8} md={6}>
                                <Typography
                                    variant="h4"
                                    sx={{ p: 1, m: 2 }}
                                    gutterBottom
                                    component="div"
                                >
                                    Get in Touch
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ p: 1, m: 2 }}
                                    gutterBottom
                                    component="div"
                                >
                                    Nairobi - Kenya
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ p: 1, m: 2 }}
                                    gutterBottom
                                    component="div"
                                >
                                    +254 738 600 109
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ p: 1, m: 2 }}
                                    gutterBottom
                                    component="div"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Name"
                                        placeholder="Enter your name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ p: 1, m: 2 }}
                                    gutterBottom
                                    component="div"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Address"
                                        placeholder="Enter your address"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        p: 1,
                                        m: 2,
                                        display: "flex",
                                        columnGap: 3,
                                        rowGap: 1,
                                    }}
                                    gutterBottom
                                    component="div"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="outlined"
                                        required
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Phone"
                                        placeholder="Enter your phone"
                                        variant="outlined"
                                        required
                                    />
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ p: 1, m: 2 }}
                                    gutterBottom
                                    component="div"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Subject"
                                        placeholder="Type the subject"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ p: 1, m: 2 }}
                                    gutterBottom
                                    component="div"
                                >
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        placeholder="Type your message here..."
                                        multiline
                                        fullWidth
                                        rows={4}
                                    />
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ p: 1, m: 2 }}
                                    gutterBottom
                                    component="div"
                                >
                                    <Button variant="contained" size="large">
                                        submit
                                    </Button>
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={8} md={6}>
                                <img
                                    src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt=""
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={1}
                    ></Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Home;
