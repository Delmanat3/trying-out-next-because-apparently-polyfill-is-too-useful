

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Avatar } from "@mui/material";
import { Jumbo } from "../jumbotron";
import  Link  from "next/link";
import PatternIcon from "@mui/icons-material/Pattern";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import { Marque } from "../Marque/index";
import MoneyIcon from "@mui/icons-material/Money";
import { getUser } from "../../api/backendless";

const MobileNav=()=>{
    return(
        
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              color="transparent"
              sx={{ backgroundColor: "black", opacity: ".94" }}
              position="static"
            >
              <Toolbar sx={{ justifyContent: "space-between" }}>
                <Avatar
                  alt="Cozmos icon"
                  src="/1copy.png"
                  sx={{ width: 56, height: 56 }}
                />

                <Link href="/login" underline="none"> Login <PatternIcon /></Link>
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "14px" }}
                  >
                    
                  </IconButton>
                
                <Link href="/Signup" underline="none">  Sign Up <PersonAddAltSharpIcon /> </Link>

                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "14px" }}
                  >
                  
                  </IconButton>
                <Link href="/table" underline="none">     <MoneyIcon />                </Link>


              </Toolbar>
            </AppBar>
            <Marque />
          </Box>
          <>
            <Jumbo />
          </>
        </>
    )
}