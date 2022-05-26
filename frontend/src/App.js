import React, { Component } from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';

import './App.css';
import Dashboard from './page/Dashboard';
import Home from './page/Home';
import AddUserComponent from './component/AddUserComponent';
import ViewUserComponent from './component/ViewUserComponent';
import UpdateUserComponent from './component/UpdateUserComponent';
import NotFound from './component/NotFound';
import Login from './page/Login';
import Register from './page/Register';
import Profile from './page/Profile';

import AuthService from './services/AuthService';
import EventBus from './common/EventBus';
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from '../src/img/logo110.png'
import FooterComponent from './component/FooterComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      currentUser: undefined
    });
  }


  render() {

    const { currentUser } = this.state;

    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >
              <Link to="/">
                <img width="110px" height="auto" className="img-responsive" src={Logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Ana Sayfa</Nav.Link>
                {/* <Nav.Link href="about">Hakkında</Nav.Link>
                <Nav.Link href="experience">Deneyim</Nav.Link>
                <Nav.Link href="ability">Yetenekler</Nav.Link>
                <Nav.Link href="education">Eğitim</Nav.Link>
                <Nav.Link href="contact">İletişim</Nav.Link> */}
              </Nav>
              <Nav>
                {currentUser ? (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/profile"} className="nav-link">
                        {currentUser.username}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/login" className="nav-link" onClick={this.logOut}>
                        Çıkış
                      </a>
                    </li>
                  </div>
                ) : (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                        Giriş Yap
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/register"} className="nav-link">
                        Kayıt Ol
                      </Link>
                    </li>
                  </div>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='*' element={<Navigate replace to="/404" />} />
          <Route path='/404' element={<NotFound />} />

          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/add-user/_add' element={<AddUserComponent />} />
          <Route path='/dashboard/view-user/:id' element={<ViewUserComponent />} />
          <Route path='/dashboard/update-user/:id' element={<UpdateUserComponent />} />
        </Routes>
        <FooterComponent />
      </div>
    );
  }

}

export default App;