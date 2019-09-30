import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Apropos extends Component {
  render(){
  return(
    <div>
      <h1> A Propos de ce livre </h1>
      <p> Un super livre créé pour les enfants </p>
    </div>
  )
}
}

function mapStateToProps(state) {
  return { shop: state.shop }
}

export default connect(
    mapStateToProps,
    null
)(Apropos);
