import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../img/logo110.png'

export default function DashboardFooter() {
    return (
        <>
            <footer>
                <Navbar fixed='bottom' collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand>
                            <Link to="">
                                <img width="110px" height="auto" className="img-responsive" src={Logo} alt="logo" />
                            </Link>
                        </Navbar.Brand>
                        <Nav>
                            <Navbar.Text>
                                <small> Copyright &copy; Onur Gürkan 2022. Tüm Hakları Saklıdır. </small>
                            </Navbar.Text>
                        </Nav>
                    </Container>
                </Navbar>
            </footer>
        </>
    )
}
