import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <>  
     <nav className="navbar navbar-expand-lg  w-100 py-0 ">
    <div className="container-fluid justify-content-between">
    
      <div className="navbar-brand d-flex align-items-center ms-5">
        <i className='fa-solid fa-laptop-code'></i>
        <h5 className="mt-2 ms-2">PORTOFOLIO</h5>
      </div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse links navbar-collapse justify-content-end me-5 " id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <a className="nav-link link"  href='#about'>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" href='#skills'>Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" href='#projs'>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link" href='#footer'>Contact</a>
          </li>

        </ul>

          
      </div>
    </div>

  </nav>

 
  </>
  )
}
