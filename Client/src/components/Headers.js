import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="info">
        <Container>
          <NavLink to="/" className=" text-light text-decoration-none"> <img src="/logo192.png" style={{width:50}} alt="" /></NavLink>
          <Nav className="">
          <NavLink to="/" className="mt-3 mx-3 text-light text-decoration-none">LogIn</NavLink>
          <NavLink to="/register" className="mt-3 mx-3 text-light text-decoration-none">Register</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers