import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
     <div className ="navDiv">
       <h1> Links for reference: </h1>
        <nav>
          <ul>
           <li> <a href ="https://www.mindtools.com/">Essential skills for career</a></li>
           <li> <a href ="https://knowngrow.co.in/"> Know and Grow </a></li>
           <li> <a href="https://www.edx.org/professional-certificate/ritx-soft-skills"> Test your skills </a></li>
          </ul>
        </nav> 

     </div>     
    );
  }
}

export default Navbar;
