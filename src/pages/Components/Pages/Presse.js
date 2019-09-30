import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Presse extends Component {
  render(){
  return(
    <div>
      <h1>Lien Presse</h1>
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
)(Presse);
