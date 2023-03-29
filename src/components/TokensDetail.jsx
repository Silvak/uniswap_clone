import React from "react"
import { createPortal } from "react-dom"
import CryptoDetail from "../Pages/CryptoDetail"


const TokensDetail = () => {
  return createPortal(
    <div className="fixed top-0 w-full h-full bg-black-50 flex items-center justify-center"> 
      <div className="w-full h-full bg-gray-800  text-white">
        <CryptoDetail/></div>  
    </div>,
    document.getElementById("model")
  )
  
}


export default TokensDetail