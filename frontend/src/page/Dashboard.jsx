import React, { Component } from 'react'
import DashboardHeader from '../component/DashboardHeader'
import DashboardFooter from '../component/DashboardFooter'
import ListUserComponent from '../component/ListUserComponent'
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <DashboardHeader />
        <br /><br />
        <div className='container'>
          <Row>
            <Col md="3">
              <Row>
                <Col>
                  <ListGroup>
                    <ListGroupItem action="#">
                      Yönetici
                    </ListGroupItem>
                    <ListGroupItem action="#">
                      Kullanıcı
                    </ListGroupItem>
                  </ListGroup>
                  </Col>
                <Col></Col>
              </Row>
            </Col>
            <Col md="9"><ListUserComponent /></Col>
          </Row>
        </div>
        <DashboardFooter />
      </>
    )
  }
}