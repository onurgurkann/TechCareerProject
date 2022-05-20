import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import UserService from '../services/UserService';
import DashboardFooter from './DashboardFooter';
import DashboardHeader from './DashboardHeader';

class UpdateUserComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      surname: '',
      username: '',
      mail: '',
      password: '',
      roles: ['']
    }

    this.cancel = this.cancel.bind(this);
    this.change = this.change.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeSurname = this.changeSurname.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeMail = this.changeMail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.params;
    UserService.getUserById(id).then((res) => {
      let user = res.data;
      this.setState({
        name: user.name,
        surname: user.surname,
        username: user.username,
        mail: user.mail,
        password: '',
        roles: user.roles
      });
    });
  }

  updateUser = (e) => {
    e.preventDefault();
    const { id } = this.props.params;
    var role = [this.state.roles];
    let user = { name: this.state.name, surname: this.state.surname, username: this.state.username, mail: this.state.mail, password: this.state.password, roles: role };
    console.log('user = >' + JSON.stringify(user));
    console.log('id => ' + JSON.stringify(id))

    UserService.updateUser(id, user).then(res => {
      this.props.navigate('/dashboard');
    })

  }

  cancel() {
    this.props.navigate('/dashboard')
  }

  changeName = (event) => {
    this.setState({ name: event.target.value })
  }

  changeSurname = (event) => {
    this.setState({ surname: event.target.value })
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  changeMail = (event) => {
    this.setState({ mail: event.target.value })
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  change = (event) => {
    this.setState({ roles: event.target.value });
  }

  render() {
    return (
      <>
        <DashboardHeader />
        <br />
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3'><br />
              <div className='text-center bg-light'><h3>Güncelleme</h3></div>
              <div className='card-body'>
                <Form>
                  <FormGroup>
                    <Label>Ad</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ad"
                      type="text"
                      value={this.state.name}
                      onChange={this.changeName} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Soyad</Label>
                    <Input
                      id="surname"
                      name="surname"
                      placeholder="Soyad"
                      type="text"
                      value={this.state.surname}
                      onChange={this.changeSurname} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Kullanıcı Adı</Label>
                    <Input
                      id="username"
                      name="username"
                      placeholder="Kullanıcı Adı"
                      type="text"
                      value={this.state.username}
                      onChange={this.changeUsername} />
                  </FormGroup>

                  <FormGroup>
                    <Label>E-Mail</Label>
                    <Input
                      id="mail"
                      name="mail"
                      placeholder="E-Mail Adresi"
                      type="email"
                      value={this.state.mail}
                      onChange={this.changeMail} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Parola</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Parola"
                      type="password"
                      value={this.state.password}
                      onChange={this.changePassword} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Rol</Label>
                    <Input
                      id="role"
                      name="role"
                      type="select" onChange={this.change} value={this.state.roles}>
                      <option>Seç...</option>
                      <option value="user">Kullanıcı</option>
                      <option value="admin">Yönetici</option>
                    </Input>
                  </FormGroup>
                  <Button className='btn btn-success' onClick={this.updateUser}>Güncelle</Button>
                  <Button style={{ marginLeft: "2%" }} className='btn btn-danger' onClick={this.cancel}>İptal</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </>
    )
  }
}

export default (props) => (
  <UpdateUserComponent
    {...props}
    params={useParams()}

    navigate={useNavigate()}
    {...props}
  />
);