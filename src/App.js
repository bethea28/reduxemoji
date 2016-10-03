import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import ItemPage from './components/ItemPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LookBookPage from './components/LookBookPage';
import SalePage from './components/SalePage';
import ShopPage from './components/ShopPage';
import NavBar from './components/NavBar';

var App = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <Header />
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="lookbook" component={LookBookPage} />
        <Route path="brand" component={BrandStory} />
        <Route path="sale" component={SalePage} />
        <Route path="shop" component={ShopPage} />
        <Route path="item" component={ItemPage} />
      </Route>
    </Router>,
  document.getElementById('root')
);
