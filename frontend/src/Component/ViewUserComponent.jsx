import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import UserService from '../services/UserService'
import DashboardFooter from './DashboardFooter'
import DashboardHeader from './DashboardHeader'
import Logo from '../img/logo45.png'

export default class ViewUserComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id : 1,
      user: {}
    }
  }

  
  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data })
    })
  }

  render() {
    return (
      <>
        <DashboardHeader />
        <Card centered className='text-center'>
          <Image src={Logo} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.state.user.name + " " + this.state.user.surname}</Card.Header>
            <Card.Meta>
              <span></span>
            </Card.Meta>
            <Card.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, est eligendi! Maxime nesciunt minima soluta ea atque amet dolores dignissimos, assumenda, ipsa esse in ut recusandae distinctio nihil illo. Quia.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Icon name='mail outline'/>
              {this.state.user.mail}
          </Card.Content>
        </Card>
        <DashboardFooter />
      </>
    )
  }
}
