// 1. Faça um algoritmo que receba uma letra e determine se é uma vogal ou consoante(Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);

// Resolvendo com IF
const letra = prompt('Digite uma letra: (minúscula)');

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
  alert(`A letra ${letra} é uma vogal!`);
}
else {
  alert(`A letra ${letra} é uma consoante!`);
}

// Resolvendo com SWITCH
const letra = prompt('Digite uma letra do alfabeto.');
switch (letra) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    alert(`A letra ${letra} é uma vogal!`);
    break;
  default:
    alert(`A letra ${letra} é uma consoante!`);
    break;
}


// 2. Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente;

const diaSemana = parseInt(prompt('Digite o dia da semana [1-7]'));

switch (diaSemana) {
  case 1:
    alert(`Domingo`);
    break;
  case 2:
    alert(`Segunda-Feira`);
    break;
  case 3:
    alert(`Terça-Feira`);
    break;
  case 4:
    alert(`Quarta-Feira`);
    break;
  case 5:
    alert(`Quinta-Feira`);
    break;
  case 6:
    alert(`Sexta-Feira`);
    break
  case 7:
    alert(`Sábado`);
    break;
  default:
    alert(`Dia de São Nunca`);
}


// 3. Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem;

let numeroMes = prompt('Digite o número do mês (1-12)');
numeroMes = parseInt(numeroMes);

switch (numeroMes) {
  case 1:
    alert(`Janeiro é o mês ${numeroMes} e possui 31 dias`);
    break;
  case 2:
    alert(`Fevereiro é o mês ${numeroMes} e possui 28 ou 29 dias`);
    break;
  case 3:
    alert(`Março é o mês ${numeroMes} e possui 31 dias`);
    break;
  case 4:
    alert(`Abril é o mês ${numeroMes} e possui 30 dias`);
    break;
  case 5:
    alert(`Maio é o mês ${numeroMes} e possui 31 dias`);
    break;
  case 6:
    alert(`Junho é o mês ${numeroMes} e possui 30 dias`);
    break;
  case 7:
    alert(`Julho é o mês ${numeroMes} e possui 31 dias`);
    break;
  case 8:
    alert(`Agosto é o mês ${numeroMes} e possui 31 dias`);
    break;
  case 9:
    alert(`Setembro é o mês ${numeroMes} e possui 30 dias`);
    break;
  case 10:
    alert(`Outubro é o mês ${numeroMes} e possui 31 dias`);
    break;
  case 11:
    alert(`Novembro é o mês ${numeroMes} e possui 30 dias`);
    break;
  case 12:
    alert(`Dezembro é o mês ${numeroMes} e possui 31 dias`);
    break;
  default:
    alert('Não é um mês conhecido');
}

// 4. Escreva um código que receba dois número e determine qual o maior entre eles;

const num1 = prompt('Digite o primeiro número:');
const num2 = prompt('Digite o segundo número:');

if (num1 > num2) {
    alert(`${num1} é maior que ${num2}`);
} else if (num1 === num2) {
    alert(`${num1} é igual a ${num2}`);
} else {
    alert(`${num2} é maior que ${num1}`);
}


// 5. Escreva um código que receba um número e determine se ele é par ou ímpar, e se é negativo ou positivo;

//Se o número é par, ele é divisivél por dois (ex: 4%2 =0)
//Se o número é  impar, ele não é divisivél por dois (ex: 5%2!=0)
//Se o número for positivo é maior que zero
//Se o número for negativo é menor que zero

const numero = parseInt(prompt('Digite um número'));

if (numero % 2 === 0 && numero > 0) {
    alert(`${numero} é par, e ele é positivo`);
} else if (numero % 2 === 0 && numero < 0) {
    alert(`${numero} é par, e ele é negativo`);
} else if (numero % 2 !== 0 && numero > 0) {
    alert(`${numero} é impar, e ele é positivo`);
} else if (numero % 2 !== 0 && numero < 0) {
    alert(`${numero} é par, e ele é negativo`);
} else {
    alert(`${numero} é um número neutro`);
}



// 6. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. Em um triângulo válido, a soma dos três ângulos é igual a 180º.

const ang1 = parseFloat(prompt('Digite um ângulo:'));
const ang2 = parseFloat(prompt('Digite outro ângulo:'));
const ang3 = parseFloat(prompt('Digite outro ângulo:'));
const soma = ang1 + ang2 + ang3

if (soma === 180) {
  alert(`A soma desses ângulos determinam um triângulo válido.`);
} else {
  alert(`A soma desses ângulos não determinam um triângulo válido.`);
}

// 7. Elaborar um algoritmo que lê 2 valores a e b e informa se são múltiplos ou não.

if (numero1 % numero2 === 0) {
  alert(`${numero1} é múltiplo de ${numero2}`);
} else if (numero2 % numero1 === 0) {
  alert(`${numero2} é múltiplo de ${numero1}`);
} else {
  alert(`${numero1} e ${numero2} não são múltiplos`);
}


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

const idade = parseInt(prompt('Qual a idade do competidor?'));

if (idade >= 5 && idade <= 7) {
    alert('Competidor da categoria Infantil A');
} else if (idade >= 8 && idade <= 10) {
    alert('Competidor da categoria Infantil B');
} else if (idade >= 11 && idade <= 13) {
    alert('Competidor da categoria Juvenil A');
} else if (idade >= 14 && idade <= 17) {
    alert('Competidor da categoria Juvenil B');
} else if (idade >= 18) {
    alert('Competidor da categoria Adulto');
} else {
    alert(`Alguém de ${idade} anos não pode competir`);
}

