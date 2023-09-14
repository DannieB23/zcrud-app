import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useAuth } from "./LoginContext";

//Navigation Bar
const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const linkStyle = {
        marginRight: theme.spacing(2),
        color: "inherit",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
    };
    const { LoggedIn, setLoggedIn } = useAuth();

    //Logout state for navigation
    const handleLogout = () => {
        document.cookie = "userId=; expires=Sat, 09 Sep 2023 00:00:00 UTC; path=/;";
        alert("You Are Logged Out");
        navigate("/Login");
        setLoggedIn(false);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    style={{ flexGrow: 1, display: "flex", alignItems: "center" }}
                >
                    Comedy Specials Inventory
                </Typography>

                <Button color="inherit" component={RouterLink} to="/" style={linkStyle}>
                    <HomeIcon style={{ marginRight: theme.spacing(1) }} />
                    All Inventory
                </Button>

                {LoggedIn && (
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/Dashboard"
                        style={linkStyle}
                    >
                        <PersonIcon style={{ marginRight: theme.spacing(1) }} />
                        User Dashboard
                    </Button>
                )}
                {!LoggedIn && (
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/Login"
                        style={linkStyle}
                    >
                        <PersonIcon style={{ marginRight: theme.spacing(1) }} />
                        Login
                    </Button>
                )}

                {!LoggedIn && (
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/Register"
                        style={linkStyle}
                    >
                        <ListAltIcon style={{ marginRight: theme.spacing(1) }} />
                        Register
                    </Button>
                )}

                {LoggedIn && (
                    <Button color="inherit" onClick={handleLogout} style={linkStyle}>
                        <LockOpenIcon style={{ marginRight: theme.spacing(1) }} />
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
