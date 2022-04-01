import React from "react";
function Navbar()
{
    return(
        <>
             <nav className="navbar navbar-expand-sm" style={{backgroundColor:"black"}}>
    <img src="https://www.airforce.gov.au/sites/default/files/raaf-co-branding-logo_0.png"></img>

<div className="container-fluid">
  
  <ul className="navbar-nav">
    <li classNname="nav-item">
      <a className="nav-link" style={{color:"white"}} href="#">AF 100</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={{color:"white"}} href="#">About us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={{color:"white"}} href="#">Operations</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={{color:"white"}} href="#">Our Mission</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={{color:"white"}} href="#">Our people</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={{color:"white"}} href="#">Technology</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={{color:"white"}} href="#">News and events</a>
    </li>
  </ul>
</div>

</nav>
        
        </>
    );
}
export default Navbar;