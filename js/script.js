/*Manipulação dos dados*/ 
var banco = firebase.database().ref("filmes-43ac6-default-rtdb");
banco.set ({ /*SET = cria ou substitui dados*/ 
    1: { /*Identificador*/ 
        nome : 'Inception', 
        ano_lancamento: 2010
    }
    2: {
        nome: 'Mulher Maravilha 2', 
        ano_lancamento: 2020
    }
    
})
