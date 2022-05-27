import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { Label } from 'reactstrap';
import AuthService from "../services/AuthService";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate replace to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
          <div className='row'>
            <div className='card col-md-6 offset-md-3'><br />
              <div className='text-center bg-light'><h3>Profil Bilgileri</h3></div>
              <div className='card-body'>
                <Label><strong>ID :</strong> {currentUser.id}</Label>
                <Label><strong>Ad :</strong>{currentUser.name}</Label>
                <Label><strong>Soyad :</strong> {currentUser.surname}</Label>
                <Label><strong>Kullanıcı Adı :</strong> {currentUser.username}</Label>
                <Label><strong>E-Mail :</strong> {currentUser.email}</Label>
                <Label><strong>Rol : </strong>
                  <ul>
                    {currentUser.roles &&
                      currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                  </ul>
                </Label>

                
                { // Token
                
                /* <Label>
                  <strong>Token:</strong>{" "}
                  {currentUser.token.substring(0, 20)} ...{" "}
                  {currentUser.token.substr(currentUser.token.length - 20)}
                </Label> */}
              </div>
            </div>
          </div> : null}
      </div>
    );
  }
}
