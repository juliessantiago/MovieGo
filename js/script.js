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

/*========================Lista Todos os dados do banco===================================*/ 
document.onload = exibeLista(); 

function exibeLista(){
        let lista = document.getElementById('lista'); 
        let dados = ''; 
        try{
            dbRef.on('child_added', function(snapshot){ 
                let id = snapshot.key; 
                let titulo = snapshot.val().titulo_filme; 
                let ano = snapshot.val().ano_filme; 
                let dir = snapshot.val().diretor_filme; 
                let fat = snapshot.val().faturamento_filme; 
            dados = '<tr><td id ="altTitulo">'+titulo+'</td><td>'+ano+'</td><td>'+dir+ 
            '<td>'+fat+'<td><button id="botaoEditar" onclick = "exibeFormEdita(\''+id+'\')" class="btn btn-secondary">Editar</button></td><td><button class="btn btn-secondary" onclick = "excluiDado(\''+id+'\')">Excluir</button></td></tr>'+dados; 
                lista.innerHTML = dados; //Essa não é a forma mais correta de inserir o elemento button e passar o parâmetro pra função
            })
        }catch(error){
            console.log('Não foi possível exibir lista de dados'+error); 
        }
}

/*============================Exclui Dado===================================*/
function excluiDado(id){
    console.log('Chamou função excluir')
        try{
            let  ref = firebase.database().ref('moviego/'+id); 
            ref.remove()
            alert('Dado excluído com sucesso'); 
            exibeLista(); 
            exibeRecentes()
            
        }catch(error){
            alert('Não foi possível excluir o dado '+error); 
        }
}
/*=========================Edita dado específico============================*/
let formularioEdicao = document.getElementById('formEdita')
formularioEdicao.style.display = 'none'

function exibeFormEdita(id){
    formularioEdicao.style.display = 'block'
    let inputId = document.getElementById('idEdita'); 
    inputId.value = id; 
}

function editaDado() {
    console.log('Função Edita foi chamada')
    var id = document.getElementById('idEdita').value; 
    var titulo = document.getElementById('tituloEdita').value; 
    var ano = document.getElementById('anoEdita').value; 
    var diretor = document.getElementById('diretorEdita').value; 
    var faturamento = document.getElementById('faturamentoEdita').value; 

    try {
        let alteraDado = firebase.database().ref('moviego').child(id); 
        alteraDado.update({
                titulo_filme : titulo, 
                ano_filme : ano, 
                diretor_filme: diretor, 
                faturamento_filme : faturamento  
        })  
        alert ('Dado alterado com sucesso')
        formularioEdicao.style.display = 'none'
        exibeLista(); 
        exibeRecentes()

    }catch(error){
        alert('Não foi possível alterar dado'+ error)
    }
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
        formulario.reset(); //Limpa campos do formulário 
        alert('Dados inseridos com sucesso'); 

        exibeRecentes()
    }catch(error){
        alert('Não foi possível inserir'+ error)
    }
    
} 
/*=====================Mostra os mais recentes===========================*/
document.onload = exibeRecentes(); 
function exibeRecentes(){
    let listaRecentes = document.getElementById('listaRecentes'); 
    let dadosRecentes = ''; 
    try{
        dbRef.orderByChild("ano_filme").limitToFirst(5).on("child_added", function(snapshot){ 
            dadosRecentes = '<tr><td>'+snapshot.val().titulo_filme+'</td><td>'+snapshot.val().ano_filme+'</td></tr>'+dadosRecentes; 
                listaRecentes.innerHTML = dadosRecentes;
        })
    }catch(error){
        console.log('Não foi possível exibir lista de dados'+error); 
    }
}

