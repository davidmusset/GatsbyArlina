import React, { Component } from "react";
import { CardElement } from "react-stripe-elements";
import {connect} from 'react-redux';
import feathers from '@feathersjs/feathers';
import feathersjsRestClient from '@feathersjs/rest-client';

class BillingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      adress: "",
      adress2: "",
      city:"",
      postCode:"",
      email:"",
      phoneNumber:"",
      isCardComplete: false,
      panier : this.props.panier
    };
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.panier !== this.props.panier){
      this.setState({
        panier: this.props.panier
      })
    }
  }

  validateForm() {
    return (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.adress !== "" &&
      this.state.city !== "" &&
      this.state.postCode !== "" &&
      this.state.email !== "" &&
      this.state.phoneNumber !== "" &&
      this.state.isCardComplete
    );
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleCardFieldChange = event => {
    this.setState({
      isCardComplete: event.complete
    });
  }

  handleSubmitClick = async event => {

    event.preventDefault();

    var customizations = [];
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
    var promoCode="";

    for (var i = 0; i<this.state.panier.length; i++){

      if(this.state.panier[i].book === "MondeArlina"){
        bookType = 1;
      }
      else{
        bookType = 2;
      }
      if(this.state.panier[i].genre === "Garcon"){
        gender = 1;
      }
      else{
        gender = 2;
      }
      if(this.state.panier[i].typo === "min"){
        typography = 1;
      }
      else{
        typography = 2;
      }
      name = this.state.panier[i].name;
      skin.style = this.state.panier[i].apparence.StylePeau;
      skin.color = this.state.panier[i].apparence.CouleurPeau;
      hairs.style = this.state.panier[i].apparence.StyleCheveux;
      hairs.color = this.state.panier[i].apparence.CouleurCheveux;
      eyes.style = this.state.panier[i].apparence.StyleYeux;
      eyes.color = this.state.panier[i].apparence.CouleurYeux;
      glasses.style = this.state.panier[i].apparence.StyleLunettes;
      glasses.color = this.state.panier[i].apparence.CouleurLunettes;
      others.style = this.state.panier[i].apparence.StyleAutres;
      others.color = this.state.panier[i].apparence.CouleurAutres;
      dedication = this.state.panier[i].dedicace;
      image = "image uploade"


      customizations.push(
        {
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
      )
  };

    var customerName = this.state.firstName + " "+ this.state.lastName;
    var customer = {name : customerName, email : this.state.email};
    var customerAdress = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      line1: this.state.adress,
      line2 : this.state.adress2,
      city: this.state.city,
      postcode: this.state.postCode,
      county : "Null",
      country: "France",
    }

    console.log("paiement",customer, customerAdress, customizations);

    const feathersApp = feathers()
    const restClient = feathersjsRestClient("http://localhost:8080")
    feathersApp.configure(restClient.fetch(window.fetch));

    const cart = feathersApp.service('cart')
    const order = feathersApp.service('order')

    cart
      .create({
        customizations : customizations
      })
      .then(result => {
        //result is the sent cartData with other information
        console.log("resultat1",result);
        return this.props.stripe
          .createToken()
          .then(payload => {
            return{
              cart:result,
              stripePayload : payload
            }
          })
      })
      .then(result => {
        console.log("resultat2",result);
        return order.create({
          cartUuid: result.uuid,
          customer : customer,
          billing : customerAdress,
          shipping : customerAdress,
          promoCode : promoCode,
          paymentGatewayResult : result.stripePayload.token
        })
      })
      .then(
        patchResult => {
        //redirection page paiement validé
      }, error => {
        // REDIRECTION EN CAS ERREUR PAIEMENT
        console.log(error);
      })


  }

  render() {



    return (
      <form className = "GlobalForm" onSubmit={this.handleSubmitClick}>

        <div className="BillingForm">

          <div className = "FirstInputStyle">
            <p className = "TextPaymentForm"> Prénom</p>
            <input className="InputInside"
              type="text"
              value={this.state.firstName}
              onChange={this.handleFieldChange}
              placeholder="Timothée"
              id="firstName"
            />
          </div>
          <div className = "InputStyle">
            <p className = "TextPaymentForm"> Nom</p>
            <input className = "InputInside"
              type="text"
              value={this.state.lastName}
              onChange={this.handleFieldChange}
              placeholder="Musset"
              id="lastName"
            />
          </div>
          <div className = "InputStyle">
          <p className = "TextPaymentForm"> E-mail</p>
          <input className = "InputInside"
            type="text"
            value={this.state.email}
            onChange={this.handleFieldChange}
            placeholder="timothee@exemple.fr"
            id="email"
          />
          </div>
          <div className = "InputStyle">
          <p className = "TextPaymentForm"> Adresse</p>
          <input className = "InputInside"
            type="text"
            value={this.state.adress}
            onChange={this.handleFieldChange}
            placeholder="23 rue des petits champs"
            id="adress"
          />
          </div>
          <div className = "InputStyle">
            <p className = "TextPaymentForm"> Adresse 2</p>
          <input className = "InputInside"
            type="text"
            value={this.state.adress2}
            onChange={this.handleFieldChange}
            placeholder="Code 82B Bâtiment B 3e étage"
            id="adress2"
          />
          </div>
          <div className = "LastInputStyle">
            <p className = "TextPaymentForm"> Ville</p>
            <div className = "InputInside">
              <input className = "InputInsideLast"
                type="text"
                value={this.state.city}
                onChange={this.handleFieldChange}
                placeholder="Limoux"
                id="city"
              />
            <p className = "TextPaymentForm2"> Code Postal</p>
                <input className = "InputInsideLast2"
                  type="text"
                  value={this.state.postCode}
                  onChange={this.handleFieldChange}
                  placeholder="11300"
                  id="postCode"
                />
            </div>
          </div>

        </div>

        <div className = "Title_PaymentForm">Informations de Paiement</div>
        <CardElement
          onChange={this.handleCardFieldChange}
        />

        <button> Payer </button>

      </form>
    );
  }
}

function mapStateToProps(state) {
  return { panier: state.panier }
}

export default connect(
    mapStateToProps,
    null
)(BillingForm);
