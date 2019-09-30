import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class HeaderPaiement extends Component {

  constructor(props) {
   super();
   this.state = {
     shop : props.shop,
   };
 }



  render(){
  return(
        <div className = "Header_Paiement">
          <Link className = "Header_Image" to = "/" onClick = {() => window.scrollTo(0, 0)}> <img className = "Arlina_main" src = "../img/Arlina_main_curve.png" alt="Logo Arlina"/> </Link>
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
)(HeaderPaiement);
