import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Input} from 'reactstrap';


class Dedicace extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.shop.name,
      genre: this.props.shop.genre,
      status: this.props.shop.status,
      typo: this.props.shop.typo,
      dedicace : this.props.shop.dedicace,
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
      ImageUpload:null,
    };
  }

  handleChangeImage = (e) => {
    this.setState({
      ImageUpload: URL.createObjectURL(e.target.files[0])
    })
    // const image2base64 = require('image-to-base64');
    //
    // image2base64(e.target.files[0])
    // .then(
    //     (response) => {
    //       this.props.updateImage(response)
    //     }
    // )
    // .catch(
    //     (error) => {
    //         console.log(error);
    //     }
    // )

  }

  handleChangeDedicace = (e) => {
    this.setState({
      dedicace: e.target.value
    });
    this.props.updateDedicace(e.target.value)
  }


  render(){

    /* ------------- APERCU ------------------- */
    var Peau = "img/Apercu/"+this.state.genre+"/Peau/"+this.state.CouleurPeau+"/"+this.state.StylePeau+".png";
    var Cheveux = "img/Apercu/"+this.state.genre+"/Cheveux/"+this.state.CouleurCheveux+"/"+this.state.StyleCheveux+".png";
    var Yeux = "img/Apercu/"+this.state.genre+"/Yeux/"+this.state.CouleurYeux+"/"+this.state.StyleYeux+".png";
    var Lunettes = "img/Apercu/"+this.state.genre+"/Lunettes/"+this.state.CouleurLunettes+"/"+this.state.StyleLunettes+".png";

  var messageText = ""
  if (this.state.typo ==="maj"){
    messageText = "BONJOUR "+this.state.name.toUpperCase()+"!";
  }
  else{
    messageText = "Bonjour "+this.state.name.charAt(0).toUpperCase()+this.state.name.substr(1,this.state.name.length)+"!";
  }



  return(
    <div className="CadreChoixBasics">
      <div className = "CadreGaucheBasics">
        <p className = "LabelBasics"> Ecrivez votre dédicace </p>
        <Input className = "InputDedicace" type="textarea" name="dedicace" value = {this.state.dedicace} placeholder="" onChange={this.handleChangeDedicace}/>

    </div>
      <div className = "CadreDroiteDedicace">
        <p className = "LabelBasics"> Insérez une photo sous votre dédicace </p>
          <form>
          <input
          ref="file"
          type="file"
          name="image_Upload"
          multiple={true}
          onChange={this.handleChangeImage}/>
         </form>
         <img className = "ImageUpload" src={this.state.ImageUpload}/>
      </div>
    </div>
  )
}
}



// Envoi de Redux
function mapDispatchToProps(dispatch) {
  return {
    updateDedicace  : function(dedicace) {
        dispatch( {type: 'updateDedicace',
          dedicace : dedicace
        } )
    },
    updateImage : function(image) {
        dispatch( {type: 'updateImage',
          image : image
        } )
    }
  }
}

function mapStateToProps(state) {
  return {
    shop: state.shop
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dedicace);
