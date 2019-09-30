import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Badge, UncontrolledCarousel} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ChoixLivre extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.shop.name,
      genre: this.props.shop.genre,
      status: this.props.shop.status
    };
  }

  HandleChoixLivre = (book) => {
    window.scrollTo(0, 0);
    this.props.updateBookName(book);
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


  return(
    <div className = "ChoixLivre">
      <div className = "CadreChoixLivre">
        <div className = "DescriptionBook">
          <p className = "Title_Question" style={{textAlign:"center"}}> Le Monde d'Arlina</p>
          <p style={{margin:0}}> Fado le féétaud a besoin de l'aide de votre enfant !</p>
          <p style={{margin:0}}> Spizz, le fou du Roi n'est plus que l'ombre de lui-même...</p>
          <p style={{margin:0}}> Pour lui porter secours, il faudra résoudre les cinq défis magiques. </p>
          <p className = "LivreCharac" style={{marginTop:"10px"}}>
            <FontAwesomeIcon style={{marginRight:'15px'}} className="BulletsLivre" icon="circle" /> 3 jeux rejouables
          </p>
          <p className = "LivreCharac">
            <FontAwesomeIcon style={{marginRight:'15px'}} className="BulletsLivre" icon="circle" /> 2 tours de magique
          </p>
          <p className = "LivreCharac">
            <FontAwesomeIcon style={{marginRight:'15px'}} className="BulletsLivre" icon="circle" /> 7 personnages à mémoriser
          </p>
          <p className="Qualites"> Qualités mises en avant: </p>
          <Badge style={{backgroundColor:"#39B28F"}}>Amitié</Badge> <Badge style={{backgroundColor:"#39B28F"}}>Courage</Badge> <Badge style={{backgroundColor:"#39B28F"}}>Réflexion</Badge>
        </div>
        <div className = "CadreDroite">
          <div className = "Apercu"> <UncontrolledCarousel items={items} indicators={false} /> </div>
          <Link className = "Personnalise_Button" to='Personnalisation' onClick={() => this.HandleChoixLivre("MondeArlina")}> Personnaliser cette histoire</Link>
          {/*<div className = "Personnalise_Button_soon"> Personnaliser votre livre : Bientôt disponible!</div>*/}
        </div>
      </div>

{/*
      <div className = "CadreChoixLivre">
        <div className = "DescriptionBook">
          <p className = "Title_Question" style={{textAlign:"center"}}> Le Rêve d'Arlina</p>
          <p style={{margin:0}}> Arlina vient de rentrer de voyage et elle a encore besoin de vous !</p>
          <p style={{margin:0}}> Fola la reine a perdu tout contrôle sur son Royaume</p>
          <p style={{margin:0}}> Venez vite l'aider dans le monde des fées en retrouvant les cinq joyaux</p>
          <p className = "LivreCharac" style={{marginTop:"10px"}}>
            <FontAwesomeIcon style={{marginRight:'15px'}} className="BulletsLivre" icon="circle" /> 4 jeux rejouables
          </p>
          <p className = "LivreCharac">
            <FontAwesomeIcon style={{marginRight:'15px'}} className="BulletsLivre" icon="circle" /> Une chasse aux trésors
          </p>
          <p className = "LivreCharac">
            <FontAwesomeIcon style={{marginRight:'15px'}} className="BulletsLivre" icon="circle" /> 5 personnages à mémoriser
          </p>
          <p className="Qualites"> Qualités mises en avant: </p>
          <Badge style={{backgroundColor:"#39B28F"}}>Recherche</Badge> <Badge style={{backgroundColor:"#39B28F"}}>Créativité</Badge> <Badge style={{backgroundColor:"#39B28F"}}>Orientation</Badge>
        </div>
        <div className = "CadreDroite">
          <div className = "Apercu"> <UncontrolledCarousel items={items} indicators={false} /> </div>
          <div className = "Personnalise_Button_soon"> Bientôt disponible!</div>
        </div>
      </div>*/}

    </div>
  )
}
}

// Envoi de Redux
function mapDispatchToProps(dispatch) {
  return {
    updateBookName  : function(book) {
        dispatch( {type: 'updateBookName',
          book : book,
        } )
    }
  }
}

function mapStateToProps(state) {
  return { shop: state.shop }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChoixLivre);
