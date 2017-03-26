import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      modeRegister:false,
    }
  }
  handleSubmit(event){
     event.preventDefault();
     const username=ReactDOM.findDOMNode(this.refs.username).value.trim();
     if(this.state.modeRegister){
       const email=ReactDOM.findDOMNode(this.refs.email).value.trim();
     }
     const password=ReactDOM.findDOMNode(this.refs.password).value.trim();
     if(this.state.modeRegister){
       Accounts.createUser({
         username:username,
         email:email,
         password:password,
       });
       FlowRouter.go('/RegisterComplete');
     }else{
       Meteor.loginWithPassword(username,password);
       FlowRouter.go('/LoginComplete');
     }
  }
  toggleMode(){
    this.setState({
      modeRegister:!this.state.modeRegister,
    });
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="section indigo">
            <h6 className="center">{this.state.modeRegister?('Registro'):('Login')}</h6>
          </div>
        </div>
        <div className="row">
          <div className="section white">
            <div className="row">
              <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                  <div className="input-field col s12">
                    <input placeholder="Username" ref='username' id="username" type="text" className="validate"/>
                  <label htmlFor="username">Username</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" ref='password' type="password" className="validate"/>
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                {
                  this.state.modeRegister?
                  (
                    <div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" ref='email' type="email" className="validate"/>
                          <label htmlFor="email">Email</label>
                      </div>
                      </div>
                      <button className="btn waves-effect waves-light" type="submit">Registrar
                        <em className="material-icons right"></em>
                      </button>
                      <a id='change' onClick={this.toggleMode.bind(this)}>Login
                        <em className="material-icons right"></em>
                      </a>
                  </div>
                  ):(
                    <div>
                      <button className="btn waves-effect waves-light" type="submit">Login
                        <em className="material-icons right"></em>
                      </button>
                      <a id='change' onClick={this.toggleMode.bind(this)}>Registrar
                        <em className="material-icons right"></em>
                      </a>
                    </div>
                  )
                }


              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
