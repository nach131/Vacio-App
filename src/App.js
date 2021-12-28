import React, { useEffect, useState } from 'react';
function App () {
  const [price, setPrice] = useState();
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    let intervalo
    const fechData = async () => {
      try {
        const response = await fetch(
          "https://api.coincap.io/v2/assets/bitcoin"
        )
        const result = await response.json()
        const btcPrice = (+result?.data?.priceUsd).toFixed(2)
        setPrice(btcPrice)
      } catch (error) {
        console.log("error", error)
      }
    }
    // Si el precio esta vacio , get precio btc
    if (!price) {
      fechData()
    }

    if (autoRefresh) {
      intervalo = setInterval(() => {
        fechData()
      }, 5 * 1000)
    }

    return () => {
      clearInterval(intervalo)
    }

  }, [autoRefresh, price])

  return (
    <div className="App">
      <h2>{price && `Bitcoin Price: $${price}`}</h2>
      <div className="refresh">
        <div className="refresh-label">Auto refresh:</div>
        <label className="switch">
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={(e) => {
              setAutoRefresh(e.target.checked);
            }}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  )
}

export default App;
