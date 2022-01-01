import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import RequestCard from './RequestCard'
export default function SellerHome() {
  const [requests, setRequests] = useState()
  const [appointments, setAppointments] = useState()

  useEffect(() => {
    axios({
      method: 'get',
      url: process.env.REACT_APP_REQUESTS_URL,
      data: {},
      headers: {
        token: 'Bearer' + localStorage.getItem('token')
      }
    }).then(res => setRequests(res.data));

    axios({
      method: 'get',
      url: process.env.REACT_APP_APPOINTMENTS_URL,
      data: {},
      headers: {
        token: 'Bearer' + localStorage.getItem('token')
      }
    }).then(res => setAppointments(res.data));

  }, [])

  return (
    <div>
      <p>Requests</p>
      <Row>
        {requests.map(request => <Col xs={3}><RequestCard request={request} /></Col>)}
      </Row>
      <p>Appointments</p>
      <Row>
        {appointments.map(appointment => <Col xs={3}><RequestCard appointment={appointment} /></Col>)}
      </Row>
    </div>
  )
}
