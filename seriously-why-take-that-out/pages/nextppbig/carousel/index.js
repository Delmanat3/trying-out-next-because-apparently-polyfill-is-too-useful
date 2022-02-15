import React from "react";
import { GET_NEWS } from "../../api/backendless";

export const Carousel = () => {
  const [holdMe, setHoldMe] = React.useState([
    {
      i: "place",
    },
    {
      i: "place",
    },
  ]);
  React.useEffect(() => {
    let myPromise = new Promise(function (myResolve, myReject) {
      const newsContainer = GET_NEWS();

      myResolve(newsContainer);
      myReject(console.log("refetch for carousel"));
    });

    myPromise.then(
      function (value) {
        setHoldMe(value);
      },
      function (error) {
        console.error(error);
      }
    );
  }, []);
  return (
    <div className="container">
      <div className="content" style={{ color: "white" }}>
        <div className="slideshow">
          <div className="slideshow-wrapper">
            {holdMe.map((item, i) => (
              <div key={i} className="slide">
                <div key={item.snippet}>
                  {" "}
                  <small>
                    {" "}
                    <p>{item.section}</p>
                  </small>
                  <strong>{item.headline}</strong>
                  <br />
                  {item.lead_paragraph}{" "}
                </div>

                <a href={item.url}>full article</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
