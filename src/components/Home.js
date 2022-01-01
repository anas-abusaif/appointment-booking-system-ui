import jwt from 'jsonwebtoken'
import React from 'react'
import BuyerHome from './BuyerHome'
import SellerHome from './SellerHome'


export default function Home() {

  let user = jwt.decode(localStorage.getItem('token'))

  return (
    <div>
      {user.role === "Seller"?
        <SellerHome/> : <BuyerHome/>  
      }
    </div>
  )
}
