import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/img_406278.ico';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { LoginIcon, LogoutIcon } from '@heroicons/react/solid'

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = ()=>{
    signOut(auth);
  }

  
    return (
        <>
       <Navbar sticky="top" collapseOnSelect expand="lg" bg="secondary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="home#carparts">Car Parts</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
      {
        user && <>
        <Nav.Link as={Link} to="manageInventory">Manage Inventory</Nav.Link>
        <Nav.Link as={Link} to="addInventory">Add Items</Nav.Link>
        <Nav.Link as={Link} to="order">My Items</Nav.Link>
        </>
      }
    
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>
     { 
       user ?
        <div>
          
          <button onClick={handleSignOut}  className='btn btn-secondary'>SignOut <LogoutIcon style={{height: '24px'}}></LogoutIcon></button>
        
        </div>
    : 
    <Nav.Link as={Link} to="login">
        Login
        <LoginIcon style={{height: '24px'}}></LoginIcon>
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
};

export default Header;