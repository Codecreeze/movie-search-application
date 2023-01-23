import React, { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Button,
    IconButton,
    Divider,
    Grid,
    TextField,
    Typography,
    Card,
    InputAdornment,
} from "@mui/material";
import {
    AccountCircle,
    LockRounded,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


// This is a Login Form component





// Styling section
const txtStyle = { margin: "10px 0" };

const avatarStyle = { backgroundColor: "#66b3ff", color: "black" };
const cardStyle = {
    borderRadius: 40,
    padding: 20,
};

// function starts

function Login(props) {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const EMAILSTORED = localStorage.getItem("EMAIL");


    useEffect(() => {
        if (typeof EMAILSTORED === "string") {
            navigate("/dashboard")
        }
    }, [navigate, EMAILSTORED])


    const btnStyle = {
        backgroundColor: !(email && password) ? "gainsboro" : "#66b3ff",
        color: "black",
        borderRadius: 25,
    };



    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };


    const onSubmit = async () => {
        await localStorage.setItem("EMAIL", email);
        await localStorage.setItem("PASSWORD", password);
        navigate("/dashboard");
    };



    return (
        <div style={{ backgroundColor: "#ccffff" }}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "100vh" }}
            >
                <Grid item xs={10} sm={8} md={6} lg={4} xl={3.7}>
                    <Card elevation={2} style={cardStyle}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{ textAlign: "center", mb: 2 }}>
                                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                    Prune
                                </Typography>
                                <Divider />
                            </Box>

                            <Grid align="center">
                                <Avatar style={avatarStyle}>{<LockRounded />}</Avatar>
                                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                    Login
                                </Typography>
                            </Grid>

                            <Box my={1}>
                                <TextField
                                    label="Email"
                                    placeholder="Enter email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={txtStyle}
                                    autoComplete="off"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                {<AccountCircle />}
                                            </InputAdornment>
                                        ),
                                    }}
                                    inputProps={register("email", {
                                        required: "Email is Required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid Email Address",
                                        },
                                    })}
                                    error={!!errors?.email}
                                    helperText={errors?.email ? errors.email.message : null}
                                />

                                <TextField
                                    label="Password"
                                    placeholder="Enter password "
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={txtStyle}
                                    autoComplete="off"
                                    type={showPassword ? "text" : "password"}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                {<LockRounded />}
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                {
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        edge="end"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                }
                                            </InputAdornment>
                                        ),
                                    }}
                                    inputProps={register("password", {
                                        required: "Password is Required",
                                        pattern: {
                                            value:
                                                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
                                            message:
                                                "Password must contain at least one letter, one number and one special character",
                                        },
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be equal to or more than 8 Characters",
                                        },
                                        maxLength: {
                                            value: 16,
                                            message: "Password cannot exceed more than 16 Charcaters",
                                        },
                                    })}
                                    error={!!errors?.password}
                                    helperText={errors?.password ? errors.password.message : null}
                                />
                            </Box>
                            <Box my={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    style={btnStyle}
                                    disabled={!(email && password)}
                                >
                                    Login
                                </Button>
                            </Box>

                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
