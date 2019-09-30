import React, { Component } from 'react';
import {UncontrolledCarousel} from 'reactstrap';
import {connect} from 'react-redux';
import feathers from '@feathersjs/feathers';
import feathersjsRestClient from '@feathersjs/rest-client';

class Previsualisation extends Component {


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
    };
  }



  render(){


    const items = [
      {
        src: "img/Book/Monde Arlina/Arlina_1.png",
        caption: ''
      },
      {
        src: "img/Book/Monde Arlina/Arlina_2.png",
        caption: ''
      },
      {
        src: "img/Book/Monde Arlina/Arlina_3.png",
        caption: ''
      },
      {
        src: "img/Book/Monde Arlina/Arlina_4.png",
        caption: ''
      }
    ];


    // const uuid = this.props.uuid
    // this.props.result.forEach(function(element){
    //   items.push({
    //     src:"http://localhost:8080/book-page/"+uuid+"?p="+element,
    //     caption:'' })
    // })
    //
    // console.log(items);


  return(
    <div className="CadreChoixBasics">
      Aperçu du livre !
      // {this.props.result}
      <div className = "Previsualiser"> <UncontrolledCarousel items={items} indicators={false} /> </div>
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
)(Previsualisation);
