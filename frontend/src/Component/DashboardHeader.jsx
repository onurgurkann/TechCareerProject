import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../src/img/logo110.png'

export default class DashboardHeader extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand >
                            <Link to="/dashboard">
                                <img width="110px" height="auto" className="img-responsive" src={Logo} alt="logo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/dashboard">Admin Panel</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
