import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Worko from "../Assets/working.png";


// This is a Front Page pf the application


export default function FrontPage() {
    return (
        <div style={{ backgroundColor: "azure", minHeight: "90vh" }}>
            <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
                <Grid container
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant='h3' sx={{ fontWeight: "bold" }}>
                                Hi there,
                            </Typography>

                            <Typography variant='h3' sx={{ fontWeight: "bold" }}>
                                This is a demo application.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} align="center" sx={{ display: { xs: "none", md: "block" } }} >
                        <img src={Worko} alt="Worko" style={{ height: "75vh", width: "45vw" }} />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} align="center"  sx={{ display: { xs: "block", md: "none" } }}>
                        <img src={Worko} alt="Worko" style={{ height: "50", width: "80vw" }} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}