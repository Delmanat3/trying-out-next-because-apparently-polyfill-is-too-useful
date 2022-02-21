import axios from "axios";
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async() => {
  let data = await CoinGeckoClient.ping();
};
export const SimpleSearch = async (query) => {
  return await axios.get(
    `https://api.coingecko.com/api/v3/coins/${query}?sparkline=true`
  );
};
export const CoinsList = async (query) => {
  await axios.get(
    `https://api.coingecko.com/api/v3/coins/list`
  );
  //console.log(x)
};
//CoinsList()
export const TopSeven = async () => {
  const arr1 = [];
  const topCoins = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  const { data } = topCoins;
  const { coins } = data;

  const coinData = coins.map((coin) => ({
    name: coin.item.name,
    id: coin.item.id,
    image: coin.item.large,
    thumb: coin.item.thumb,
    market_rank: coin.item.market_cap_rank,
  }));
  for (let i = 0; i < coinData.length; i++) {
    const dataLength = coinData[i].id;
    const response = await SimpleSearch(dataLength);
    const resData = response.data;
    arr1.push(resData);
  }
  const descData = arr1.map((coin) => ({
    price1: coin.market_data.current_price.usd,
    supply: coin.market_data.circulating_supply,
    coinId: coin.id,
    name: coin.name,
    images: coin.image.large,
    links: coin.links.homepage[0],
    description: coin.description.en,
    //graphData:coin.market_data.sparkline_7d,
    [Symbol.iterator]() {
      let values = Object.values(this);
      let index = 0;
      return {
        next() {
          if (index < values.length) {
            let val = values[index];
            index++;
            return { value: val, done: false };
          } else return { done: true };
        },
      };
    },
  }));
  // console.log(descData);
  return descData;
};

export const GraphData = async () => {
  return await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=true"
  );
};
