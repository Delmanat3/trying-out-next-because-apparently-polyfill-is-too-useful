import Head from 'next/head'
import Image from 'next/image'
import { Glitch } from '../landing/LandingPage'
import Script from 'next/script'


export default function Home() {
  return (
    <>
    <Head/>
    
    
  <Glitch/>
      <Script src="https://widgets.coingecko.com/coingecko-beam-widget.js" />

  </>
  )
}
