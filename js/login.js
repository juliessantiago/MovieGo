//Configura login e logout do sistema 
var botao_login = document.getElementById('botao_login'); 
var email = document.getElementById('email'); 
var senha = document.getElementById('senha');
var msg = document.getElementById('mensagem'); 
//email = santiago.sjulie@gmail.com
//senha = batatinha 

botao_login.addEventListener('click', function(){
    firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
  .then((result) => {
        console.log('Usuário conectado'); 
        window.location.replace('initial_page.html'); 
  })
  .catch((error) => { //Tomar cuidado porque o firebase bloqueia o user se 
    //várias tentativas de login forem feitas 
    alert ('Email ou senha incorretos'); 
  });
}); 

