import React, { Component } from 'react';
import {connect} from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

class Apparence extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.shop.name,
      genre: this.props.shop.genre,
      status: this.props.shop.status,
      typo: this.props.shop.typo,
      StylePeau:this.props.shop.apparence.StylePeau,
      CouleurPeau:this.props.shop.apparence.CouleurPeau,
      StyleCheveux:this.props.shop.apparence.StyleCheveux,
      CouleurCheveux:this.props.shop.apparence.CouleurCheveux,
      StyleYeux:this.props.shop.apparence.StyleYeux,
      CouleurYeux:this.props.shop.apparence.CouleurYeux,
      StyleLunettes:this.props.shop.apparence.StyleLunettes,
      CouleurLunettes:this.props.shop.apparence.CouleurLunettes,
      StyleAutres:this.props.shop.apparence.StyleAutres,
      CouleurAutres:this.props.shop.apparence.CouleurAutres,
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleChangeCouleurPeau = (e) =>{this.setState({CouleurPeau:e.target.id},this.updateRedux)}
  handleChangeStylePeau = (e) =>{this.setState({StylePeau:e.target.id},this.updateRedux)}
  handleChangeCouleurCheveux = (e) =>{this.setState({CouleurCheveux:e.target.id},this.updateRedux)}
  handleChangeStyleCheveux = (e) =>{this.setState({StyleCheveux:e.target.id},this.updateRedux)}
  handleChangeCouleurYeux = (e) =>{this.setState({CouleurYeux:e.target.id},this.updateRedux)}
  handleChangeStyleYeux = (e) =>{this.setState({StyleYeux:e.target.id},this.updateRedux)}
  handleChangeCouleurLunettes = (e) =>{this.setState({CouleurLunettes:e.target.id},this.updateRedux)}
  handleChangeStyleLunettes = (e) =>{this.setState({StyleLunettes:e.target.id},this.updateRedux)}
  handleChangeCouleurAutres = (e) =>{this.setState({CouleurAutres:e.target.id},this.updateRedux)}
  handleChangeStyleAutres = (e) =>{this.setState({StyleAutres:e.target.id},this.updateRedux)}


  updateRedux = () =>{
    this.props.updateApparence(
      this.state.StylePeau,
      this.state.CouleurPeau,
      this.state.StyleCheveux,
      this.state.CouleurCheveux,
      this.state.StyleYeux,
      this.state.CouleurYeux,
      this.state.StyleLunettes,
      this.state.CouleurLunettes,
      this.state.StyleAutres,
      this.state.CouleurAutres
    )
  }

  render(){

    /* ------------- APERCU ------------------- */
    var Peau = "img/Apercu/"+this.state.genre+"/Peau/"+this.state.StylePeau+"/"+this.state.CouleurPeau+".png";
    var Cheveux = "img/Apercu/Cheveux/"+this.state.StyleCheveux+"/"+this.state.CouleurCheveux+".png";
    var Sourcil = "img/Apercu/"+this.state.genre+"/Sourcil/"+this.state.CouleurCheveux+".png";
    var Yeux = "img/Apercu/"+this.state.genre+"/Yeux/"+this.state.StyleYeux+"/"+this.state.CouleurYeux+".png";
    var Lunettes = ""
    var Autres = "img/Apercu/Vetements/"+this.state.StyleAutres+".png";
    if (this.state.CouleurLunettes != 0){
      var adressLunette="img/Apercu/Lunettes/"+this.state.CouleurLunettes+".png"
    var Lunettes = <img className = "ApercuLunettes" src={adressLunette} alt = "Lunettes Dessin"/>;
    }


    /* ------------- PEAU ------------------- */
    const couleurPeau = []
    for (var i=0;i<7;i++){
      var dirCouleur = "img/Apercu/"+this.state.genre+"/Peau/"+i+".png";
      var styleCouleur = {border: "none"}
      if(this.state.CouleurPeau === i){styleCouleur = {border: "2px solid #258AC7"} }
      couleurPeau.push(<img key={i} className = "Couleur" alt="Couleur de Peau" id = {i} style={styleCouleur} src={dirCouleur} onClick = {(e) =>this.handleChangeCouleurPeau(e)}/>);
    }

    const StylePeau = []
    for (i=1;i<3;i++){
      var dirStyle = "img/Apercu/"+this.state.genre+"/Peau/"+i+"/"+this.state.CouleurPeau+".png";
      styleCouleur = {border: "none"}
      if(this.state.StylePeau === i){styleCouleur = {border: "2px solid #258AC7"} }
      StylePeau.push(<img key={i} className = "Style" alt="Dessins de Buste"  id = {i} style={styleCouleur} src={dirStyle} onClick = {(e) =>this.handleChangeStylePeau(e)}/>);
    }

    /* ------------- CHEVEUX ------------------- */
    const couleurCheveux = []
    for (i=0;i<11;i++){
      dirCouleur = "img/Apercu/Cheveux/"+i+".png";
      styleCouleur = {border: "none"}
      if(this.state.CouleurCheveux === i){styleCouleur = {border: "2px solid #258AC7"} }
      couleurCheveux.push(<img key={i} className = "Couleur" alt="Couleur de Cheveux" id = {i} style={styleCouleur} src={dirCouleur} onClick = {(e) =>this.handleChangeCouleurCheveux(e)}/>);
    }

    const StyleCheveux = []
    for (i=1;i<26;i++){
      dirStyle = "img/Apercu/Cheveux/"+i+"/"+this.state.CouleurCheveux+".png";
      styleCouleur = {border: "none"}
      if(this.state.StyleCheveux === i){styleCouleur = {border: "2px solid #258AC7"} }
      StyleCheveux.push(<img key={i} className = "Style" alt="Dessins de Cheveux" id = {i} style={styleCouleur} src={dirStyle} onClick = {(e) =>this.handleChangeStyleCheveux(e)}/>);
    }

    /* ------------- YEUX ------------------- */
    const couleurYeux = []
    for (i=1;i<7;i++){
      dirCouleur = "img/Apercu/"+this.state.genre+"/Yeux/"+i+".png";
      styleCouleur = {border: "none"}
      if(this.state.CouleurYeux === i){styleCouleur = {border: "2px solid #258AC7"} }
      couleurYeux.push(<img key={i} className = "Couleur" alt="Couleur des yeux" id = {i} style={styleCouleur} src={dirCouleur} onClick = {(e) =>this.handleChangeCouleurYeux(e)}/>);
    }

    const StyleYeux = []
    for (i=1;i<3;i++){
      dirStyle = "img/Apercu/"+this.state.genre+"/Yeux/"+i+"/"+this.state.CouleurYeux+".png";
      styleCouleur = {border: "none"}
      if(this.state.StyleYeux === i){styleCouleur = {border: "2px solid #258AC7"} }
      StyleYeux.push(<img key={i} className = "Style" alt="Dessins des yeux" id = {i} style={styleCouleur} src={dirStyle} onClick = {(e) =>this.handleChangeStyleYeux(e)}/>);
    }

    /* ------------- LUNETTES ------------------- */
    const couleurLunettes = []
    for (i=0;i<7;i++){
      dirCouleur = "img/Apercu/Lunettes/"+i+".png";
      styleCouleur = {border: "none"}
      if(this.state.CouleurLunettes === i){styleCouleur = {border: "2px solid #258AC7"} }
      couleurLunettes.push(<img key={i} className = "Couleur" alt="Couleur des Lunettes" id = {i} style={styleCouleur} src={dirCouleur} onClick = {(e) =>this.handleChangeCouleurLunettes(e)}/>);
    }

    /* ------------- AUTRES ------------------- */

    const StyleAutres = []
    for (i=1;i<3;i++){
      dirStyle = "img/Apercu/Vetements/"+i+".png";
      styleCouleur = {border: "none"}
      if(this.state.StyleAutres === i){styleCouleur = {border: "2px solid #258AC7"} }
      StyleAutres.push(<img key={i} className = "Style" alt="Autres attributs" id = {i} style={styleCouleur} src={dirStyle} onClick = {(e) =>this.handleChangeStyleAutres(e)}/>);
    }

  var messageText = ""
  if (this.state.typo ==="maj"){
    messageText = this.state.name.toUpperCase()+" ET LE MONDE D'ARLINA!";
  }
  else{
    messageText = this.state.name.charAt(0).toUpperCase()+this.state.name.substr(1,this.state.name.length)+" et le monde d'Arlina!";
  }



  return(
    <div className="CadreChoixBasics">
      <div className = "CadreGaucheBasics">
        <p className = "LabelBasics"> Personnalisez son apparence </p>

          {/* ONGLETS de CHOIX */}
          <Nav tabs className="TabNav">
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  style={{cursor:"pointer"}}
                  onClick={() => { this.toggle('1'); }}
                >
                  Peau
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  style={{cursor:"pointer"}}
                  onClick={() => { this.toggle('2'); }}
                >
                  Cheveux
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  style={{cursor:"pointer"}}
                  onClick={() => { this.toggle('3'); }}
                >
                  Yeux
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  style={{cursor:"pointer"}}
                  onClick={() => { this.toggle('4'); }}
                >
                  Lunettes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '5' })}
                  style={{cursor:"pointer"}}
                  onClick={() => { this.toggle('5'); }}
                >
                  Vetement
                </NavLink>
              </NavItem>
            </Nav>

            {/* DANS LES ONGLETS */}
            <TabContent className = "TabClass" activeTab={this.state.activeTab}>

              {/* BUSTE */}
              <TabPane style = {{width:'100%'}} tabId="1">
                <div className = "CadreCouleur">
                  <p className = "LabelCouleur">Couleur: </p>
                  {couleurPeau}
                </div>
                <p className = "LabelStyle">Style: </p>
                <div className = "AllStyle">
                  {StylePeau}
                </div>
              </TabPane>

              {/* CHEVEUX */}
              <TabPane style = {{width:'100%'}} tabId="2">
                <div className = "CadreCouleur">
                  <p className = "LabelCouleur">Couleur: </p>
                  {couleurCheveux}
                </div>
                <p className = "LabelStyle">Style: </p>
                <div className = "AllStyle">
                  {StyleCheveux}
                </div>
              </TabPane>

              {/* YEUX */}
              <TabPane style = {{width:'100%'}} tabId="3">
                <div className = "CadreCouleur">
                  <p className = "LabelCouleur">Couleur: </p>
                  {couleurYeux}
                </div>
                <p className = "LabelStyle">Style: </p>
                <div className = "AllStyle">
                  {StyleYeux}
                </div>
              </TabPane>

              {/* LUNETTES */}
              <TabPane style = {{width:'100%'}} tabId="4">
                <div className = "AllStyle">
                  {couleurLunettes}
                </div>
              </TabPane>

              {/* AUTRES */}
              <TabPane style = {{width:'100%'}} tabId="5">
                <div className = "AllStyle">
                  {StyleAutres}
                </div>
              </TabPane>
            </TabContent>



      </div>
      <div className = "CadreDroiteBasics">
        <p className = "TitreDroite"> {messageText} </p>
          <img className = "ApercuPeau" src={Peau} alt="Buste Dessin"/>
          <img className = "ApercuCheveux" src={Cheveux} alt="Cheveux Dessin"/>
          <img className = "ApercuCheveux" src={Sourcil} alt="Sourcil Dessin"/>
          <img className = "ApercuYeux" src={Yeux} alt="Yeux Dessin"/>
          {Lunettes}
          <img className = "ApercuAutres" src={Autres} alt="Vetements Dessin"/>
      </div>
    </div>
  )
}
}


// Envoi de Redux
function mapDispatchToProps(dispatch) {
  return {
    updateApparence  : function(StylePeau, CouleurPeau, StyleCheveux, CouleurCheveux, StyleYeux, CouleurYeux, StyleLunettes, CouleurLunettes, StyleAutres, CouleurAutres) {
        dispatch( {type: 'updateApparence',
          StylePeau:StylePeau,
          CouleurPeau:CouleurPeau,
          StyleCheveux:StyleCheveux,
          CouleurCheveux:CouleurCheveux,
          StyleYeux:StyleYeux,
          CouleurYeux:CouleurYeux,
          StyleLunettes:StyleLunettes,
          CouleurLunettes:CouleurLunettes,
          StyleAutres:StyleAutres,
          CouleurAutres:CouleurAutres
        } )
    },
  }
}

function mapStateToProps(state) {
  return { shop: state.shop }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Apparence);
