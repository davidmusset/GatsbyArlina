import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  COmponentDidMount = () => {
    this.props.deletePanier()
  }

  render(){

  return(
    <div className = "PageAchatGlobal">
      <p className = "Title_1"> Merci pour votre Achat !  </p>

      <p className = "Title_Question"> Votre référence d'achat est le 638382</p>
      <p className = "Title_Question"> Un mail vous a été envoyé </p>

    </div>
  )
}
}


function mapDispatchToProps(dispatch) {
  return {
    deletePanier : function() {
        dispatch( {type: 'deleteAllPanier'
        } )
    }
}
}

function mapStateToProps(state) {
  return { panier: state.panier }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
