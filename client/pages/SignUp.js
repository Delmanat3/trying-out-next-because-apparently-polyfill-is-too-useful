import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@mui/material";
import { ADD_USER } from "./api/backendless";
import styles from "../styles/login.module.css";

export default function SignUp() {
  const [formState, setFormState] = React.useState({
    user_email: "",
    user_password: "",
    user_name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value.trim(),
    });
  };
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const  resData  = await ADD_USER(formState);
      // console.log(resData.status)

      if(resData.status===200) 
      return window.location.assign("/nextppbig/Nav") 
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <Container id={styles.main} component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="user_name"
                required
                fullWidth
                id="user_name"
                value={formState.user_name}
                onChange={handleChange}
                label="Full Name"
                autoFocus
              />
            </Grid>
          
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="user_email"
                label="Email Address"
                value={formState.user_email}
                onChange={handleChange}
                name="user_email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="user_password"
                label="Password"
                value={formState.user_password}
                onChange={handleChange}
                type="password"
                id="user_password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <Link href="/nextppbig/Nav" variant="body2">
                {"Home"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
