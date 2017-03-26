import React from 'react';

export default class NavBar extends React.Component{
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right"><img className="responsive-img" src="./img/MadokaLogo.png"/></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Home</a></li>
              <li><a href="badges.html">About</a></li>
              <li><a href="collapsible.html">More</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}
