var tDAO = new TemporaireDAO()

function TemporaireController () {

    this.saveTemporaire = function (nom , prenom , ddn , adresse ,cin , tel , callback) {
        var tempo = new Temporaire(nom,prenom,ddn,adresse,cin,tel)
        return tDAO.save(tempo , callback)
    }
}