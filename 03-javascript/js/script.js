// 6. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. Em um triângulo válido, a soma dos três ângulos é igual a 180º.

// const ang1 = parseFloat(prompt('Digite um ângulo:'));
// const ang2 = parseFloat(prompt('Digite outro ângulo:'));
// const ang3 = parseFloat(prompt('Digite outro ângulo:'));
// const soma = ang1 + ang2 + ang3

// if (soma === 180) {
//   alert(`A soma desses ângulos determinam um triângulo válido.`);
// } else {
//   alert(`A soma desses ângulos não determinam um triângulo válido.`);
// }

// 7. Elaborar um algoritmo que lê 2 valores a e b e informa se são múltiplos ou não.

// 8. Crie um código que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo. (Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu, não recebe nada.)

let resultadoDoJogo = prompt('Digite o resultado do jogo do seu time. [V] para vitória, [D] para derrota e [E] para empate.')


switch (resultadoDoJogo) {
  case 'V':
    alert(`Parabéns, seu time venceu e ganhou 3 pontos.`);
    break;

  case 'D':
    alert(`Seu time perdeu, não ganhou nenhum ponto.`);
    break;

  default:
    alert(`Seu time empatou, ganhou somente 1 ponto.`);

}

// 9. Elabore um programa que dada a idade de um nadador classifica-o em uma das seguintes categorias:

// Infantil A = 5 - 7 anos
// Infantil B = 8-10 anos
// Juvenil A = 11-13 anos
// Juvenil B = 14-17 anos
// Adulto = maiores de 18 anos

const idadeDoNadador = parseInt (prompt('Precisamos identificar a categoria do nadador. Qual a idade dele?'));