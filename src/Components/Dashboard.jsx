import React, { useEffect } from 'react';
import {
    Box,
    Grid,
    Card,
    CardHeader,
    Stack,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    CircularProgress,
} from '@mui/material';
import { SearchBar } from './search/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData } from '../Redux/AsyncThunk/searchThunk';
import { Favorite, Share } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';





// This is a Dashboard  component where all the cards are displayed


const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, searchTerm, responseData } = useSelector((state) => state.searchQuery);



    useEffect(() => {
        dispatch(getApiData())
    }, [dispatch])

    const EMAILSTORED = localStorage.getItem("EMAIL");


    useEffect(() => {
        if (typeof EMAILSTORED === "object") {
            navigate("/")
        }
    }, [navigate, EMAILSTORED])



    return (
        <div>
            <Grid
                container>
                <Grid item xs={10} sm={10} md={12} sx={{ mt: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <SearchBar searchTerm={searchTerm} responseData={responseData} loading={loading} />
                </Grid>
            </Grid>
            {loading ?
                <Box sx={{ textAlign: "center", mt: 20 }}>
                    <CircularProgress thickness={5} sx={{ color: "#3399ff" }} size={80} />
                </Box> :
                (<>
                    {responseData.length === 0 ? <Box sx={{ textAlign: "center", mt: 20 }}>
                        <Typography variant='h6'> No Data to display!</Typography>
                    </Box> :
                        <Grid container spacing={2} paddingX={2} mt={7} sx={{ align: "center" }}>
                            {responseData.map((row, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ my: 2 }} key={index}>
                                        <Card sx={{ maxWidth: 345 }} key={index} >
                                            <CardHeader
                                                avatar={
                                                    <Avatar alt="Remy Sharp" src={row?.show?.image?.original} />
                                                }
                                                title={row?.show?.name}
                                                subheader={row.show.schedule.days.toLocaleString()}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="500"
                                                image={row?.show?.image?.original}
                                                alt="Image"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" >
                                                    {row.show.summary === null ? row.show.summary : row.show.summary.slice(0, 100)}
                                                    <span style={{ color: "#3399ff" }}> Read More ....</span>
                                                </Typography>
                                                <Box sx={{ mt: 2 }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                                            Genres: <span style={{ color: "blue" }}> {row.show.genres.toLocaleString()}</span>
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                                            Status:  <span style={{ color: "blue" }}>{row.show.status}</span>
                                                        </Typography>

                                                    </Stack>

                                                    <Stack direction="row" spacing={7}>
                                                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                                            Language: <span style={{ color: "blue" }}>{row.show.language}</span>
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                                            Type: <span style={{ color: "blue" }}>{row.show.type}</span>
                                                        </Typography>

                                                    </Stack>
                                                </Box>
                                            </CardContent>
                                            <CardActions disableSpacing>

                                                <IconButton aria-label="add to favorites" sx={{ color: "red" }}>
                                                    <Favorite />
                                                </IconButton>
                                                <IconButton aria-label="share" sx={{ marginLeft: { xs: 0, lg: 20, xl: 30 }, color: "green" }}>
                                                    <Share />
                                                </IconButton>
                                            </CardActions>

                                        </Card>

                                    </Grid>
                                )
                            })}
                        </Grid>}

                </>)}


        </div >
    )
}

export default Dashboard;