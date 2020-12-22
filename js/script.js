/*Arquivo de manipulação de dados no banco*/ 
var database = firebase.database();

function writeUserData() {
    firebase.database().ref().set({
      titulo: 'Mulher Maravilha', 
      lancamento: '2017', 
      diretor: 'Patty Jenkins', 
      faturamento: '821,8 milhões'
    });
  }