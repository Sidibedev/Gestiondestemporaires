function TemporaireDAO() {
    var connexion = new Connexion()

    this.save = function (temporaire , callback) {
        var c = connexion.connected();


        var sql = 'INSERT INTO temporaire(nom , prenom, adresse , cin , tel , ddn)  VALUES ?';
        
        c.query(sql ,[temporaire], function(err , result) {
            if(err) {
                alert(err.message)
                callback(false)
            }
            else
            callback(true)
        
            c.end()
        })
    }
}