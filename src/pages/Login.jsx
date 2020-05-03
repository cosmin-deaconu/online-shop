import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import './Login.css'
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/user';

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        const { signInWithGoogle, signInWitFacebook } = this.props;
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center mb-3"
                    onClick={() => signInWithGoogle()}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => signInWitFacebook()}
                >
                    <Facebook className="w-50 mr-0"/>
                    <span className="text-nowrap">Loghează-te cu Facebook</span>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.data.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInWithGoogle: () => dispatch(loginUser("GOOGLE")),
        signInWitFacebook: () => dispatch(loginUser("FACEBOOK"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);