import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLink';
import { connect } from 'react-redux'

function Navbar({auth}) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper white z-depth-2">
                    <div className="container">
                        <Link to="/">
                        <div className="btn btn-floating btn-avatar">
                            <img src="images/yuna.jpg" className="responsive-img"
                                alt="yuna"/>
                        </div>&nbsp;&nbsp;
                        <span>Lijah</span>
                        </Link>
                        <SignedInLink/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}


export default connect(mapStateToProps)(Navbar)
