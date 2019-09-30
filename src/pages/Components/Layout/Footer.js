import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render(){
  return(
    <div className = "Footer">
      <p style={{margin:0}}> © Arlina 2019 </p>
      <div className ="Footer_RS">
        <img className = "RS" src = "img/pictos/RS/FOOTER_INSTAGRAM.jpg" alt="Logo Instagram" onClick={()=> window.open("https://www.instagram.com/arlinaworld/", "_blank")}/>
        <img className = "RS" src = "img/pictos/RS/FOOTER_FACEBOOK.jpg" alt="Logo Facebook" onClick={()=> window.open("https://www.facebook.com/ArlinaWorld/", "_blank")}/>
      </div>
      <Link to='/mentions'> Mentions Legales</Link> |
      <Link to='/CGV'> CGV</Link>
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
)(Footer);
