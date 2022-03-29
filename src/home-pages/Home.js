import React from "react";
import {
    Container,
    Typography,
    Grid,
    Box,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Button,
    Rating,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
    return (
        <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container sx={{ flexGrow: 1, top: 1000 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8 }}
                    sx={{ bgcolor: "primary.light" }}
                >
                    <Grid item xs={2} sm={4} md={4}>
                        <Box
                            sx={{
                                width: 300,
                                height: 300,
                                backgroundColor: "primary.contrastText",
                            }}
                        >
                            <Typography>xs=2</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Typography>xs=2</Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Products */}
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Typography
                    variant="h4"
                    sx={{ p: 3, m: 3 }}
                    gutterBottom
                    component="div"
                >
                    Popular Products
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 16 }}
                >
                    {Array.from(Array(4)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="stock image"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Product name
                                    </Typography>

                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        color="text.secondary"
                                    >
                                        Product description Lorem ipsum dolor
                                        sit amet consectetur adipisicing elit.
                                        Accusantium?
                                    </Typography>
                                    <Rating
                                        name="read-only"
                                        value={3}
                                        readOnly
                                    />
                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        color="secondary"
                                    >
                                        $ 4.20
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link
                                        to={`/product`}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="secondary"
                                            bgcolor="secondary"
                                        >
                                            Add to Cart
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Latest product */}
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Typography
                    variant="h4"
                    sx={{ p: 3, m: 3 }}
                    gutterBottom
                    component="div"
                >
                    Latest Products
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 16 }}
                >
                    {Array.from(Array(4)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="stock image"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Product
                                    </Typography>
                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        color="text.secondary"
                                    >
                                        Product description Lorem ipsum dolor
                                        sit amet consectetur adipisicing elit.
                                        Accusantium?
                                    </Typography>
                                    <Rating
                                        name="read-only"
                                        value={3}
                                        sx={{ align: "left" }}
                                        readOnly
                                    />
                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        color="secondary"
                                    >
                                        $ 6.90
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link
                                        to={`/product`}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="secondary"
                                            bgcolor="secondary"
                                        >
                                            Add to Cart
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ flexGrow: 1, my: 4 }}>
                    <Link
                        to={`/products`}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Button
                            size="large"
                            variant="contained"
                            color="secondary"
                            bgcolor="secondary"
                        >
                            SHOP BY CATEGORY
                        </Button>
                    </Link>
                </Box>
            </Container>

            {/* Focus */}
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Typography
                    variant="h4"
                    sx={{ p: 3, m: 3 }}
                    gutterBottom
                    component="div"
                >
                    Our Focus
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 16 }}
                >
                    {Array.from(Array(2)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={8} key={index}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="stock image"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Customer Service
                                    </Typography>

                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        color="text.secondary"
                                    >
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Sunt fugit officiis
                                        exercitationem voluptas nesciunt
                                        repellat nostrum, tempore explicabo fuga
                                        magni, animi, quibusdam rerum facilis
                                        accusantium quasi ex! Ad, culpa! Nobis!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Partners */}
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    paddingY: 3,
                    backgroundColor: "secondary.main",
                }}
            >
                <Container sx={{ flexGrow: 1, my: 3 }}>
                    <Typography
                        variant="h4"
                        sx={{ p: 3, m: 3 }}
                        gutterBottom
                        component="div"
                    >
                        Our Partners
                    </Typography>
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
                                        backgroundColor: "secondary.main",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="stock image"
                                    />
                                    <CardContent>
                                        <Typography
                                            sx={{ textAlign: "left" }}
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            Partners
                                        </Typography>
                                        <Typography sx={{ textAlign: "left" }}>
                                            Product description Lorem ipsum
                                            dolor sit amet consectetur
                                            adipisicing elit. Accusantium?
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Home;
