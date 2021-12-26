import axios from 'axios'

// 1 Ethereum
// 137 Matic
// 56 Binance

const net = 56
const wallet = '0x382326696506Af9D09c3E82284161Ed227ed5Cd4'




export const getAllWallet = (wallet, net) => {
  const baseUrl = `https://api.covalenthq.com/v1/${net}/address/${wallet}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_ff9e70de0492454f9c74796b73d`
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

