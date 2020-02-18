import React from 'react';
import { Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';

function NavTop() {

  return(
    <div className="NavTop">
    <style jsx>{`
      .NavTop {
        height: 47px;
        background-color: rgb(150,50,50);
        margin: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
      `}
      </style>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Blueddit</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Trending</Nav.Link>
        <Nav.Link href="#pricing">New</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    </div>
  );
}

export default NavTop;
