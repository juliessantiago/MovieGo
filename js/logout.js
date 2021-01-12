//Configura logout

botao_logout.addEventListener('click', function(){
    firebase.auth().signOut().then(function() {
      window.location.replace('index.html'); 
    }).catch(function(error) {
      alert('Ocorreu um erro'+error); 
    });
    
})