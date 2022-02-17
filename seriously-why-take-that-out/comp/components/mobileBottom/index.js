
import Script from 'next/script'

export const MobileBottom=()=>{


    return(
        <> 
        <Script src="https://widgets.coingecko.com/coingecko-beam-widget.js" />

        <coingecko-beam-widget  type="all" height="300" locale="en"></coingecko-beam-widget>
        </>
    )

}