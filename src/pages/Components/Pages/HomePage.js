import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {UncontrolledCarousel, Form, Input, Button,Label } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.shop.name,
      genre: this.props.shop.genre,
      backgroundF:"#FFF",
      backgroundM:"#FFF",
      contactname:'',
      contactemail:'',
      contactphone:'',
      contacttext:'',
      robot:false,
      create:false,
      message:"",
      messageButton:"Envoyer"
    };

  }

  handleChangeGenre = (genre) => {
    this.setState({genre: genre});
    if(genre==="Garcon"){
      this.setState({
        backgroundM : "#EBEFEE",
        backgroundF : "#FFF"
      })
    }
    else{
      this.setState({
        backgroundF : "#EBEFEE",
        backgroundM : "#FFF"
      })
    }
 }

  handleChangeForm = (e) => {
    this.setState({name: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newBook(this.state.name, this.state.genre)
    this.setState({create: true});
  }

  handleContactForm = (e) =>{
    if(this.state.contactemail==="" || this.state.contactname==="" || this.state.contactphone ==="" || this.state.contacttext === ""){
      this.setState({message : "Veuillez remplir tous les champs"})
    }
    else{
      if(this.state.robot){
      this.sendMail(
        this.state.contactemail,
        "contact@arlina.fr",
        this.state.contactname,
        this.state.contactphone,
        this.state.contacttext)
      }
      else{
        this.setState({message : "Êtes-vous un robot ?"})
      }
    }
  }

  sendMail = (senderMail, receiverMail, contactName, contactPhone, feedback) => {
    this.setState({message: "", messageButton: "En cours d'envoi..."})
    var template_params = {
     "reply_to": senderMail,
     "from_name": contactName,
     "to_name": "Arlina",
     "phone_number": contactPhone,
     "from_mail": senderMail,
     "message_html": feedback
      }

    window.emailjs.send(
      'gmail',
      "template_A67DjIA4",
      template_params, 'user_Y2qK9QLD6A6a5QDXGMNNi')
      .then(res => this.setState({messageButton: "Message Envoyé!"}) )
      .catch(err => console.log('Failed to send feedback. Error: ', err))
  }


  handleChangeName = (e) => {
    this.setState({contactname: e.target.value});
  }
  handleChangeEmail = (e) => {
    this.setState({contactemail: e.target.value});
  }
  handleChangePhone = (e) => {
    this.setState({contactphone: e.target.value});
  }
  handleChangeText = (e) => {
    this.setState({contacttext: e.target.value});
  }
  handleChangeRobot = (e) => {
    this.setState({robot: e.target.checked});
  }

  ContactSubmit = (e) =>{
    e.preventDefault();
  }


  render(){

    if (this.state.create === true) {
      return <Redirect to='/creer' />
    }

    const items = [
      {
        src: 'img/carousel_1/carousel_1_3.png',
        caption: ''
      },
      {
        src: 'img/carousel_1/carousel_1_1.png',
        caption: ''
      },
      {
        src: 'img/carousel_1/carousel_1_2.png',
        caption: ''
      }
    ];



  return(
    <div className = "HomePage">


      {/* Section Carousel + choix prenom */}
      <div className = "Section_1_Form_Carousel">

        <h1> Faites voyager votre enfant dans le monde fantastique d'Arlina ! </h1>
        <div className = "Carousel_1"> <UncontrolledCarousel items={items} indicators={false} /> </div>
        <Form className = "Create_Form" onSubmit={this.handleSubmit}>
            <div className = "Form_name"> <Input type="name" name="name" id="name" value = {this.state.name} placeholder="Prénom de votre enfant" onChange={this.handleChangeForm}/> </div>
            <div className = "pictos_genre" style={{backgroundColor:this.state.backgroundF}} onClick = {() =>this.handleChangeGenre("Fille")}> <img  value="Fille" src='img/pictos/Picto_fille.png' alt="Picto female"/> Fille </div>
            <div className = "pictos_genre" style={{backgroundColor:this.state.backgroundM}} onClick = {() =>this.handleChangeGenre("Garcon")}> <img  value="Garcon" src='img/pictos/Picto_garcon.png' alt="Picto male"/> Garçon</div>
            <Button type = "Submit" className = "Create_link" onClick = {() => window.scrollTo(0, 0)}> Créer votre histoire</Button>
        </Form>
      </div>


      {/* Section Comment ca marche */}
      <div id = "Fonctionnement" className = "Section_2_CommentMarche">
        <h2> Comment votre enfant devient-il le héros d'une histoire magique ? </h2>
        <div className = "Fonctionnement">
          <div className = "CommentCadre"> <img className = "pictoFonction" src = "img/pictos/RUBRIQUE_2_PLUME.png" alt="Dessin Personnalisation Arlina enfants"/> <p>Donnez le <b>prénom</b> de votre enfant au héros de l'histoire </p> </div>
          <div className = "CommentCadre"> <img className = "pictoFonction" src = "img/pictos/RUBRIQUE_2_PHOTO.png" alt="Livre Personnalisé Arlina enfants"/><p> Personnalisez l'apparence du héros et ajoutez une <b> photo</b> </p></div>
          <div className = "CommentCadre"> <img className = "pictoFonction" src = "img/pictos/RUBRIQUE_2_CHOUETTE.png" alt="Livraison gratuite du livre personnalisé pour l enfant"/><p> Recevez votre livre personnalisé une semaine plus tard <b>chez vous</b> </p></div>
        </div>
        <Link className = "Create_link" to='/creer' onClick = {() => window.scrollTo(0, 0)}> Créer votre histoire !</Link>
      </div>


      {/* Section Questions frequentes */}
      <div id = "Questions" className = "Section_3_Questions">
        <h2> Questions fréquentes : </h2>

        {/* DESKTOP */}
        <div className = "Questions">
          <div className = "PictoQ_Cadre">
            <img className = "pictoFonction" src = "img/pictos/RUBRIQUE_3_ENFANTS.png" alt="Audience livre personnalise arlina"/>
            <div className = "Question_Cadre">
              <p className = "Title_Question"> A qui s'adressent nos histoires ? </p>
              <p>Nos histoires sont parfaites pour les enfants de <b>3 à 6 ans</b></p>
              <p>Elles ont été pensées pour être lues de <b>nombreuses fois</b> ! </p>
              <p>Chacune d'entre elles accompagnent l'enfant dans son <b>développement</b> durant la petite enfance </p>
            </div>
          </div>
          <div className = "PictoQ_Cadre">
            <img className = "pictoFonction" src = "img/pictos/RUBRIQUE_3_LIVRE.png" alt="A quoi ressemble un livre personnalisé Arlina pour enfants"/>
            <div className = "Question_Cadre">
              <p className = "Title_Question"> A quoi ressemblent nos livres ? </p>
              <p> Nos livres mesurent <b>17x21cm </b> et sont en papier cartonnés brochés</p>
              <p> Ils contiennent environ 40 pages dont une <b>page de dédicace</b> que vous pouvez personnaliser</p>
              <p> Tous nos livres sont fabriqués en <b>France avec du papier recyclé! </b></p>
            </div>
          </div>
          <div className = "PictoQ_Cadre">
            <img className = "pictoFonction" src = "img/pictos/RUBRIQUE_3_PORTEFEUILLE.png" alt="Combien coûtent nos livres persnnalisés pour enfants Arlina"/>
            <div className = "Question_Cadre">
              <p className = "Title_Question"> Combien cela <br/>coute-t-il ? </p>
              <p> Le prix d'un livre est de <b>34.90€ </b> </p>
              <p> A cela s'ajoutent les frais de livraison de <b>4.90€</b> en France métropolitaine (<b>Colissimo</b>)</p>
              <p> Enfin, vous pouvez choisir d'ajouter un <b>emballage cadeau personnalisé</b>. Ce dernier coûte <b>6.90€</b></p>
            </div>
          </div>
        </div>
      </div>

        {/* MOBILE */}
        <Carousel id = "Questions" className = "FonctionCarousel" autoPlay={true} interval={3000} showThumbs={false} showStatus={false} infiniteLoop={true}>
            <div className = "PictoQ_Cadre_Mobile">
              <div className = "mobileslider">
                <img className = "pictoFonction" src = "img/pictos/RUBRIQUE_3_ENFANTS.png" alt="Audience livre personnalise arlina"/>
                <div className = "Question_Cadre">
                  <p className = "Title_Question"> A qui s'adressent nos histoires ? </p>
                  <p>Nos histoires sont parfaites pour les enfants de <b>3 à 6 ans</b></p>
                  <p>Elles ont été pensées pour être lues de <b>nombreuses fois</b> ! </p>
                  <p>Chacune d'entre elles accompagnent l'enfant dans son <b>développement</b> durant la petite enfance </p>
                </div>
              </div>
            </div>
            <div className = "PictoQ_Cadre_Mobile">
              <div className = "mobileslider">
                <img className = "pictoFonction" src = "img/pictos/RUBRIQUE_3_LIVRE.png" alt="A quoi ressemble un livre personnalisé Arlina pour enfants"/>
                <div className = "Question_Cadre">
                  <p className = "Title_Question"> A quoi ressemblent nos livres ? </p>
                  <p> Nos livres mesurent <b>17x21cm </b> et sont en papier cartonnés brochés</p>
                  <p> Ils contiennent environ 40 pages dont une <b>page de dédicace</b> que vous pouvez personnaliser</p>
                  <p> Tous nos livres sont fabriqués en <b>France avec du papier recyclé! </b></p>
                </div>
              </div>
            </div>
            <div className = "PictoQ_Cadre_Mobile">
              <div className = "mobileslider">
                <img className = "pictoFonction" src = "img/pictos/RUBRIQUE_3_PORTEFEUILLE.png" alt="Combien coûtent nos livres persnnalisés pour enfants Arlina"/>
                <div className = "Question_Cadre">
                  <p className = "Title_Question"> Combien cela coute-t-il ? </p>
                  <p> Le prix d'un livre est de <b>34.90€ </b> </p>
                  <p> A cela s'ajoutent les frais de livraison de <b>4.90€</b> en France métropolitaine (<b>Colissimo</b>)</p>
                  <p> Enfin, vous pouvez choisir d'ajouter un <b>emballage cadeau personnalisé</b>. Ce dernier coûte <b>6.90€</b></p>
                </div>
              </div>
            </div>
        </Carousel>


        {/* Section Claims 3 Best */}
        <div className ="GlobalBest">
          <div className = "Best">
            <div className="BestClaim">
              <img className = "pictoClaim" src = "img/pictos/Best/RUBRIQUE_4_PAIEMENT.png" alt="Paiement sécurisé via Stripe"/>
              <p className = "TitleClaim"> Paiement Sécurisé </p>
            </div>
            <div className="BestClaim">
              <img className = "pictoClaim" src = "img/pictos/Best/RUBRIQUE_4_LIVRAISON.png" alt="Livraison rapide en une semaine"/>
              <p className = "TitleClaim"> Livraison en 8 jours </p>
            </div>
            <div className="BestClaim">
              <img className = "pictoClaim" src = "img/pictos/Best/RUBRIQUE_4_MADE_IN_FRANCE.png" alt="Livre personnalisé fabriqué en France"/>
              <p className = "TitleClaim"> Fabriqué en France </p>
            </div>
          </div>
        </div>



     {/* Section Review des clients */}

        <div id="Avis" className = "AvisClient">
          <div className = "TitreAvis"><img className = "" src="img/pictos/RUBRIQUE_5_DEBUT_BANNIERE.png" alt="fin bandeau"/><p className = "Title_Avis"> Ce qu'ils disent de nous </p> <img className = "" src="img/pictos/RUBRIQUE_5_FIN_BANNIERE.png" alt="fin bandeau"/></div>

          {/* Desktop */}
          <div className = "BandeauAvis">
            <div className = "Avis_Cadre">
                <img className = "PictoClient" src="img/Clients/Anne.png" alt="Avis client Anne sur le livre personnalisé pour sa fille"/>
                <p className = "Review">"Mon enfant de 5 ans a beaucoup apprécié ce livre. L'histoire est très bien faite, et parfaitement adaptée à son âge. Je recommande ! "</p>
                <FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" />
                <p>Anne M</p>
            </div>

            <div className = "Avis_Cadre">
                <img className = "PictoClient" src="img/Clients/Richard.png" alt="Avis client Richard sur le livre personnalisé pour son neveu"/>
                <p className = "Review">"Le cadeau parfait pour mon neveu ! Son livre favori depuis 3 mois, il ne le lâche pas !"</p>
                <FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" />
                <p>Richard L</p>
            </div>

            <div className = "Avis_Cadre">
                <img className = "PictoClient" src="img/Clients/Ben.png" alt="Avis client Benoit sur le livre personnalisé pour son fils"/>
                <p className = "Review">"Une belle histoire pleine de valeurs, dans laquelle notre enfant s'identifie pleinement. Les tours de magie sont très amusants !"</p>
                <FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" />
                <p>Benoit et Sophie G</p>
            </div>

          </div>


          {/* Mobile */}
          <Carousel id = "Avis" className = "AvisCarousel" autoPlay={true} interval={3000} showThumbs={false} showStatus={false} infiniteLoop={true}>
              <div className = "Review_Cadre_Mobile">
                  <div className = "Avis_Cadre">
                      <img className = "PictoClient" src="img/Clients/Anne.png" alt="Avis client Anne sur le livre personnalisé pour sa fille"/>
                      <p className = "Review">"Mon enfant de 5 ans a beaucoup apprécié ce livre. L'histoire est très bien faite, et parfaitement adaptée à son âge. Je recommande ! "</p>
                      <FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" />
                      <p>Anne M</p>
                  </div>
              </div>
              <div className = "Review_Cadre_Mobile">
                  <div className = "Avis_Cadre">
                      <img className = "PictoClient" src="img/Clients/Richard.png" alt="Avis client Richard sur le livre personnalisé pour son neveu"/>
                      <p className = "Review">"Le cadeau parfait pour mon neveu ! Son livre favori depuis 3 mois, il ne le lâche pas!"</p>
                      <FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" />
                      <p>Richard L</p>
                  </div>
              </div>
              <div className = "Review_Cadre_Mobile">
                  <div className = "Avis_Cadre">
                      <img className = "PictoClient" src="img/Clients/Ben.png" alt="Avis client Benoit sur le livre personnalisé pour son fils"/>
                      <p className = "Review">"Une belle histoire pleine de valeurs, dans laquelle notre enfant s'identifie pleinement. Les tours de magie sont très amusants!"</p>
                      <FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" /><FontAwesomeIcon className="star" icon="star" />
                      <p>Benoit et Sophie G</p>
                  </div>
              </div>
          </Carousel>


        </div>
     {/* Section Review des clients */}

      <div id="Contact" className = "Contact">
       <h2> Contactez-nous</h2>

       <Form className = "Contact_Form" onSubmit={this.ContactSubmit}>
           <div className = "Contact_id"> <Input type="name" name="name" id="name" value = {this.state.contactname} placeholder="Nom" onChange={this.handleChangeName}/> </div>
           <div className = "Contact_id"> <Input type="email" name="email" id="email" value = {this.state.contactemail} placeholder="Email" onChange={this.handleChangeEmail}/> </div>
           <div className = "Contact_id"> <Input type="phone" name="phone" id="phone" value = {this.state.contactphone} placeholder="Téléphone" onChange={this.handleChangePhone}/> </div>
           <div className = "Contact_id"> <Input type="textarea" style={{height:"200px"}} name="text" id="text" value = {this.state.contacttext} placeholder="Message" onChange = {this.handleChangeText}/></div>
           <Label check><Input type="checkbox" name="robot" value="yes" onChange = {this.handleChangeRobot}/>Je ne suis pas un robot</Label>
           <div className="FormMessage"> {this.state.message} </div>
           <div></div><Button style={{marginTop:"20px"}} type = "Submit" className = "Create_link" onClick = {this.handleContactForm}> {this.state.messageButton}</Button>
       </Form>

      </div>



    </div>
  )
}
}

// Envoi de Redux
function mapDispatchToProps(dispatch) {
  return {
    newBook  : function(name,genre) {
        dispatch( {type: 'updateNameGenreTypo',
          name : name,
          genre: genre,
          typo: ""
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
)(HomePage);
