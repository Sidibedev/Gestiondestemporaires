var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);

const Sequelize = require('sequelize');
const sequelize = new Sequelize('temporaire', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

const Temporaire = sequelize.define('temporaire', {
  darrive: {
    type: Sequelize.DATE
  },
  harrive : {
    type : Sequelize.TIME
  },
  nom : {
    type : Sequelize.STRING
  },
  prenom : {
    type : Sequelize.STRING
  },
  ddn : {
    type : Sequelize.DATE
  },
  adresse : {
    type : Sequelize.STRING
  },
  cin : {
    type : Sequelize.STRING
  },
  tel :{
    type : Sequelize.STRING
  }
});
function AjouterTemporaire() {
  var darrive = document.getElementById('darrive').value
  var harrive = document.getElementById('harrive').value
  var nom = document.getElementById('nom').value
  var prenom = document.getElementById('prenom').value
  var ddn = document.getElementById('ddn').value
  var adresse = document.getElementById('adresse').value
  var cin = document.getElementById('cin').value
  var tel = document.getElementById('tel').value


  Temporaire.create({
      darrive: darrive,
      harrive: harrive,
      nom : nom,
      prenom : prenom,
      ddn : ddn ,
      adresse : adresse,
      cin: cin ,
      tel: tel
    })
    .then(() => {
      myConsole.log('temporaire ajouté avec success')
      document.getElementById('success').innerHTML = "Temporaire ajouté avec success"
      document.getElementById('darrive').value=''
      document.getElementById('nom').value =''
      document.getElementById('prenom').value =''
      document.getElementById('ddn').value=''
      document.getElementById('adresse').value =''
      document.getElementById('cin').value =''
      document.getElementById('tel').value =''

    })
    .catch(() => {
      myConsole.log('Oups something wrong')
    })
}


 function listeTemporaire() {
   myConsole.log('salut la liste des temporaires');
   Temporaire.findAll().then(temporaires => {
   for (var i = 0; i < temporaires.length; i++) {
    myConsole.log('salut ' + temporaires[i].nom) 
   }
 })

 }
