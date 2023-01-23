import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';


// This is a Header component

function NavBar() {
  const navigate = useNavigate();
  const EMAIL = localStorage.getItem("EMAIL");


  const handleLogin = () => {
    navigate("/login")
  };


  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };



  return (
    <div>
      <AppBar position='static' elevation={0}>
        <Toolbar >
          <Typography variant='h5' component="div" sx={{ flexGrow: 1, fontWeight: "bold" }} >
            <Link to="/" style={{ textDecoration: "none", color: 'white', fontWeight: "bold" }}>Home</Link>
          </Typography>
          {typeof EMAIL === "string" ? <Typography variant='subtitle1' >
            Hello, {EMAIL}
          </Typography> : null}


          {typeof EMAIL === "string" ?
            <Button variant='contained'
              sx={{
                background: "green", borderRadius: 3,
                '&:hover': {
                  backgroundColor: 'yellow',
                  color: 'black',
                },
                ml: { xs: 0.2, sm: 2 }
              }} onClick={handleLogOut}>Logout</Button> : <Button variant='contained'
                sx={{
                  background: "red", borderRadius: 3,
                  '&:hover': {
                    backgroundColor: '#fff',
                    color: '#3c52b2',
                  },
                }} onClick={handleLogin}>Login</Button>}
        </Toolbar>
      </AppBar>



    </div>
  );
}

export default NavBar;
