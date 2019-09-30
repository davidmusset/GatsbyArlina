import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import SiteMetadata from './SiteMetadata';


class Header extends Component {

  constructor(props) {
   super();
   this.state = {
     shop : props.shop,
   };
 }


  render(){

    const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  var ButtonLabel = "Créer votre histoire";
  var LinkButton = "/Creer"
  var StyleButton = "Create_link"
  if(this.props.panier.length===0){ButtonLabel = "Créer votre histoire"; LinkButton = "/Creer"; StyleButton = "Create_link"} else{ButtonLabel = "Finaliser votre achat"; LinkButton = "/Achat"; StyleButton="Create_link_Achat"}

  return(
        <div className = "Header_fixed">
          <SiteMetadata/>
          <Link className = "Header_Image" to = "/" onClick = {() => window.scrollTo(0, 0)}> <img className = "Arlina_main" src = "img/Arlina_main_curve.png" alt="Logo Arlina"/> </Link>
          <HLink className = "Header_link" to='/#Fonctionnement' scroll={el => scrollWithOffset(el, 70)}> Comment ça marche </HLink>
          <HLink className = "Header_link" to='/#Questions' scroll={el => scrollWithOffset(el, 70)}> Questions fréquentes</HLink>
          <HLink className = "Header_link" to='/#Avis' scroll={el => scrollWithOffset(el, 70)}> Témoignages</HLink>
          <HLink className = "Header_link" to='/#Contact' scroll={el => scrollWithOffset(el, 70)}> Nous contacter </HLink>
          <HLink className = {StyleButton} to={LinkButton} onClick = {() => window.scrollTo(0, 0)}> {ButtonLabel}</HLink>
        </div>
  )
}
}

function mapStateToProps(state) {
  return { shop: state.shop, panier: state.panier }
}

export default connect(
    mapStateToProps,
    null
)(Header);
