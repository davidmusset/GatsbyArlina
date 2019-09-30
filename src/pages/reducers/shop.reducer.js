export default function(shop={book:"", name:"",genre:"Fille", dedicace:"", image:"", typo:"min",
apparence:{
  StylePeau:1,
  CouleurPeau:0,
  StyleCheveux:1,
  CouleurCheveux:0,
  StyleYeux:1,
  CouleurYeux:1,
  StyleLunettes:0,
  CouleurLunettes:0,
  StyleAutres:1,
  CouleurAutres:1
}
}, action) {

  var shopCopy = {...shop}

  if(action.type === 'updateNameGenreTypo') {
    shopCopy.genre = action.genre;
    shopCopy.name = action.name;
    shopCopy.typo = action.typo;
    return shopCopy
  }
  if(action.type==="updateBookName") {
      shopCopy.book = action.book;
      shopCopy.genre = "Fille";
      shopCopy.name = "";
      shopCopy.dedicace = "";
      shopCopy.image = "";
      shopCopy.typo = "min";
      shopCopy.apparence = {
        StylePeau:1,
        CouleurPeau:0,
        StyleCheveux:1,
        CouleurCheveux:0,
        StyleYeux:1,
        CouleurYeux:1,
        StyleLunettes:0,
        CouleurLunettes:0,
        StyleAutres:1,
        CouleurAutres:1
      }

      return shopCopy
  }
  if(action.type==="updateApparence") {
      shopCopy.apparence.StylePeau=action.StylePeau;
      shopCopy.apparence.CouleurPeau=action.CouleurPeau;
      shopCopy.apparence.StyleCheveux=action.StyleCheveux;
      shopCopy.apparence.CouleurCheveux=action.CouleurCheveux;
      shopCopy.apparence.StyleYeux=action.StyleYeux;
      shopCopy.apparence.CouleurYeux=action.CouleurYeux;
      shopCopy.apparence.StyleLunettes=action.StyleLunettes;
      shopCopy.apparence.CouleurLunettes=action.CouleurLunettes;
      shopCopy.apparence.StyleAutres=action.StyleAutres;
      shopCopy.apparence.CouleurAutres=action.CouleurAutres;
      return shopCopy
  }
  if(action.type==="updateDedicace") {
      shopCopy.dedicace = action.dedicace
      return shopCopy
  }
  if(action.type==="updateImage") {
      shopCopy.image = action.image
      return shopCopy
  }
  if(action.type==="reinitShop") {
      shopCopy={name:"",genre:"Fille", dedicace:"", image:"", typo:"min",
      apparence:{
        StylePeau:1,
        CouleurPeau:0,
        StyleCheveux:1,
        CouleurCheveux:0,
        StyleYeux:1,
        CouleurYeux:1,
        StyleLunettes:0,
        CouleurLunettes:0,
        StyleAutres:1,
        CouleurAutres:1
      }
    }
      return shopCopy
  }
  return shopCopy
}
