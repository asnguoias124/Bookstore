import React from 'react'
import './StickyHeader.scss'
import { Nav,
         Navbar,
         Container,
         NavDropdown,
} from 'react-bootstrap'
function StickyHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className='StickyNavbar'>
    <Container>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
          <NavDropdown title="Chọn tủ sách" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default StickyHeader