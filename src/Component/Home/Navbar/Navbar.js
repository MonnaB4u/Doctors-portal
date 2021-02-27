import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-md navbar-light bg-faded">
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="navbar-toggler-icon"></span>
     </button>
     <div class="w-100">
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
          <a class="nav-link mr-5 active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5" href="#">Dental Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5" style={{'color':"white"}} href="#">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5" style={{'color':"white"}} href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5" style={{'color':"white"}} href="#">Contact Us</a>
        </li>
            </ul>
        </div>
     </div>
 </nav>
        </div>
    );
};

export default Navbar;