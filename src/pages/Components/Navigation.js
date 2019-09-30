import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Layout/Header';
import HeaderPerso from './Layout/HeaderPerso';
import HeaderPaiement from './Layout/HeaderPaiement';
import Footer from './Layout/Footer';
import {Provider} from 'react-redux';  // importation du provider

import HomePage from './Pages/HomePage';

import Mentions from './Pages/Mentions';
import Cgv from './Pages/Cgv';
import ChoixLivre from './Pages/ChoixLivre';
import Personnalisation from './Pages/Personnalisation';
import Achat from './Pages/Achat';
import Paiement from './Pages/Paiement';
import Checkout from './Pages/Checkout';

class Navigation extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={Header}/>
          <Route exact path='/Creer' component={Header}/>
          <Route exact path='/mentions' component={Header}/>
          <Route exact path='/confidentialite' component={Header}/>
          <Route exact path='/CGV' component={Header}/>
          <Route exact path='/Achat' component={Header}/>
          <Route exact path='/Checkout' component={Header} />
          <Route exact path='/Paiement' component={HeaderPaiement} />
          <Route path='/Personnalisation' component={HeaderPerso}/>

          <Route exact path='/' component={HomePage}/>
          <Route exact path='/Creer' component={ChoixLivre} />
          <Route exact path='/Personnalisation' component={Personnalisation} />
          <Route exact path='/Achat' component={Achat} />
          <Route exact path='/Checkout' component={Checkout} />
          <Route exact path='/Mentions' component={Mentions} />
          <Route exact path='/Paiement' component={Paiement} />
          <Route exact path='/CGV' component={Cgv}/>

          <Footer />

      </Router>
    );
  }
}


function mapStateToProps(state) {
  return { shop: state.shop }
}

export default connect(
    mapStateToProps,
    null
)(Navigation);
