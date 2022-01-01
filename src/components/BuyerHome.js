import axios from 'axios'
import { React, useEffect, useState } from 'react'
import SellerCard from './SellerCard'
import {Row, Col} from 'react-bootstrap'
export default function BuyerHome() {

  const [sellers, setSelleres] = useState()

  useEffect(() => {
    axios({
      method: 'get',
      url: process.env.REACT_APP_SET_APPOINTMENT,
      data: {
        
      },
      headers: {
        token: 'Bearer' + localStorage.getItem('token')
      }
    }).then(res => setSelleres(res.data))
  }, [])

  return (
    <div>
      <Row>
        {sellers.map(seller => <Col xs={3} ><SellerCard seller={seller} /> </Col>)}
      </Row>
    </div>
  )
}
