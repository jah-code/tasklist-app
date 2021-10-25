import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { signIn } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
     state = {
        email: '',
        password: ''
    }

    handleLoginChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.signIn(this.state)
    }
    
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/'/>

        return (
            <div className="container container-login">
                <div className="login-box z-depth-2">
                    <div className="login-title">Login</div>
                    <form action="" onSubmit={this.handleLoginSubmit} className="form-login">
                        <div className="input-field login-input-field">
                            <input type="text" className="validate" 
                                id="email" placeholder="Email" onChange={this.handleLoginChange}/>
                        </div>
                        <div className="input-field login-input-field">
                            <input type="text" className="validate" 
                                id="password" placeholder="Password" onChange={this.handleLoginChange}/>
                        </div>
                        <div className="col s12 m2">
                            <button className="btn blue accent-2 waves-effect waves-light col s12 btn-login" type="submit" name="action">
                                Login
                            </button>
                            <div className="red-text center">
                                { authError ? <span>{authError}</span> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
