function TemporaireDAO() {
    var connexion = new Connexion()

    this.save = function (temporaire , callback) {
        var c = connexion.connected();


        c.query('INSERT INTO temporaire SET ?' ,temporaire, function(err , result) {
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