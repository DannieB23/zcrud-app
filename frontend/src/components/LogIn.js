import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./LoginContext";

//Login Page and Handlers
export default function Login() {
    const navigate = useNavigate();
    const { setLoggedIn } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const loginData = {
            UserName: data.get("userName"),
            Password: data.get("password"),
        };

        fetch("http://localhost:8081/userbase/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "Successfully verified") {
                    document.cookie = `userId=${data.userId}; path=/`;
                    alert("Login Worked!");
                    setLoggedIn(true);
                    navigate("/Dashboard");
                } else {
                    alert("Verification failed");
                }
            })
            .catch((error) => {
                console.error("There was a problem with the POST ", error);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="userName"
                                label="User Name"
                                id="userName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
