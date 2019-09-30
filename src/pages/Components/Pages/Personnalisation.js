import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Progress, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Redirect} from 'react-router-dom';
import feathers from '@feathersjs/feathers';
import feathersjsRestClient from '@feathersjs/rest-client';

import Basics from './Personnalisation/Basics';
import Apparence from './Personnalisation/Apparence';
import Dedicace from './Personnalisation/Dedicace';
import Previsualisation from './Personnalisation/Previsualisation';


class Personnalisation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 23,
      color: ["#48B460","#999","#999","#999"],
      icon: ["check-circle",'circle','circle','circle'],
      colorLabels: ["#FFF","black","black","black"],
      component: <Basics/>
    };
    const uuidv4 = require('uuid/v4');
    this.uuid = uuidv4();
  }


  handleClick1 = () => {
    console.log(this.props.shop);
    this.setState({
      progress: 23,
      color: ["#48B460","#999","#999","#999"],
      icon: ["check-circle",'circle','circle','circle'],
      colorLabels: ["#FFF","black","black","black"],
      component: <Basics/>
    })
  }

  handleClick2 = () => {
    console.log(this.props.shop);
    if(this.props.shop.name !== ""){
    this.props.reinitNom()
    this.setState({
      progress: 49,
      color: ["#48B460","#48B460","#999","#999"],
      icon: ["check-circle","check-circle",'circle','circle'],
      colorLabels: ["black","#FFF","black","black"],
      component: <Apparence/>
    })
  }
  else{
    this.props.erreurNom()
  }
  }

  handleClick3 = () => {
    if(this.props.shop.name !== ""){
    this.props.reinitNom()
    this.setState({
      progress: 74,
      color: ["#48B460","#48B460","#48B460","#999"],
      icon: ["check-circle","check-circle","check-circle",'circle'],
      colorLabels: ["black","black","#FFF","black"],
      component: <Dedicace/>
    })
  }
    else{
      this.props.erreurNom()
    }
  }

  handleClick4 = () => {
    if(this.props.shop.name !== ""){

      // GENERATION DE L APERCU

      var customizations = {};
      var bookType = 1;
      var gender = 1;
      var typography = 1;
      var name = "";
      var skin = {style : 1, color : 1};
      var hairs = {style : 1, color : 1};
      var eyes = {style : 1 , color : 1};
      var glasses = {style :1, color : 1};
      var others = {style :1, color:1 };
      var dedication = "";
      var image = "";


        if(this.props.shop.book === "MondeArlina"){
          bookType = 1;
        }
        else{
          bookType = 2;
        }
        if(this.props.shop.genre === "Garcon"){
          gender = 1;
        }
        else{
          gender = 2;
        }
        if(this.props.shop.typo === "min"){
          typography = 1;
        }
        else{
          typography = 2;
        }
        name = this.props.shop.name;
        skin.style = this.props.shop.apparence.StylePeau;
        skin.color = this.props.shop.apparence.CouleurPeau;
        hairs.style = this.props.shop.apparence.StyleCheveux;
        hairs.color = this.props.shop.apparence.CouleurCheveux;
        eyes.style = this.props.shop.apparence.StyleYeux;
        eyes.color = this.props.shop.apparence.CouleurYeux;
        glasses.style = this.props.shop.apparence.StyleLunettes;
        glasses.color = this.props.shop.apparence.CouleurLunettes;
        others.style = this.props.shop.apparence.StyleAutres;
        others.color = this.props.shop.apparence.CouleurAutres;
        dedication = this.props.shop.dedicace;
        image = this.props.shop.image


        customizations = {
            bookType,
            gender,
            typography,
            name,
            skin,
            hairs,
            eyes,
            // glasses,
            // others,
            // image,
            dedication
          }

      const feathersApp = feathers()
      {/* const restClient = feathersjsRestClient(process.env.ENV_BACK_ADDR) */}
      const restClient = feathersjsRestClient("http://localhost:8080")
      feathersApp.configure(restClient.fetch(window.fetch));

      const bookPage = feathersApp.service('book-page');

      bookPage
        .update(this.uuid, customizations)
        .then(result => {
          //result is the sent cartData with other information
          console.log("resultat1",result);
          this.setState({
            progress: 99,
            color: ["#48B460","#48B460","#48B460","#48B460"],
            icon: ["check-circle","check-circle","check-circle","check-circle"],
            colorLabels: ["black","black","black","#FFF"],
            component: <Previsualisation result={result} uuid={this.uuid}/>
          })
        })
        .catch(error=>{
          console.log("error1",error);
          this.setState({
            progress: 99,
            color: ["#48B460","#48B460","#48B460","#48B460"],
            icon: ["check-circle","check-circle","check-circle","check-circle"],
            colorLabels: ["black","black","black","#FFF"],
            component: <Previsualisation/>
          })
        })

  }
    else{
      this.props.erreurNom()
    }
  }

  handleClickPrecedent = () => {
    this.state.progress > 90
      ? this.handleClick3()
      : this.state.progress > 70
        ? this.handleClick2()
        : this.handleClick1()
  }

  handleClickSuivant = () => {
    this.state.progress > 90
      ? this.setState({ progress: 100})
      : this.state.progress > 70
        ? this.handleClick4()
        : this.state.progress > 40
          ? this.handleClick3()
          : this.handleClick2()
  }

  render(){

    if (this.state.progress === 100){

        this.props.addPanier(
          this.props.shop.book,
          this.props.shop.name,
          this.props.shop.genre,
          this.props.shop.typo,
          this.props.shop.dedicace,
          this.props.shop.apparence.StylePeau,
          this.props.shop.apparence.CouleurPeau,
          this.props.shop.apparence.StyleCheveux,
          this.props.shop.apparence.CouleurCheveux,
          this.props.shop.apparence.StyleYeux,
          this.props.shop.apparence.CouleurYeux,
          this.props.shop.apparence.StyleLunettes,
          this.props.shop.apparence.CouleurLunettes,
          this.props.shop.apparence.StyleAutres,
          this.props.shop.apparence.CouleurAutres
        )

        this.props.reinitShop()
        return <Redirect to='/Achat' />
    }

    var stylePrecedent = {display:"none"}
    var BoutonSuivanText = "Suivant"

    if(this.state.progress>30){
    stylePrecedent = {}
    }

    if(this.state.progress>90){
    BoutonSuivanText = "Acheter"
    }


  return(
    <div className="Personnalisation">
      <div className = "BasicsTop">
        <div className = "LabelJauge">
          <div className = "Labels" style = {{color:this.state.colorLabels[0]}} onClick={()=>this.handleClick1()}> Informations </div>
          <div className = "Labels" style = {{color:this.state.colorLabels[1]}} onClick={()=>this.handleClick2()}> Apparence </div>
          <div className = "Labels" style = {{color:this.state.colorLabels[2]}} onClick={()=>this.handleClick3()}> Dédicace </div>
          <div className = "Labels" style = {{color:this.state.colorLabels[3]}} onClick={()=>this.handleClick4()}> Prévisualisation </div>
        </div>
        <div className = "Jauge">
            <div className = "JaugeMid">
              <Progress className = "JaugeMid" bar animated color="success" value={this.state.progress}/>
              <FontAwesomeIcon style = {{color:this.state.color[0], left:"-200px"}} className="CircleMid" icon={this.state.icon[0]} onClick={()=>this.handleClick1()}/>
              <FontAwesomeIcon style = {{color:this.state.color[1], left:"25px"}} className="CircleMid" icon={this.state.icon[1]} onClick={()=>this.handleClick2()}/>
              <FontAwesomeIcon style = {{color:this.state.color[2], left:"235px"}} className="CircleMid" icon={this.state.icon[2]} onClick={()=>this.handleClick3()}/>
              <FontAwesomeIcon style = {{color:this.state.color[3], left:"450px"}} className="CircleMid" icon={this.state.icon[3]} onClick={()=>this.handleClick4()}/>
            </div>
        </div>

      </div>
      {this.state.component}

      <div className = "Cadre_Boutons_Bas">
        <div className = "Cadre_Bouton_Gauche">
          <Button className="Bouton_Perso" style={stylePrecedent} onClick={()=>this.handleClickPrecedent()}> Précédent</Button>
        </div>
        <div className = "Cadre_Bouton_Droite" onClick={()=>this.handleClickSuivant()}>
          <Button id = "boutonSuivant" className="Bouton_Perso"> {BoutonSuivanText}</Button>
        </div>
      </div>

    </div>



  )
}
}

// Envoi de Redux
function mapDispatchToProps(dispatch) {
  return {
    erreurNom  : function() {
        dispatch( {type: 'erreurNom',
          erreur : true
        } )
    },
    reinitNom : function() {
        dispatch( {type: 'reinitNom',
          erreur : false
        } )
    },
    reinitShop : function() {
        dispatch( {type: 'reinitShop'
        } )
    },
    addPanier : function(
              book,
              name,
              genre,
              typo,
              dedicace,
              StylePeau,
              CouleurPeau,
              StyleCheveux,
              CouleurCheveux,
              StyleYeux,
              CouleurYeux,
              StyleLunettes,
              CouleurLunettes,
              StyleAutres,
              CouleurAutres) {
        dispatch( {type: 'addPanier',
          book,
          name,
          genre,
          typo,
          dedicace,
          StylePeau,
          CouleurPeau,
          StyleCheveux,
          CouleurCheveux,
          StyleYeux,
          CouleurYeux,
          StyleLunettes,
          CouleurLunettes,
          StyleAutres,
          CouleurAutres
        })
    }
}
}

function mapStateToProps(state) {
  return { shop: state.shop }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Personnalisation);
