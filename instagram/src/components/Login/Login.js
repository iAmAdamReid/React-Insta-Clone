import React from 'react';
import './Login.css';
import styled from 'styled-components';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    setUsername = event => {
        this.setState({username: event.target.value});
    }

    setPassword = event => {
        this.setState({password: event.target.value});
    }

    loginAttempt = () => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        window.location.reload();
    }

    

    render(){

        

        return(
<div>
            <div className = 'login-container'>
            <form onSubmit={this.loginAttempt}>
            <h1>Instagram Clone</h1>
            <input type='text' value={this.state.username} onChange={this.setUsername} placeholder='Username'></input>
                <input type='password' value={this.state.password} onChange = {this.setPassword} placeholder='Password'></input>
                <button type='submit'>Login</button>
            </form>

            </div>
            </div>
        )
    }
}
export default Login;