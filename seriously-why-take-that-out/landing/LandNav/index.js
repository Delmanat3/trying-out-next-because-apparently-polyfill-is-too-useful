import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import  Link  from "next/link";
import PatternIcon from "@mui/icons-material/Pattern";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import MoneyIcon from "@mui/icons-material/Money";

export default function LandingNav() {

  return (
    <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              color="transparent"
              sx={{ backgroundColor: "black", opacity: ".94" }}
          
            >
              <Toolbar sx={{ justifyContent: "space-between" }}>
               <Link href="/nextppbig/Nav" >this</Link> 
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "14px" }}
                  >
                    <MoneyIcon />
                  </IconButton> {" Try it out!"}
                
                <Typography sx={{ color: "white" }}></Typography>

                {/* <Link href="/login" underline="none"> */}
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "14px" }}
                  >
                    <PatternIcon />{"Login"}
                  </IconButton>
                {/* </Link> */}
                {/* <Link href="/SignUp" underline="none"> */}
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "14px" }}
                  >
                    <PersonAddAltSharpIcon />{"Sign Up"}
                  </IconButton>
                {/* </Link> */}
              </Toolbar>
            </AppBar>
          </Box>
          
        </>
    
   
  );
}
