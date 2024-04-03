alert('Boas vindas ao jogo: Número Secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt (`Escolha um Número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto) {
            alert ('O Numero Secreto é menor que '+chute);
        }else{
            alert ('O Numero Secreto é maior que '+chute);
        }

        tentativas++
    }
    
 }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
 