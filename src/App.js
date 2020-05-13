import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/Cart';
import './utils/utility-classes.css';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import Favorites from './pages/Favorites';
import TermsAndConditions from './pages/TermsAndConditions'

function App() {
  return(
    <div className="app">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/about" component={About}/>
        <Route path="/terms-and-conditions" component={TermsAndConditions}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/category/:categoryName" component={Category}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
