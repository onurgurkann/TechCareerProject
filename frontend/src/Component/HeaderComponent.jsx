import React, { Component } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../src/img/logo110.png'

export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand >
                            <Link to="home">
                                <img width="110px" height="auto" className="img-responsive" src={Logo} alt="logo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="home">Ana Sayfa</Nav.Link>
                                <Nav.Link href="about">Hakkında</Nav.Link>
                                <Nav.Link href="experience">Deneyim</Nav.Link>
                                <Nav.Link href="ability">Yetenekler</Nav.Link>
                                <Nav.Link href="education">Eğitim</Nav.Link>
                                <Nav.Link href="contact">İletişim</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="register"><Button>Kayıt Ol</Button></Nav.Link>
                                <Nav.Link href="login"><Button>Giriş Yap</Button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}