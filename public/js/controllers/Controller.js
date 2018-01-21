var electron = require ('electron')


function AjouterTemporaire() {
    
    var nom = document.getElementById("nom").value
    var prenom = document.getElementById("prenom").value
    var ddn = document.getElementById("ddn").value
    var adresse = document.getElementById("adresse").value
    var cin = document.getElementById("cin").value
    var tel = document.getElementById("tel").value
    
   var temp = new TemporaireController()
   temp.saveTemporaire(
       nom , 
       prenom,
       ddn,
       adresse,
       cin,
       tel,
       function(result) {
           if (result === true) {
               alert('bien joué')
           }else{
               alert('oups something wrong here')
           }
       }
   )
}