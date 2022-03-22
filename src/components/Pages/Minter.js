import React from 'react'
import Button from 'react-bootstrap/Button'
import { ethers } from 'ethers'
import { abi } from '../../constants/abi'


import { useWeb3React } from '@web3-react/core'


function Minter () {

  const {
    library,
    account,
    active,
  } = useWeb3React();


  async function execute () {
    if (active) {
      const signer = library.getSigner()
      const contractAddress = "0xF5448F3176985859908A9082791E9F7FF9C56386";

      const contract = new ethers.Contract(contractAddress, abi, signer);

      try {
        const url = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/515'
        const result = await contract.claimItem(url, {
          // from: wallet
          from: account
        })

        console.log(result);
        // await contract.store(42);
      } catch (error) {
        console.log(error);
      }

    }
  }

  return (
    <div className="row mt-3">
      <div className="col-6">
        <h5>Minter</h5>
        <p>Esto es otro componente</p>
        <Button
          variant="info"
          onClick={() => execute()}
        >Minter
        </Button>
      </div>
    </div>
  )
}

export default Minter