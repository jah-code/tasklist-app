import React, { Component } from 'react'
import './style.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class SignUp extends Component {
     state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleLoginChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="container">
                <form action="" onSubmit={this.handleLoginSubmit} className="form form-signup">
                    <h5>Sign Up</h5>
                        <TextField fullWidth
                            id="email"
                            label="Email"
                            type="email"
                            variant="standard"
                            onChange={this.handleLoginChange}
                        />
                        <TextField fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            variant="standard"
                            onChange={this.handleLoginChange}
                        />
                        <TextField fullWidth
                            id="firstName"
                            label="First Name"
                            type="text"
                            variant="standard"
                            onChange={this.handleLoginChange}
                        />
                        <TextField fullWidth
                            id="lastName"
                            label="Last Name"
                            type="text"
                            variant="standard"
                            onChange={this.handleLoginChange}
                        />
                        <Button variant="contained" className="form-btn" type="submit">Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp
