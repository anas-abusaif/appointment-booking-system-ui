import React from 'react'
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { Card, Button } from "react-bootstrap";

export default function RequestCard(props) {

  let user = jwt.decode(localStorage.getItem('token'));

  const setAppointment=()=>{
    axios({
      method: 'post',
      url: process.env.REACT_APP_SET_APPOINTMENT,
      data: {
        Buyer: props.Buyer,
        BuyerName:props.BuyerName,
        Seller: user._id
      },
      headers: {
        token: 'Bearer' + localStorage.getItem('token')
      }
    });
  }
  
  const reject=()=>{
    axios({
      method: 'delete',
      url: process.env.REACT_APP_DELETE_REQUEST,
      data: {
        _id:props._id
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
          <Card.Title>{props.BuyerName}</Card.Title>

          <Button variant="primary" onClick={() => setAppointment()}>Accept</Button>
          <Button variant="danger" onClick={() => reject()}>Reject</Button>

        </Card.Body>
      </Card>
    </div>
  )
}
