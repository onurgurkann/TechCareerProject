import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import UserService from '../services/UserService'
import DashboardFooter from './DashboardFooter'
import DashboardHeader from './DashboardHeader'
import Logo from '../img/logo45.png'
import { useParams } from 'react-router-dom'

class ViewUserComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const {id} = this.props.params;
    UserService.getUserById(id).then((res) => {
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
            <Card.Header>Ad : {this.state.user.name}</Card.Header>
            <Card.Header>Soyad : {this.state.user.surname}</Card.Header><br/>
            <Card.Meta>
              <span>Kullanıcı Adı : {this.state.user.username}</span>
            </Card.Meta>
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

export default (props) => (
  <ViewUserComponent
  {...props}
  params = {useParams()}
  />
);
