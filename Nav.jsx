import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
           <nav class="navbar navbar-expand-lg bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Employee </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active"  aria-current="page" to="/add">Add Employee</Link>
              <Link class="nav-link active"  aria-current="page" to="/view">View Employee</Link>
              <Link class="nav-link active"  aria-current="page" to="/search">Search Employee</Link>
              <Link class="nav-link active"  aria-current="page" to="/delete">Delete Employee</Link>
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav