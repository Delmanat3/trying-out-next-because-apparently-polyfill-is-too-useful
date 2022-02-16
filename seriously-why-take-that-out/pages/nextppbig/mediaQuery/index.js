import  React from "react";
import Nav from "../Nav";
import {MobileNav} from "../Nav/index2"
export const MediaQuery=(props)=>{
    const [isDesktop, setDesktop] = React.useState(window.innerWidth > 1000);

React.useEffect(()=>{
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
      };
    
  window.addEventListener("resize", updateMedia);
  return () => window.removeEventListener("resize", updateMedia);

})


  return(
    
    <>
    {isDesktop ?(
    <Nav/>
        ):( 
            <MobileNav/>
    )}
 
    </>
  )
}