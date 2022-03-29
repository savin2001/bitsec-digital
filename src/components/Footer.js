import {
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                paddingY: 3,
                backgroundColor: "primary.dark",
            }}
        >
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 16 }}
                >
                    {Array.from(Array(4)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    backgroundColor: "primary.dark",
                                    color: "primary.main",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Footer Heads
                                    </Typography>
                                    <Typography sx={{ textAlign: "left" }}>
                                        Product description Lorem ipsum dolor
                                        sit amet consectetur adipisicing elit.
                                        Accusantium?
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
