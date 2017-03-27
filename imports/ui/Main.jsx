import React from 'react';

import Login from './Login.jsx';
import NavBar from './NavBar.jsx';
export default class Main extends React.Component{
  render(){
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <NavBar/>
          </div>
        </div>
        <div className='row'>
          <div className='col s4'>
            <Login/>
        </div>
          <div className='col s8'>
               <img className='responsive-img' src="https://i.ytimg.com/vi/Y4lJ1iEWxeQ/maxresdefault.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}
