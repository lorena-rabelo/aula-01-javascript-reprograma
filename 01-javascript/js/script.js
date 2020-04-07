// 1. Faça uma mensagem de "Olá Mundo!";

alert('Olá, mundo!');

// 2. Faça uma saída de soma de 2 números;

const numero1 = prompt('Digite um número');
const numero2 = prompt('Digite outro número');

alert(`O resultado da conta é ${parseInt(numero1) + parseInt(numero2)}`);

// 3. Crie um algoritmo que receba nome, endereço e telefone, e depois mostre-os;

const nome = prompt(`Digite seu nome`);
const endereco = prompt(`Digite seu endereço`);
const telefone = prompt(`Digite seu telefone`);

alert(`${nome}, ${endereco} e ${telefone}`);

// 4. Solicite o ano de nascimento do usuário, calcule sua idade e mostre-a;

const ano = prompt('Digite seu ano de nascimento:')
let idade = 2020 - ano;

alert(`Sua idade é ${idade}`);


// 5. Receba do usuários 3 números e calcule a média entre eles.

const num1 = prompt('Digite um número');
const num2 = prompt('Digite mais um número');
const num3 = prompt('Digite outro número');

alert(`${(parseInt(num1) + parseInt(num2)  + parseInt(num3))}/3`);