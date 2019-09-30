export default function(panier=[], action) {

  var panierCopy = [...panier]

  if(action.type === 'addPanier') {
    panierCopy.push({
    genre : action.genre,
    name : action.name,
    typo : action.typo,
    book : action.book,
    dedicace : action.dedicace,
    apparence : {
      StylePeau:action.StylePeau,
      CouleurPeau:action.CouleurPeau,
      StyleCheveux:action.StyleCheveux,
      CouleurCheveux:action.CouleurCheveux,
      StyleYeux:action.StyleYeux,
      CouleurYeux:action.CouleurYeux,
      StyleLunettes:action.StyleLunettes,
      CouleurLunettes:action.CouleurLunettes,
      StyleAutres:action.StyleAutres,
      CouleurAutres:action.CouleurAutres
    }
  });
    return panierCopy
  }

  if(action.type==="deletePanier") {
      panierCopy.splice(action.position,1)
      return panierCopy
  }

  if(action.type==="deleteAllPanier") {
      panierCopy = []
      return panierCopy
  }

  return panierCopy
}
