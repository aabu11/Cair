import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useSelector } from "react-redux";

function Nav() {
  return (
   
   
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>



      {/* <nav class="navbar navbar-inverse">    
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              CairTEst
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                ABOUT US <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                <Link className="navLink" to="/user">
              Mission and Vision
            </Link>
                </li>
                <li>
                <Link className="navLink" to="/user">
              Our Staff
            </Link>
                </li>
                <li>
                <Link className="navLink" to="/user">
              What they Say About Cair
            </Link>
                </li>
                <li>
                <Link className="navLink" to="/user">
              Awards
            </Link>                
            </li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                CONTACT US <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link className="navLink" to="/user">
                  Request Training/Presentation
            </Link>  
                </li>
                <li>
                  <Link className="navLink" to="/user">
                  Volunteer
            </Link>
                </li>
                <li>
                  <a href="#">What they say about Cair</a>
                  
                </li>
                <li>
                  <a href="#">Awards</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">RAMADAN</a>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                DONATE <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link className="navLink" to="/user">
                  Donate 
            </Link>
                </li>
                <li>
                  <Link className="navLink" to="/user">
                  Cair is Zakat Eligible
            </Link>
                </li>
                <li>
                  <Link className="navLink" to="/user">
                  Employer Matching
            </Link>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                YOUR RIGHTS <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  
                  <Link className="navLink" to="/user">
                  Know Your Rights
            </Link>
                </li>
                <li>
                  
                  <Link className="navLink" to="/user">
                  Report an Incident
            </Link>
                </li>
                <li>
                  
                  <Link className="navLink" to="/user">
                  Request Traininging
            </Link>
                </li>
                <li>
                  <Link className="navLink" to="/user">
                  Free Legal Clinic
            </Link>
                </li>
                <li>
                  <a href="#">Challenging Islamophobia</a>
                  <Link className="navLink" to="/user">
                  Challenging Islamophobia
            </Link>
                </li>
                <li>
                  <Link className="navLink" to="/user">
                  Countering Violence Extremism
            </Link>
                </li>
                <li>
                  <Link className="navLink" to="/user">
                  The Muslim Ban -- Know Your Rights
            </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div> */}
     </nav>
  );

}

export default Nav;
