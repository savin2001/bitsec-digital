import React from "react";
import {
    Container,
    Typography,
    Grid,
    Box,
    Paper,
    // Card,
    // CardActions,
    // CardMedia,
    // CardContent,
    // Button,
    Rating,
} from "@mui/material";
// import { Link } from "react-router-dom";

const Product = () => {
    return (
        <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container sx={{ flexGrow: 1, top: 1000 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 8 }}
                >
                    <Grid item xs={4} sm={4} md={4}>
                        <Box
                            sx={{
                                textAlign: "left",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    "& > :not(style)": {
                                        width: "100%",
                                        height: "180px",
                                    },
                                    mb: 3,
                                    mx: 3,
                                }}
                            >
                                <Box>
                                    <Typography
                                        sx={{ color: "primary.dark" }}
                                        variant="h6"
                                    >
                                        Seller Name
                                    </Typography>
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={2.5}
                                        precision={0.5}
                                        readOnly
                                    />
                                </Box>
                                <Box
                                    component="img"
                                    height="600"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="stock image"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flexWrap: "wrap",
                                        "& > :not(style)": {
                                            width: "100%",
                                            height: "700px",
                                        },
                                    }}
                                ></Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                textAlign: "left",

                                width: "100%",
                                height: "100%",
                            }}
                        >
                            Hello
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Product;
