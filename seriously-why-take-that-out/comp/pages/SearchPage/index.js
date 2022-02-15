import React from "react";
import { getCache } from "../../utils/API/backendless";
//import Nav from "../../components/Nav"
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Divider, Link } from "@mui/material";
const image="/img/grass.jpg"
export const SearchPage = () => {
  const [detail, setDetail] = React.useState([]);
  const holdy = React.useRef(false);
  React.useEffect(() => {
    const g = async () => {
      const x = await getCache("search");
      if (x.priceChange < 0) {
        holdy.current = true;
      }
      setDetail(x);
    };

    g();
  }, []);
console.log(detail)
  return (
    <div id="mainBox" 
    style={{backgroundImage:`url(${image})`,backgroundSize:"cover"}}

    > <span
    style={{position:"absolute"}}
    > <Link
          href="/dash"
          >home</Link></span>
      <div id="marqe">
        <span id="upperContainer">
        
          <span id="coinName"> {detail.query}</span>
          <span id="coinPrice">Price: ${detail.price}</span>
          {holdy.current===true ? (
            <>
              <span id="priceChange24">Price/24hr: {detail.priceChange}%</span>
              <TrendingDownOutlinedIcon sx={{ color: "red" }} />
            </>
          ) : (
            <>
              <span id="priceChange24">Price/24hr: {detail.priceChange}%</span>
              <TrendingUpOutlinedIcon sx={{ color: "green" }}/>
            </>
          )}
        </span>
      </div>
      <div id="outerbox"
      style={{
        //maxWidth:"60%",
        marginTop:"9rem",
        display:"flex",
        justifyContent:"center"
      }}
      >
        <div
        
        id="innerbox">
          <div
           style={{display:"flex",justifyContent:"center"}}
          id="detailTitle">
            <h1>{detail.query}</h1>
          </div>
          <Divider sx={{backgroundColor:"white"}}/>
          <div id="detailContent">
            <div
            style={{
              display:"flex",
            }}
            >
              <ul
              style={{ listStyleType: "none"}}
              >
                <li>
                Creation Date: {detail.gen}
                </li>
                <li>
                Current Price: ${detail.price}
                </li>
              </ul>
              
            </div>
            <div
            style={{
              display:"flex",
              justifyContent:"center"
            }}
            id="detailDescription">
              <h1>Deets</h1>
            </div>
            <Divider sx={{backgroundColor:"white"}}/>
            <div 
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight:"24px"
            }}
            >
            <ul>
               <li>High 24hr: ${detail.high24}</li>
               <li> Low 24hr: ${detail.low24}</li>
            </ul>
            <ul>
               <li>Price Change: ${detail.priceChange1h}</li>
               
            </ul>
            </div>
         <div style={{paddingTop:"1rem"}}><coingecko-coin-heatmap-widget  height="400" locale="en"></coingecko-coin-heatmap-widget></div>   

          </div>
          
        </div>
      </div>
    </div>
  );
};
