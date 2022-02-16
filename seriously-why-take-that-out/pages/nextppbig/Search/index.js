import * as React from 'react';
import {Button, Stack,TextField} from '@mui/material';
import {SimpleSearch} from "../../api/coinGecko"
import {Me}from "../../api/backendless"
import styles from '../../../styles/Home.module.css'

export  function Search(props) {
  const [formState, setFormState] = React.useState("");

  
  const handleChange = (event) => {
    const {  value } = event.target;
    setFormState(value.trim().toLowerCase())
  };
const Simp=async(e)=>{
 e.preventDefault();
try{
  const {data}= await SimpleSearch(formState);
  setFormState(" ")
 // console.log(data);
  //props=data
  if(data){
    const itemSave={
      description:data.description.en,
      image:data.image.small,
      query:data.id,
      priceChange:data.market_data.price_change_percentage_24h,
       price:data.market_data.current_price.usd,
       updated:data.market_data.last_updated,
       gen:data.genesis_date,
       cap:data.market_data.market_cap.usd,
      high24:data.market_data.high_24h.usd,
      low24:data.market_data.low_24h.usd,
      priceChange1h:data.market_data.price_change_percentage_1h_in_currency.usd,
    }
    // console.log(itemSave)
    Me("search", itemSave)
    window.location.replace("/SearchPage");
  }

  
}catch(err){
  console.error(err.message)
}
// console.log({props})

}

  return (
    <Stack
    id={styles.search}
      component="form"
      sx={{
        width: '40ch',
        flexDirection:"row",
        marginLeft:"1rem"
      }}
      noValidate
      onSubmit={Simp}
    >
      <TextField
        // hiddenLabel
        fullWidth
        name="input"
        type="input"
        onChange={handleChange}
        value={formState.input}
         placeholder="Search"
        // variant="filled"
        sx={{ backgroundColor:"white"}}
      />
      <Button
      type="submit"
      variant="contained"
      sx={{color:"rgb(28,188,156)"}}
  >
        Search
      </Button>
    </Stack>
  );
}
