import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Avatar } from "@mui/material";
import { Jumbo } from "../jumbotron";
import { Link } from "react-router-dom";
import PatternIcon from "@mui/icons-material/Pattern";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import { Marque } from "../Marque/index";
import MoneyIcon from "@mui/icons-material/Money";
import { getUser } from "../../utils/API/backendless";

export default function Nav() {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 1000);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };
  const [geed, setGeed] = React.useState(true);
  React.useEffect(() => {
    let myPromise = new Promise(function (myResolve, myReject) {
      const b = getUser();

      myResolve(b);
      myReject(console.log("refetch"));
    });

    myPromise.then(
      function (value) {
        setGeed(value);
      },
      function (error) {
        console.error(error);
      }
    );

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      {(isDesktop && geed) || (!isDesktop && geed) ? (
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
                  sx={{ width: 40, height: 56 }}
                />
                <Typography sx={{ color: "white" }}>
                  Welcome back, {geed.firstName}!
                </Typography>

                <Link to="/table" underline="none">
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "14px" }}
                  >
                    <MoneyIcon />
                  </IconButton>
                </Link>
              </Toolbar>
            </AppBar>
            <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" background-color="#ffffff" locale="en"></coingecko-coin-price-marquee-widget>
          </Box>
          <>
            <Jumbo />
          </>
        </>
      ) : (
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

                <Link to="/login" underline="none">
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "14px" }}
                  >
                    Login <PatternIcon />
                  </IconButton>
                </Link>
                <Link to="/Signup" underline="none">
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "14px" }}
                  >
                    Sign Up <PersonAddAltSharpIcon />
                  </IconButton>
                </Link>
                <Link to="/table" underline="none">
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 2, fontSize: "14px" }}
                  >
                    <MoneyIcon />
                  </IconButton>
                </Link>
              </Toolbar>
            </AppBar>
            <Marque />
          </Box>
          <>
            <Jumbo />
          </>
        </>
      )}
    </>
  );
}
