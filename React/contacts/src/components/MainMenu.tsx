import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';

export const MainMenu = () =>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/"><h1>Книга контактов</h1></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/groups">Группы</Nav.Link>
                <Nav.Link as={Link} to="/favorite">Избранное</Nav.Link>
            </Nav>
        </Container>
    </Navbar>;

