var tDAO = new TemporaireDAO()

function TemporaireController () {

    this.saveTemporaire = function (nom , prenom , adresse ,cin , tel , ddn, callback) {
        var tempo = new Temporaire(nom,prenom,adresse,cin,tel , ddn)
        return tDAO.save(tempo , callback)
    }
}