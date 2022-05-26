import React, { Component } from 'react'
import ListUserComponent from '../component/ListUserComponent'
import { Row, Col } from 'reactstrap'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <br /><br />
        <div className='container'>
          <Row>
            <Col md="12"><ListUserComponent /></Col>
          </Row>
        </div>
      </>
    )
  }
}