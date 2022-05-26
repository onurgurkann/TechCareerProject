import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../img/logo110.png'
import Instagram from '../img/instagram.png'
import Twitter from '../img/twitter.png'
import LinkedIn from '../img/linkedin.png'

export default class FooterComponent extends Component {
    render() {
        return (
            <>
                <Navbar fixed='bottom' collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <Link to="">
                                <img width="110px" height="auto" className="img-responsive" src={Logo} alt="logo" />
                            </Link>
                        </Navbar.Brand>
                        <Nav>
                            <Navbar.Text>
                                <small>Onur Gürkan 2022. Tüm Hakları Saklıdır. </small>
                            </Navbar.Text>
                        </Nav>
                        <Nav>
                            <Nav.Link href='https://www.instagram.com/onurgurkann_/' target="_blank">
                                <img width="20px" height="auto" className="img-responsive" src={Instagram} alt="instagram" />
                            </Nav.Link>
                            <Nav.Link href='https://twitter.com/onurgurkann_' target="_blank">
                                <img width="20px" height="auto" className="img-responsive" src={Twitter} alt="instagram" />
                            </Nav.Link>
                            <Nav.Link href='https://www.linkedin.com/in/onurgurkann/' target="_blank">
                                <img width="20px" height="auto" className="img-responsive" src={LinkedIn} alt="instagram" />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}