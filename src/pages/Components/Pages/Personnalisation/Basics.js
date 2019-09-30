import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Input} from 'reactstrap';

class Basics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.shop.name,
      genre: this.props.shop.genre,
      status: this.props.shop.status,
      typo: this.props.shop.typo,
      backgroundF:"#FFF",
      backgroundM:"#FFF",
      backgroundMaj:"#FFF",
      backgroundMin:"#FFF",
      message:"Bonjour "+this.props.shop.name.charAt(0).toUpperCase()+this.props.shop.name.substr(1,this.props.shop.name.length)+"!",
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
    };
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    });

    if(this.state.typo === "maj"){
      this.setState({
        message: e.target.value.toUpperCase()+" ET LE MONDE D'ARLINA!",
      });
    }
    else{
      this.setState({
        message: e.target.value.charAt(0).toUpperCase()+e.target.value.substr(1,e.target.value.length)+" et le monde d'Arlina!",
      });
    }
    this.props.newBook(e.target.value, this.state.genre, this.state.typo)
  }


  handleChangeGenre = (genre) => {
    this.setState({genre: genre});
    if(genre==="Garcon"){
      this.setState({
        backgroundM : "#EBEFEE",
        backgroundF : "#FFF",

      })
    }
    else{
      this.setState({
        backgroundF : "#EBEFEE",
        backgroundM : "#FFF",
      })
    }
    this.props.newBook(this.state.name, genre, this.state.typo);
 }


 handleChangeTypo = (typo) => {
   this.setState({typo: typo});
   if(typo==="maj"){
     this.setState({
       backgroundMaj : "#EBEFEE",
       backgroundMin : "#FFF",
       message: this.state.name.toUpperCase()+" ET LE MONDE D'ARLINA!",
     })
   }
   else{
     this.setState({
       backgroundMin : "#EBEFEE",
       backgroundMaj : "#FFF",
       message: this.state.name.charAt(0).toUpperCase()+this.state.name.substr(1,this.state.name.length)+" et le monde d'Arlina!",
     })
   }
   this.props.newBook(this.state.name, this.state.genre, typo);
}


 componentDidMount = () =>{
   this.handleChangeGenre(this.state.genre);
   this.handleChangeTypo(this.state.typo);
 }

  render(){

    var style = "BasicsInput"
    if(this.props.erreur){
      style = "BasicsInputErreur"
    }

    /* ------------- APERCU ------------------- */
    var Peau = "img/Apercu/"+this.state.genre+"/Peau/"+this.state.StylePeau+"/"+this.state.CouleurPeau+".png";
    var Cheveux = "img/Apercu/Cheveux/"+this.state.StyleCheveux+"/"+this.state.CouleurCheveux+".png";
    var Sourcil = "img/Apercu/"+this.state.genre+"/Sourcil/"+this.state.CouleurCheveux+".png";
    var Yeux = "img/Apercu/"+this.state.genre+"/Yeux/"+this.state.StyleYeux+"/"+this.state.CouleurYeux+".png";
    var Lunettes = ""
    var Vetements = "img/Apercu/Vetements/"+this.state.StyleAutres+".png";
    if (this.state.CouleurLunettes != 0){
      var adressLunette="img/Apercu/Lunettes/"+this.state.CouleurLunettes+".png"
    var Lunettes = <img className = "ApercuLunettes" src={adressLunette} alt = "Lunettes Dessin"/>;
    }

  return(

    <div className="CadreChoixBasics">
      <div className = "CadreGaucheBasics">
        <p className = "LabelBasics"> Quel est le nom de votre enfant ? </p>
        <Input className = {style} type="name" name="name" id="name" value = {this.state.name} placeholder="Nom" onChange={this.handleChangeName}/>
        <p className = "LabelBasics" style={{marginTop:"20px"}}> Quel genre ? </p>
        <div className = "InputGenre">
          <div className = "Basics_genre" style={{backgroundColor:this.state.backgroundF}} onClick = {() =>this.handleChangeGenre("Fille")}> <img  style = {{height:"50px"}} value="Fille" src="img/pictos/Picto_fille.png" alt="picto female"/> <p style={{margin:"0px"}}>Fille</p> </div>
          <div className = "Basics_genre" style={{backgroundColor:this.state.backgroundM}} onClick = {() =>this.handleChangeGenre("Garcon")}> <img style = {{height:"50px", marginRight:"17px", marginLeft:"17px"}} value="Garcon" src="img/pictos/Picto_garcon.png" alt="picto male"/> <p style={{margin:"0px"}}> Garçon</p> </div>
        </div>
        <p className = "LabelBasics" style={{marginTop:"20px"}}> Quelle typographie ? </p>
        <div className = "InputGenre">
          <div className = "Basics_genre" style={{backgroundColor:this.state.backgroundMaj}} onClick = {() =>this.handleChangeTypo("maj")}>  <p style={{margin:"0px"}}>MAJUSCULE</p> </div>
          <div className = "Basics_genre" style={{backgroundColor:this.state.backgroundMin}} onClick = {() =>this.handleChangeTypo("min")}>  <p style={{margin:"0px"}}> Minuscule</p> </div>
        </div>

      </div>
      <div className = "CadreDroiteBasics">
        <p className = "TitreDroite"> {this.state.message} </p>
        <img className = "ApercuPeau" src={Peau} alt="Buste dessin"/>
        <img className = "ApercuCheveux" src={Cheveux} alt="Cheveux Dessin"/>
        <img className = "ApercuCheveux" src={Sourcil} alt="Sourcil Dessin"/>
        <img className = "ApercuYeux" src={Yeux} alt="Yeux Dessin"/>
        {Lunettes}
        <img className = "ApercuAutres" src={Vetements} alt="Vetements Dessin"/>
      </div>

    </div>
  )
}
}

// Envoi de Redux
function mapDispatchToProps(dispatch) {
  return {
    newBook  : function(name,genre,typo) {
        dispatch( {type: 'updateNameGenreTypo',
          name : name,
          genre: genre,
          typo: typo
        } )
    },
  }
}

function mapStateToProps(state) {
  return {
    shop: state.shop,
    erreur: state.erreur
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Basics);
