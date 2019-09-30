import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import BillingForm from './BillingForm'
import {Elements, StripeProvider, injectStripe} from 'react-stripe-elements';


class Achat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      panier : this.props.panier,
      modal: false,
      ValeurPromo: 0,
      CodePromo: ""
    };
  }

  toggle= (e) => {
      this.setState({
        modal: !this.state.modal,
      })
    }

    handlePromoChange = event => {
      this.setState({
        CodePromo: event.target.value
      });
    }

    enterPressed = event =>{
      var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            this.verifPromo();
        }
    }

    onBlurPromo = event =>{
      this.verifPromo();
    }

    verifPromo = () =>{
      console.log("VERIFICATION DU CODE PROMO");
    }

  componentDidUpdate = (prevProps) => {
    if(prevProps.panier !== this.props.panier){
      this.setState({
        panier: this.props.panier
      })
    }
  }


  render(){

    const InjectedBillingForm = injectStripe(BillingForm)

    /* ------------- APERCU ------------------- */
    var returnPanier = [];
    var totalPanier = [];
    var displayButton = "buttonStripe"
    var montantPanier = parseFloat(Math.round(31.90*this.state.panier.length*100) /100 - this.state.ValeurPromo).toFixed(2);
    if (montantPanier ==="0.00"){displayButton = "buttonStripeHide"}else{displayButton = "buttonStripe"}

    for (var i = 0; i < this.state.panier.length; i++){

      var Dedicace = this.state.panier[i].dedicace;
      var Name = this.state.panier[i].name;
      var Book = this.state.panier[i].book;
      var topOffset = 10 + 250*(i+1);
      var styleTopOffset = {top: topOffset};

      returnPanier.push(
        <div key = {i} className = "ShopItemAchat">
          <img className = "ImgLivreAchat" alt = "Monde Arlina livre personnalisé enfant aperçu" src = "img/Book/Monde Arlina/Arlina_1.png"/>
          <div className = "LivreTitle">
            {Book}
          </div>
          <div className = "PrixAchat">
            31.90€
          </div>
        </div>
      )
    }

    totalPanier.push(
      <div>
        <p className = "BottomBar">________________</p>
        <div className = "SubTotal">
          <div className = "SubTotalTitle">Sous-total </div>
          <div className = "PrixSubtotal">{montantPanier}€</div>
        </div>
        <div className = "SubTotal">
          <div className = "SubTotalTitle">Frais de Livraison </div>
          <div className = "PrixSubtotal">0€</div>
        </div>
        <p className = "BottomBar">________________</p>
        <div className = "SubTotal">
          <div className = "SubTotalTitle">Code Promo </div>
          <input className = "InputInside"
            type="text"
            value={this.state.CodePromo}
            onChange={this.handlePromoChange}
            placeholder="Saisissez votre code"
            id="CodePromo"
            onKeyPress={this.enterPressed}
            onBlur={this.onBlurPromo}
          />
        </div>
        <p className = "BottomBar">________________</p>

        <div className = "SubTotal">
          <div className = "TotalTitle">Total </div>
          <div className = "PrixTotal">{montantPanier}€</div>
        </div>
      </div>
    )

  return(
  <div className = "PagePaiementGlobal">
    <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
      <ModalHeader toggle={this.toggle}>Aperçu du Panier</ModalHeader>
      <ModalBody>
          {returnPanier}
          {totalPanier}
      </ModalBody>
    </Modal>

    <div className="Colonne_Gauche_Paiement">
      <p className = "Title_Paiement"> Paiement Sécurisé   </p><img style = {{width:'300px', marginBottom:'20px'}} src ="img/pictos/Stripe_Paiement.png"/>
      <Button className="Button_voir_panier" onClick={(e)=>this.toggle(e)}> Voir le panier</Button>

      <div className = "PaymentForm">
        <div className = "Title_PaymentForm">Informations de Livraison</div>
        <StripeProvider apiKey="pk_test_0IMcMatLvhq5MxMbvdGfYdoZ">
                <Elements>
                    <InjectedBillingForm/>
                </Elements>
        </StripeProvider>
      </div>



    </div>
    <div className = "Colonne_Droite_Paiement">
        <p className = "Title_Achat">Aperçu du Panier  </p>
        <p className = "BottomBar">________________</p>
        {returnPanier}
        {totalPanier}
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
