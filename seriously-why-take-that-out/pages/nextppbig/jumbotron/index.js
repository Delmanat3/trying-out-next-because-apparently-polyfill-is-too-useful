
import styles from '../../../styles/Home.module.css'
import React from "react";
import { Search } from "../Search";
import { Carousel } from "../carousel/index";
import Script from 'next/script'

const image = "/img/newCity.jpg";
const grass = "/img/back.jpg";

export const Jumbo = (props) => {


  return (
    <div >
      <div id={styles.Bg1} style={{ backgroundImage: `url(${image})` }}>
        <Search  />
      </div>
      <div id={styles.careBox}>
        <Carousel/>
        </div>
        <div id={styles.jumboBox}>
        <div style={{width:"100vw"}}> 
        <Script src="https://widgets.coingecko.com/coingecko-beam-widget.js" />
        <coingecko-beam-widget  type="all" height="300" width="100vw" locale="en"></coingecko-beam-widget>
        </div>    
        </div>
      <div id={styles.Bg2} style={{ backgroundImage: `url(${grass})` }}>
      </div>
    </div>
  );
};
