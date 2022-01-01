import axios from 'axios';
import React from 'react';
import { Card, Button } from "react-bootstrap";
import jwt from 'jsonwebtoken';
export default function SellerCard(props) {

  let user = jwt.decode(localStorage.getItem('token'));


  const sendReq = () => {
    axios({
      method: 'post',
      url: process.env.REACT_APP_SEND_REQUEST,
      data: {
        Buyer: user._id,
        BuyerName: user.name,
        Seller: props._id
      },
      headers: {
        token: 'Bearer' + localStorage.getItem('token')
      }
    });
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Button variant="primary" onClick={() => sendReq()}>Request Appointment</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
