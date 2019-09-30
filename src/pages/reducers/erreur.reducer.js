export default function(erreur=false, action) {

  if(action.type ==="erreurNom"){
    erreur = true;
  }
  if(action.type === "reinitNom"){
    erreur = false;
  }

  return erreur
}
