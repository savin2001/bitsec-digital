import React from "react";
// import Map from "../components/Map"
import Map from "../media/Map.png"
import {
    Container,
    Typography,
    Grid,
    Box,
    Paper,
    Button,
    TextField,
} from "@mui/material";



const Contact = () => {
    return (
        <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 60 }}
            ></Container>
            <Container
                maxWidth="xl"
                sx={{
                    flexGrow: 1,
                    px: 4,
                    height: "100%",
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
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
                            </Grid>
                            <Grid item xs={4} sm={8} md={6}>
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
            {/* Map */}
            <Container
                maxWidth="xl"
                sx={{
                    flexGrow: 1,
                    px: 4,
                    height: "100%",
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
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
                        <Box>
                            <Paper sx={{ height: "100%", width: "100%" }}>
                            <img src={Map} alt="" />
                            </Paper>
                        </Box>
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

export default Contact;
