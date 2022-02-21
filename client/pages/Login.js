import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Container,
  Typography,
  Box,
  Link,
  Grid,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@mui/material";
import { LOGIN_USER } from "./api/backendless";
import styles from "../styles/login.module.css";
export default function Login() {
  const [formState, setFormState] = React.useState({ user_email: "", user_password: "" });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value.trim(),
    });
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
    const resData= await LOGIN_USER(formState);  
      if(!resData){
        console.log("eroor boooopp")
        alert("error")
        return
      }
      console.log(resData)
       
         
     if(resData.status===200)return window.location.replace("/nextppbig/Nav")
      
    } catch (e) {
      console.log(e.message);
      alert(e.message)
    }

    // clear form values
    // setFormState({
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <>
    <CssBaseline 
  
    />

    <Container id={styles.main} component="main" maxWidth="xs">
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="user_email"
            value={formState.user_email}
            onChange={handleChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="user_password"
            label="Password"
            type="password"
            value={formState.user_password}
            onChange={handleChange}
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>

            </Grid>
            <Grid item>
              <Link href="/nextppbig/Nav" variant="body2">
                {"Home"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </>
  );
}
