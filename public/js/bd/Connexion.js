var mysql= require('mysql');


function Connexion() {

    this.connexion = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'temporaire'
      });


this.connected = function() {
    this.connexion.connect();
    return this.connexion;
};

}