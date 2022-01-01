import React from 'react'

import { Card } from "react-bootstrap";

export default function AppointmentCard(props) {

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.BuyerName}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}
