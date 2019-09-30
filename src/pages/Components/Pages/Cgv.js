import React, { Component } from 'react';
import {connect} from 'react-redux';

class Cgv extends Component {
  render(){
  return(
    <div className="CorpsStandard">
      <h1> Conditions générales de vente du site internet Arlina</h1>

        <div className = "Titre_CGV">1. USAGE ET SECURITE</div>

        <div className = "Bullet_CGV">1.1. Le site https://www.arlina.fr est détenu et exploité par Miracle Capital. La société se réserve le droit de modifier ou d’annuler les termes et conditions et le contenu du site à tout moment à sa seule volonté et sans préavis.</div>

        <div className = "Bullet_CGV">1.2. Les termes et conditions de la ventre s’appliquent à tous les visiteurs du site Arlina et doivent être lus attentivement avant toute utilisation.</div>

        <div className = "Bullet_CGV">1.3. Arlina fait de son mieux pour vous fournir l’information la plus à jour et exacte sur son site internet.</div>

        <div className = "Bullet_CGV">1.4. Le site Web de Arlina est pour votre usage personnel et non-commercial. Vous ne pouvez pas modifier, copier, distribuer, transmettre, afficher, exécuter, reproduire, publier, licencier, créer des œuvres dérivées, transférer ou vendre toute information obtenue à partir de ce site.</div>

        <div className = "Bullet_CGV">1.5. Vous n’êtes pas autorisé à créer un lien vers ce site ou à utiliser tout ou partie du site web de Arlina pour un but qui est frauduleux, illégal, diffamatoire, nuisible, obscène ou répréhensible.</div>

        <div className = "Bullet_CGV">1.6. Vous acceptez que l’Internet n’est pas entièrement sécurisé. Arlina s’engage à prendre toutes les mesures nécessaires pour protéger la sécurité des informations de carte de paiement. Arlina ne sera pas légalement responsable de tout dommage que vous pourriez subir à la suite de la perte de d’informations transmises à Arlina, dans le cas ou Arlina n’aurait pas manqué à ses obligations et ne serait pas à l’origine de cette perte.</div>

        <div className = "Bullet_CGV">1.7. Arlina ne sera pas légalement responsable pour tout dommage direct ou indirect, consécutif ou fortuit, y compris (sans limitation) les bénéfices ou les revenus, perte d’opportunité, les coûts des produits ou services de remplacement, perte ou détérioration de données ou l’interruption d’activité, résultant de toute utilisation du site, dans le cas ou Arlina n’aurait pas manqué à ses obligations et ne serait pas à l’origine de ces dommages.</div>

        <div className = "Titre_CGV">2. GENERAL</div>

        <div className = "Bullet_CGV">2.1. Rien dans ces conditions n’est destiné à affecter vos droits.</div>

        <div className = "Bullet_CGV">2.2. Le livre est conçu pour des enfants de 3 à 6 ans</div>

        <div className = "Bullet_CGV">2.3 Les marques déposées et logos figurant sur le site sont la propriété de Arlina. Vous n’êtes pas autorisé à utiliser ces derniers sans l’autorisation écrite de Arlina et vous acceptez que cette utilisation puisse constituer une violation des droits de Arlina.</div>

        <div className = "Bullet_CGV">2.4. Tous les termes et conditions contenus dans le présent document sont inclus dans un contrat avec Arlina.</div>

        <div className = "Bullet_CGV">2.5. Le site Web de Arlina peut contenir des liens vers des sites tiers. Le fonctionnement de ces sites est hors du contrôle de Arlina et vous les utilisez à vos propres risques.</div>

        <div className = "Bullet_CGV">2.6. Arlina recueille et stocke vos informations personnelles sans les divulguer à aucune tierce personne et s’engage à assurer que la confidentialité de vos renseignements personnels est protégée.</div>

        <div className = "Bullet_CGV">2.7. Vous acceptez que Arlina puisse vous contacter de temps en temps avec des offres et des promotions par e-mail ou par téléphone. Vous pouvez toutefois vous inscrire sur une liste d’opposition au démarchage téléphonique à l’adresse suivante : http://www.bloctel.gouv.fr/</div>

        <div className = "Bullet_CGV">2.8. Pour tout problème ou litige, vous pouvez faire appel au médiateur de vente à l’adresse suivante : http://www.mtv.travel/?page=Accueil</div>

        <div className = "Titre_CGV">3. ACHAT </div>

        <div className = "Bullet_CGV">3.1. La seule langue de contractualisation d’un contrat en ligne est le français.</div>

        <div className = "Bullet_CGV">3.2. Vous devez avoir 18 ans ou plus pour acheter un livre.</div>

        <div className = "Bullet_CGV">3.3. Il est de votre responsabilité de vérifier que le livre que vous avez acheté correspond à vos attentes.</div>

        <div className = "Bullet_CGV">3.4. Vous êtes entièrement responsable d’inscrire vos informations correctement sur le formulaire d'achat en ligne. En soumettant un formulaire d'achat en ligne vous garantissez à Arlina que tous les détails que vous avez fournis sont exacts.</div>

        <div className = "Bullet_CGV">3.5. Vous recevez la confirmation de votre achat par courriel seulement. Arlina n’envoie pas de confirmation par la poste ou par sms.</div>

        <div className = "Bullet_CGV">3.6 A la suite d'un achat, vous disposez d'un délai de rétractation de 14 jours conformément à la loi pour changer d'avis et nous renvoyer le livre à vos frais. Une fois le livre reçu, Arlina vous remboursera. Une fois ce délai passé, tout achat est définitif.</div>

        <div className = "Titre_CGV">4. TARIFS </div>

        <div className = "Bullet_CGV">4.1. Le prix (incl TVA) d’un livre est indiqué sur le site Arlina dans la section d'Achat et sur la HomePage (section FAQ).</div>

        <div className = "Bullet_CGV">4.2. Les achats ne peuvent être effectuées que par le site Internet Arlina.</div>

        <div className = "Bullet_CGV">4.3. Toute carte de crédit ou de débit est accepté pour le règlement. Le paiement se fait via le module sécurisé Stripe</div>

        <div className = "Bullet_CGV">4.4. Le paiement total est demandé à l'achat.</div>

        <div className = "Titre_CGV">5. CONTACT</div>

        <div className = "Bullet_CGV">Si vous souhaitez nous contacter, nos coordonnées sont les suivantes : – email : contact@arlina.fr – courrier : Miracle Capital, 23 rue d'aboukir, 75002 Paris </div>

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
)(Cgv);
