/*Arquivo de manipulação de dados no banco*/ 
var firebaseConfig = {
    apiKey: "AIzaSyCY7pWhi-6MOwj982RpBwwgMFDkw1-9go0",
    authDomain: "moviego-3a8c7.firebaseapp.com",
    projectId: "moviego-3a8c7",
    storageBucket: "moviego-3a8c7.appspot.com",
    messagingSenderId: "394871374465",
    databaseURL: "https://moviego-3a8c7-default-rtdb.firebaseio.com",
    appId: "1:394871374465:web:1dda6a609f11c0602ac380"
  };
 
  firebase.initializeApp(firebaseConfig);

  const dbRef = firebase.database().ref('moviego');

/*===========================Edita dados============================== */ 
/*Funções de edição e exclusão de dados definidas antes de listar porque são chamadas 
no onclick do innerHtml da função de exibição*/ 
function editarDado(){
    try{
        alert ('Dado alterado'); 
    }catch(error){
        alert ('Não foi possível editar o dado' + error); 
    }
   
}
/*========================Lista Dados===================================*/ 
let lista = document.getElementById('lista'); 
let dados = ''; 
try{
    let db = dbRef.on('child_added', function(snapshot){
        let titulo = (snapshot.val().titulo_filme); 
        let ano = (snapshot.val().ano_filme); 
        let dir = (snapshot.val().diretor_filme); 
        let fat = (snapshot.val().faturamento_filme); 
     dados = '<tr><td>'+titulo+'</td><td>'+ano+'</td><td>'+dir+ 
     '<td>'+fat+'<td><button onclick="editarDado()" class="btn btn-secondary">Editar</button></td><td><button class="btn btn-secondary" id="excluir">Excluir</button></td></tr>'+dados; 
        lista.innerHTML = dados; 
     })
}catch(error){
    console.log('Não foi possível exibir lista de dados'+error); 
}

/*==========================Insert========================================*/
document.getElementById('inserir').onclick = function(){
    var titulo = document.getElementById('titulo').value; 
    var ano = document.getElementById('ano').value; 
    var diretor = document.getElementById('diretor').value; 
    var faturamento = document.getElementById('faturamento').value; 
    
    try {
        dbRef.push({
                titulo_filme : titulo, 
                ano_filme : ano, 
                diretor_filme: diretor, 
                faturamento_filme : faturamento  
    }); 
    let formulario = document.getElementById('formFilmes'); 
    formulario.reset(); 
    alert('Dados inseridos com sucesso'); 


    }catch(error){
        alert('Não foi possível inserir'+ error)
    }
    
} 
 //Editar: 



