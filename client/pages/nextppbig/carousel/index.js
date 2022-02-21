import React from "react";
import { GET_NEWS } from "../../api/backendless";
import styles from '../../../styles/Home.module.css'

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
    <div className={styles.container}>
      <div className={styles.content} style={{ color: "white" }}>
        <div className={styles.slideshow}>
          <div className={styles.slideshowWrapper}>
            {holdMe.map((item, i) => (
              <div key={i} className={styles.slide}>
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
