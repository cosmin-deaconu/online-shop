import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { Link } from 'react-router-dom';
import { ReactComponent as EmptyHeart } from '../assets/icons/empty-heart.svg';
import { ReactComponent as LoveHeart } from '../assets/icons/love-heart.svg';

const ProductItem = (props) => {
    const {name, price, currency, image, id} = props;

    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
                <button 
                    className="ml-auto mb-2 btn btn btn-link"
                    onClick={(event) => asdfasfa(event)}
                >
                    <EmptyHeart className="mr-2"/>
                </button>
            <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
        </div>
    );
}

function asdfasfa(event){
    console.log('asfasfa', event)
} 

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product))
    };
}

export default connect(null, mapDispatchToProps)(ProductItem);