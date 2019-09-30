import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Redirect} from 'react-router-dom';

class Achat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      panier : this.props.panier,
      ajout : false,
      validationPaiement: false,
      modal: false,
      elementToDelete : "",
      payer: false
    };
  }

  toggle= (e) => {

    if(e.target.id===""){
      this.setState({
        modal: true,
        elementToDelete : e.target.parentElement.id
      })
    }
    else{
      this.setState({
        modal : true,
        elementToDelete : e.target.id
      })
    }

  }

  componentDidMount() {
    this.stripe = window.Stripe("pk_test_0IMcMatLvhq5MxMbvdGfYdoZ")
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_FtvaFaBlMbbvB9", quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  deleteItem = () => {

    this.props.deletePanier(this.state.elementToDelete)

    this.setState({
      modal: false,
      elementToDelete : ""
    });

  }

  refuseDelete = () => {
    this.setState({
      modal: false,
      elementToDelete : ""
    });
  }


  componentDidUpdate = (prevProps) => {
    if(prevProps.panier !== this.props.panier){
      this.setState({
        panier: this.props.panier
      })
    }
  }

  AjouterPanier= () => {
    window.scrollTo(0, 0);
    this.setState({
      ajout: true
    })
  }

  GoCheckout= () => {
    window.scrollTo(0, 0);
    this.setState({
      payer: true
    })
  }

  onToken = (e, amount) => {
    var ctx = this
    fetch('http://localhost:3001/',{
      method: 'post',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'token='+e.id+'&amount='+amount
    })
    .then(function(response) {
      ctx.setState({validationPaiement:true})
    })
    .then(function(data) {
    });

  }


  render(){


    if (this.state.ajout){return <Redirect to='/Creer' />}
      if (this.state.payer){return <Redirect to='/Paiement' />}
    if (this.state.validationPaiement){ return <Redirect to='/Checkout' />}

    /* ------------- APERCU ------------------- */
    var returnPanier = [];
    var displayButton = "buttonStripe"
    var montantPanier = parseFloat(Math.round(31.90*this.state.panier.length*100) /100).toFixed(2);
    if (montantPanier ==="0.00"){displayButton = "buttonStripeHide"}else{displayButton = "Link_Achat"}

    for (var i = 0; i < this.state.panier.length; i++){

      var Dedicace = this.state.panier[i].dedicace;
      var Name = this.state.panier[i].name;
      var Book = this.state.panier[i].book;
      var topOffset = 10 + 250*(i+1);
      var styleTopOffset = {top: topOffset};

      var Peau = "img/Apercu/"+this.state.panier[i].genre+"/Peau/"+this.state.panier[i].apparence.StylePeau+"/"+this.state.panier[i].apparence.CouleurPeau+".png";
      var Cheveux = "img/Apercu/Cheveux/"+this.state.panier[i].apparence.StyleCheveux+"/"+this.state.panier[i].apparence.CouleurCheveux+".png";
      var Sourcil = "img/Apercu/"+this.state.panier[i].genre+"/Sourcil/"+this.state.panier[i].apparence.CouleurCheveux+".png";
      var Yeux = "img/Apercu/"+this.state.panier[i].genre+"/Yeux/"+this.state.panier[i].apparence.StyleYeux+"/"+this.state.panier[i].apparence.CouleurYeux+".png";
      var Lunettes = ""
      var Vetements = "img/Apercu/Vetements/"+this.state.panier[i].apparence.StyleAutres+".png";
      if(this.state.panier[i].apparence.CouleurLunettes !==0){
        var adressLunette="img/Apercu/Lunettes/"+this.state.panier[i].apparence.CouleurLunettes+".png";
        var Lunettes = <img className = "ApercuLunettesPanier" style={styleTopOffset} src={adressLunette} alt = "Lunettes Dessin"/>;
      }



      returnPanier.push(
        <div key = {i} className = "ShopItem">
          <FontAwesomeIcon id = {i} className="DeleteCross" icon="times-circle" onClick={(e)=>this.toggle(e)}/>
          <div className = "ApercuPerso">
            <p className = "ForName"> Pour {Name} </p>
            <img className = "ApercuPeauPanier" style={styleTopOffset} alt = "Dessin Buste" src={Peau}/>
            <img className = "ApercuCheveuxPanier" style={styleTopOffset} alt = "Dessin Cheveux"  src={Cheveux}/>
            <img className = "ApercuYeuxPanier" style={styleTopOffset} alt = "Dessin Yeux"  src={Yeux}/>
            {Lunettes}
            <img className = "ApercuVetementPanier" style={styleTopOffset} alt = "Dessin Vetements"  src={Vetements}/>
          </div>
          <div className = "DescriptionAchat">
            <div className = "ApercuLivre">
              <p className = "Title_Question"> {Book} </p>
              <img className = "ImgLivrePanier" alt = "Monde Arlina livre personnalisé enfant aperçu" src = "img/Book/Monde Arlina/Arlina_1.png"/>
            </div>

            <div className = "ApercuDedicace">
              <p className = "Title_Question"> Dédicace </p>
              {Dedicace}
            </div>
            <div className = "PrixPanier">
              <p className = "Prix">31.90€</p>
            </div>
          </div>

        </div>
      )

    }

  return(
    <div className = "PageAchatGlobal">
      <div className = "separation"> </div>
      <h1> Aperçu du Panier  </h1>
      <div className = "separation"> </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
          <ModalHeader toggle={this.toggle}>Suppression du panier</ModalHeader>
          <ModalBody>
            Souhaitez-vous vraiment supprimer cet élément du panier ?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.deleteItem}>Supprimer</Button>{' '}
            <Button color="secondary" onClick={this.refuseDelete}>Conserver</Button>
          </ModalFooter>
        </Modal>

        {returnPanier}

      <div className = "Total">
        <div className = "VidePanier"> </div>
        <div className = "RempliPanier">
          <p className = "TotalText">Total : </p>
          <p className = "TotalMontant"> {montantPanier}€</p>
        </div>
      </div>

      <div className = "Cadre_Boutons_Bas_Panier">
        <div className = "Cadre_Bouton_Gauche_Achat">
          <Button className="Bouton_AjouterPanier" onClick={()=>this.AjouterPanier()}> Ajouter un autre livre</Button>
        </div>
        <div className = "Cadre_Bouton_Droite_Achat">
          <Button className={displayButton} onClick={()=>this.GoCheckout()}> Passer commande</Button>
        </div>
      </div>


    </div>
  )
}
}


function mapDispatchToProps(dispatch) {
  return {
    deletePanier : function(position) {
        dispatch( {type: 'deletePanier',
          position: position
        } )
    }
}
}


function mapStateToProps(state) {
  return { panier: state.panier }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Achat);
