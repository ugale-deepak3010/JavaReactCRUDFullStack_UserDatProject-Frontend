import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import AddUser from '../Users/AddUser'

export default function Navbar() {
  return (
    <div>
<nav className="navbar navbar-dark navbar-expand-lg  bg-body-tertiary ">
  <div className="container-fluid bg-primary">
    <a className="navbar-brand" href="#">Full Stack Application</a>
    <Link className="btn  btn-outline-light" to="/adduser" >Add User</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
</nav>
    </div>
  )
}
