import * as React from 'react';
import {Button, Stack,TextField} from '@mui/material';
import {SimpleSearch} from "../../api/coinGecko"
import {Me}from "../../api/backendless"
import styles from '../../../styles/Home.module.css'

// Hook

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





export  function Search(props) {
  const [formState, setFormState] = React.useState("");
  const [name, setName] = useLocalStorage("name", "Bob");
  
  const handleChange = (event) => {
    const {  value } = event.target;
    setFormState(value.trim().toLowerCase())
  };
const Simp=async(e)=>{
 e.preventDefault();
try{
  const {data}= await SimpleSearch(formState);
  setName(data)
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
    window.location.replace("/nextppbig/SearchPage");
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
