import React, { Component } from 'react'
import DashboardHeader from '../component/DashboardHeader'
import DashboardFooter from '../component/DashboardFooter'
import { Grid, Menu } from 'semantic-ui-react'
import ListUserComponent from '../component/ListUserComponent'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <DashboardHeader />
        <br/><br/>
        <div className='container'>
          <Grid divided='vertically'>
            <Grid.Row Column={2}>
              <Grid.Column width={4}>
                <Menu pointing vertical>
                  <Menu.Item name="admin">Yönetici</Menu.Item>
                  <Menu.Item name="user">Kullanıcı</Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column width={12}>
                <ListUserComponent/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <DashboardFooter />
      </>
    )
  }
}
