import React, { Component } from 'react'
import DashboardHeader from '../component/DashboardHeader'
import DashboardFooter from '../component/DashboardFooter'
//import { Grid, Item, Menu } from 'semantic-ui-react'
import ListUserComponent from '../component/ListUserComponent'
//import { ButtonGroup } from 'react-bootstrap'
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <DashboardHeader />
        <br /><br />
        <div className='container'>
          <Row>
            <Col xs="3">
              <Row>
                <Col>
                  <ListGroup>
                    <ListGroupItem action="#">
                      Kullanıcı
                    </ListGroupItem>
                  </ListGroup>
                  </Col>
                <Col></Col>
              </Row>
            </Col>
            <Col xs="9"><ListUserComponent /></Col>
          </Row>
          {/* <Grid divided='vertically'>
            <Grid.Row>
              <Grid.Column width={4} className="text-center">
                <Menu pointing vertical>
                  <Menu.Item name="user">Kullanıcı</Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column width={12}>
                <ListUserComponent/>
              </Grid.Column>
            </Grid.Row>
          </Grid> */}
        </div>
        <DashboardFooter />
      </>
    )
  }
}