import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import UserService from '../services/UserService';

class AddUserComponent extends Component {
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
    this.saveUser = this.saveUser.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.params;
    if (id === '_add') {
      return
    } else {
      UserService.getUserById(id).then((res) => {
        let user = res.data;
        this.state({
          name: user.name,
          surname: user.surname,
          username: user.username,
          mail: user.mail,
          password: user.password,
          roles: user.roles
        });
      });
    }
  }

  saveUser = (e) => {
    e.preventDefault();
    let user = {name: this.state.name, surname: this.state.surname, username: this.state.username, mail: this.state.mail, password: this.state.password, roles: this.state.roles};
    console.log('user = >' + JSON.stringify(user));

    UserService.createUser(user).then(res => {
       this.props.navigate('/dashboard')
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

  change() {
    return document.querySelector('#role').value;
  }

  render() {
    return (
      <>
        <br /><br /><br />
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3'><br />
              <h3 className='text-center'>Ekleme</h3>
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
                      type="select">
                      <option value="user" onChange={this.change}>Kullanıcı</option>
                      <option value="admin" onChange={this.change}>Yönetici</option>
                    </Input>
                  </FormGroup>
                  <Button className='btn btn-success' onClick={this.saveUser}>Kaydet</Button>
                  <Button style={{ marginLeft: "2%" }} className='btn btn-danger' onClick={this.cancel}>İptal</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default (props) => (
  <AddUserComponent
    {...props}
    params={useParams()}
    
    navigate = {useNavigate()}
    {...props}
  />
);
