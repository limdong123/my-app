import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);  //json 코인의 정보들을 setcoin에 정보를 받아온다.
        setLoading(false);  //loading = false로 고쳐서 loading 화면 숨기기
      });
  }, [])
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`} </h1>  
      {loading ? <strong>Loading...</strong> : 
      (<select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      )}
    </div>
  );
}

export default App;
