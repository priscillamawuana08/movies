import React, { Component } from 'react';
import './Registration.css'; 

class Registration extends Component {
  render() {
    return (
      
       <form className='boxx' method='Post' action='' target='_blank'>
          <div className='all'>
                <p className='p'>
                <h2>Register</h2>
                </p>
                <div className='fname'>
                    <label htmlFor="fname">Firstname:</label>
                    <input type="text" id="fname" name="fname" required="required"/>
                </div>
                <div className='lname'>
                    <label htmlFor="Lname">Lastname:</label>
                    <input type="text" id="lname" name="lname" required="required"/>
                </div>
                <div className='email'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required="required"/>
                </div>
                <div className='Uname'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required="required"/>
                </div>
                <div className='Pword'>
                    <label htmlFor="pword">Password:</label>
                    <input type="password" id="pword" name="pword" required="required"/>
                </div>
                {/* <div className='register'>  */}
                    <button type='submit' id="btn">Register</button>
                {/* </div> */}
          </div>
        
        </form>
         
      
    );
  }
}

export default Registration;
