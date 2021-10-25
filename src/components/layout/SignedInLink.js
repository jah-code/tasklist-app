import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'

function SignedInLink(props) {
    return (
        <ul className="right">
            <li><a onClick={props.signOut}>Log Out</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLink)
