import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/user/UserAction';
import { ReactComponent as EmptyHeart } from '../../assets/icons/empty-heart.svg';

const Header = (props) => {
    getProductsNumber(props);
    const {user, signOut, favoritesList } = props;
    return(
        <header className="border-bottom mb-1">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-1">
                    <img src={Logo} alt="Echo Shop" className="logo"/>
                </Link>
                <div>
                    { user
                        ? <p>Salut, {user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { user
                            ? <p className="logout h5" onClick={() => signOut()}>Delogare</p>
                            : <Link to="/login" className="text-dark h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/favorites" className="d-flex mr-5 ml-5">
                                <EmptyHeart className="ml-2" />
                                <p className="ml-1 mb-0 text-dark">{ favoritesList.length }</p>
                            </Link>
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2"/>
                                <p className="ml-1 mb-0 text-dark">{ getProductsNumber(props) }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function getProductsNumber(props){
    const { productsList } = props;
    let numberOfProducts = 0;
    productsList.map((product) => {
        numberOfProducts += product['quantity'];
    })
    return numberOfProducts;
}

function mapStateToProps(state) {
    return {
        productsList: state.cart.products,
        favoritesList: state.favorites.products,
        user: state.user.data.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);