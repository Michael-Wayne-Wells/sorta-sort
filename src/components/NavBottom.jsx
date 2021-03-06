import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

function NavBottom() {
  const navBottomStyle = {
    height: '80px',
    marginTop: '-14px',
  }
    return(
      <div style={navBottomStyle}>
      <Navbar bg="light" variant="light">
     <Nav className="mr-auto">
       <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#features">Features</Nav.Link>
       <Nav.Link href="#pricing">Pricing</Nav.Link>
     </Nav>

   </Navbar>
      </div>
    );
}

export default NavBottom;
