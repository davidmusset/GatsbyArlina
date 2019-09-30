import React, { Component } from 'react';
import {connect} from 'react-redux';

class Mentions extends Component {
  render(){
  return(
    <div className="CorpsStandard">
      <h1> Mentions Legales</h1>
      <br/>
        <h3>Le Monde d'Arlina</h3>
        <b>Miracle Capital</b><br/>
        SAS au capital de 500€<br/>
<br/>
        Adresse du siège social : 23 rue d'aboukir, 75002 Paris<br/>
<br/>
        Contact via notre formulaire de contact<br/>
<br/>
        Numéro TVA : FR55801426107<br/>
<br/>
        Numéro Siret : 80142610700026<br/><br/>
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
)(Mentions);
