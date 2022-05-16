import React, { Component } from 'react'
import DashboardHeader from '../component/DashboardHeader'
import DashboardFooter from '../component/DashboardFooter'
import { Grid, Menu } from 'semantic-ui-react'

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
                  <Menu.Item name='Admin'/>
                  <Menu.Item name='Users'/>
                </Menu>
              </Grid.Column>
              <Grid.Column width={12}>
                List
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <DashboardFooter />
      </>
    )
  }
}
