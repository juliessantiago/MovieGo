
var botao_login = document.getElementById('botao_login'); 
var email = document.getElementById('email'); 
var senha = document.getElementById('senha');
var msg = document.getElementById('mensagem'); 

botao_login.addEventListener('click', function(){
    firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
  .then((result) => {
        console.log('Usuário conectado'); 
  })
  .catch((error) => {
    console.log(error.message); 
  });
}); 