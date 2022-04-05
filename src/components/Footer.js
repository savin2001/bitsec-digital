import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                paddingY: 3,
                backgroundColor: "primary.light",
            }}
        >
            <Container sx={{ flexGrow: 1, my: 3,  }}>
                <Grid
                    container
                    sx={{display: "flex", justifyContent: 'center'}}
                >
                    <Grid item xs={1} sm={1} md={1}>
                        <Box>
                            <FacebookIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Box>
                            <TwitterIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Box>
                            <LinkedInIcon />
                        </Box>
                    </Grid>
                </Grid>
                <Typography
                            variant="caption"
                            sx={{ p: 3, m: 3, fontWeight: "light" }}
                            gutterBottom
                            component="div"
                        >
                            ©2021 by Bitsec Digital
                        </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
