


document.addEventListener("DOMContentLoaded", function(){
   // após o DOM ter sido carregado,
   // atribui o elemento à variável

   var player1 = prompt("Nome do player1:")
   var aux1 = document.getElementById("nome-azul").innerHTML = player1.substr(0, 10)

   var player2 = prompt("Nome do player2:")
   var aux2 = document.getElementById("nome-vermelho").innerHTML = player2.substr(0, 10)
});




var jogada = 0
var pontosAzul = 0
var pontosVermelho = 0

var pos = [[0, 0, 0],
           [0, 0, 0],
           [0, 0, 0]]

/*teste*/

function main(id, l, c){

    if(pos[l][c] == 0){

        if(pos[l][c] == 0){
            if(jogada % 2 == 0){
                document.getElementById(id).src="./imagens/circulo-azul-1.png"
        
                pos[l][c] = 1
            }else{
                document.getElementById(id).src="./imagens/x-vermelho-1.jpg"
            
                pos[l][c] = 2
            }
            
            jogada++;
            
            ganhar()
        }


    }

}

function newGame(){

    jogada = 0;

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            pos[i][j] = 0
        }
    }

    troca()
}

function troca(){
    document.getElementById("img00").src="./imagens/velha1.jpg"
    document.getElementById("img01").src="./imagens/velha1.jpg"
    document.getElementById("img02").src="./imagens/velha1.jpg"
    document.getElementById("img10").src="./imagens/velha1.jpg"
    document.getElementById("img11").src="./imagens/velha1.jpg"
    document.getElementById("img12").src="./imagens/velha1.jpg"
    document.getElementById("img20").src="./imagens/velha1.jpg"
    document.getElementById("img21").src="./imagens/velha1.jpg"
    document.getElementById("img22").src="./imagens/velha1.jpg"
}

function ganhar(){

    var vitoriaAzul = 0
    var vitoriaVermelho = 0

    for(var i = 0; i < 3; i++){

            if(pos[i][0] == 1){
                if(pos[i][1] == 1){
                    if(pos[i][2] == 1){
                        vitoriaAzul++
                    }
                }
            }

            if(pos[0][i] == 1){
                if(pos[1][i] == 1){
                    if(pos[2][i] == 1){
                        vitoriaAzul++
                    }
                }
            }

            if(pos[i][0] == 2){
                if(pos[i][1] == 2){
                    if(pos[i][2] == 2){
                        vitoriaVermelho++
                    }
                }
            }

            if(pos[0][i] == 2){
                if(pos[1][i] == 2){
                    if(pos[2][i] == 2){
                        vitoriaVermelho++
                    }
                }
            }
   
    }

    if(pos[0][0] == 1){
        if(pos[1][1] == 1){
            if(pos[2][2] == 1){
                vitoriaAzul++
            }
        }
    }

    if(pos[0][2] == 1){
        if(pos[1][1] == 1){
            if(pos[2][0] == 1){
                vitoriaAzul++
            }
        }
    }

    if(pos[0][0] == 2){
        if(pos[1][1] == 2){
            if(pos[2][2] == 2){
                vitoriaVermelho++
            }
        }
    }

    if(pos[0][2] == 2){
        if(pos[1][1] == 2){
            if(pos[2][0] == 2){
                vitoriaVermelho++
            }
        }
    }
    

    if(vitoriaAzul >0){
        pontosAzul++
        vitoriaAzul = 0
        newGame()
        document.getElementById("pontuacao-azul").value=pontosAzul.toFixed(0)
        swal('AZUL GANHOU!')
    }

    if(vitoriaVermelho > 0){
        pontosVermelho++
        vitoriaVermelho = 0
        newGame()
        document.getElementById("pontuacao-vermelho").value=pontosVermelho.toFixed(0)
        swal('VERMELHO GANHOU!')
    }
   

}

function zerar(){
    document.getElementById("pontuacao-azul").value=0
    document.getElementById("pontuacao-vermelho").value=0
}