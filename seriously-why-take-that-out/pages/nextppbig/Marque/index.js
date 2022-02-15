import React from "react";
import Marquee from "react-fast-marquee";
import { Get_Seven } from "../../api/backendless";
export const Marque = () => {
  const [holder, setHolder] = React.useState([]);
  React.useEffect(() => {
    let myPromise = new Promise(function (myResolve, myReject) {
      const x = Get_Seven();
      if (x) {
        myResolve(x);
      } else {
        myReject("error in promise");
      }
    });

    myPromise.then(
      function (value) {
        setHolder(value);
      },
      function (error) {
        console.log(error.status);
        if(error.status===401 ){
         return alert("Please log back in")
        }

      }
    );
  }, []);

  return (
    <>
      <Marquee
        style={{ backgroundColor: "black", opacity: ".94" }}
        gradient={false}
        gradientWidth="0px"
        pauseOnHover={true}
        pauseOnClick={true}
      >
        {holder.map((coin, i) => (
          <span
            id="marq"
            key={coin.name}
          >
            <span
              key={coin.price}
              style={{ color: "white", padding: "18px" }}
            >{`| ${coin.name}:`}</span>
            <span key={coin.price} style={{ color: "white", padding: "18px" }}>
              ${`${coin.price1} |`}
            </span>
          </span>
        ))}
      </Marquee>
    </>
  );
};
