import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
   super();
   this.state = {
     shop : props.shop,
     button : "Créer votre histoire !",
     headerText: "Création de votre histoire",
     nbPoints:0,
     sens:true
   };
 }

  updateHeaderText = () => {
    if(this.state.sens){
      this.setState({
        headerText: this.state.headerText+'.',
        nbPoints: this.state.nbPoints+1
      });
      if(this.state.nbPoints===10){
        this.setState({
          sens:false
        })
      }
    }
    else{
      this.setState({
        headerText: this.state.headerText.substr(0,this.state.headerText.length - 1),
        nbPoints: this.state.nbPoints-1
      });
      if(this.state.nbPoints===0){
        this.setState({
          sens:true
        })
      }
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(() => this.updateHeaderText(),
    1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render(){


  return(
        <div className = "Header_fixed">
          <Link className = "Header_Image" to = "/" onClick = {() => window.scrollTo(0, 0)}> <img className = "Arlina_main" src = "../img/Arlina_main_curve.png" alt="Logo Arlina"/> </Link>
          <p className = "HeaderPerso_Link" > {this.state.headerText} </p>

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
)(Header);
