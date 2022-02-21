import React from "react";
import { getCache } from "../../api/backendless";
//import Nav from "../../components/Nav"
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Divider, Link } from "@mui/material";
import styles from '../../../styles/Home.module.css'

const image="/img/grass.jpg"


function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}



export default function SearchPage (){
  const [detail, setDetail] = React.useState([{
    name:"bitcoin",
    market_data_current_price:{usd:"44"}
  }]);
  const holdy = React.useRef(false);
  React.useEffect(() => {
    let myPromise = new Promise(function (myResolve, myReject) {
      const x = localStorage.getItem("name") 
      if (x) {
        myResolve(x);
      } else {
        myReject("error in promise");
      }
    });
    myPromise.then(
      function (value) {
        setDetail(value);
      },
      function (error) {
        console.log(error);
        if(error.status===401 ){
         return alert("Please log back in")
        }

      }
    );
  }, []);

  
console.log(detail)
  return (
    <div id={styles.mainBox}
    style={{backgroundImage:`url(${image})`,backgroundSize:"cover"}}

    > <span
    style={{position:"absolute"}}
    > <Link
          href="/nextppbig/Nav"
          >home</Link></span>
      <div id={styles.marqe}>
        <span id={styles.upperContainer}>
        
          <span id={styles.coinName}> {detail.name}</span>
          {/* <span id={styles.coinPrice}>Price: ${detail}</span> */}
          {holdy.current===true ? (
            <>
              <span id={styles.priceChange24}>Price/24hr: {detail.priceChange}%</span>
              <TrendingDownOutlinedIcon sx={{ color: "red" }} />
            </>
          ) : (
            <>
              <span id={styles.priceChange24}>Price/24hr: {detail.priceChange}%</span>
              <TrendingUpOutlinedIcon sx={{ color: "green" }}/>
            </>
          )}
        </span>
      </div>
      <div id={styles.outerbox}
      style={{
        //maxWidth:"60%",
        marginTop:"9rem",
        display:"flex",
        justifyContent:"center"
      }}
      >
        <div
        
        id={styles.innerbox}>
          <div
           style={{display:"flex",justifyContent:"center"}}
          id={styles.detailTitle}>
            <h1>{detail.query}</h1>
          </div>
          <Divider sx={{backgroundColor:"white"}}/>
          <div id={styles.detailContent}>
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
            id={styles.detailDescription}>
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
