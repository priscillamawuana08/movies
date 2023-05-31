import React, { Component } from 'react';
import './Login.css'; 

class Login extends Component {
   handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  render() {
    return (
      
        <form className='box' method='Get' action='' target='_blank'>
        <div className='all'>
          <p className='p'>
            <h2>Login</h2>
          </p>
        <div className='Uname'>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required="required"/>
        </div>
        <div className='Pword'>
          <label htmlFor="pword">Password:</label>
          <input type="password" id="pword" name="pword" required="required"/>
        </div>
        <div className='login'> 
          <button type='submit' id="Btn">Login</button>
        </div>
        </div>
      
      </form>
      
    );
  }
}

export default Login;
