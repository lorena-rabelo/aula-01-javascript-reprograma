// 1. Crie um algoritmo que dado um valor, calcule 5% de desconto e retorne o valor do desconto;

let valor = parseInt(prompt('Qual o valor do produto?'));
valor *= 0.05;

alert(`Seu desconto é de: R$${valor},00.`);


// 2. Crie um algoritmo que receba dois valores e exiba o resultado e o resto da divisão entre eles;

const valor1 = parseInt(prompt('Digite um valor:'));
const valor2 = parseInt(prompt('Digite outro valor:'));
const divisao = valor1 / valor2;
const resto = valor1 % valor2;

alert(`O resultado da divisão é ${divisao} e o resto é ${resto}`);


// 3. Crie um algoritmo que calcule quantos dias o usuário viveu, baseado na idade (considere que a pessoa tenha a idade exata);

let idade = parseInt(prompt('Qual sua idade?'));
idade *= 365;

alert(`Você já sobreviveu ${idade} dias! É um guerreirinhx!`)


// 4. Faça um algoritmo que leia a idade de uma pessoa em dias e mostre-a em anos, meses e dias (assuma que todos os meses tem 30 dias, e todos os anos 365 dias);

const idadeEmDias = prompt('Digite quantos dias você já viveu');
const anos = parseInt(idadeEmDias/365);
const meses = parseInt((idadeEmDias%365)/30);
const dias = (idadeEmDias%365)%30;

alert(`Você viveu ${anos} anos, ${meses} meses e ${dias} dias.`);



// 5. Wenceslay gostaria de saber quantos litros por quilômetro, sua moto gastou em média. Ele sabe a distância rodada e a quantidade de litros de combustível que ele utilizou. Crie um algoritmo que mostre a Wenceslay qual a média de combustível gasto por quilômetro.

const distancia = parseInt(prompt('Qual a distância percorrida? em km'));
const litros = parseInt(prompt('Quantos litros de combustível foram gastos?'));
const gasto = distancia / litros;

alert (`Ele gastou ${gasto}km/l no percurso.`)


// 6. O gerente ficou louco! E agora não sabe quanto de desconto deu nos seus produtos para fazer o anúncio. Ele sabe o preço sem o desconto e com o desconto. Faça um algoritmo que calcule o percentual de desconto do produto.


const precoComDesconto = parseFloat(prompt('Qual o preço com desconto?'));
const precoSemDesconto = parseFloat(prompt('Qual o preço sem desconto?'));
let desconto = precoSemDesconto - precoComDesconto;
desconto = (desconto*100/precoSemDesconto);

alert(`O percentual de desconto do produto é de ${desconto}%.`);


// 7. Zenir é responsável por colocar a duração dos filmes no letreiro do cinema comunitário. A duração deve ser mostrada em minutos, mas alguns dos filmes exibidos vieram com a informação em horas e minutos. Ajude Zenir, ela tem mais o que fazer do que ficar fazendo conta.

const duracaoHoras = prompt('Duração em horas');
const duracaoMinutos = prompt('Duração em minutos');

let duracaoTotal = duracaoHoras*60;
duracaoTotal += parseInt(duracaoMinutos);

alert(`O filme possui a duração de ${duracaoTotal} minutos.`);

// 8. Marisa trabalha como cronometrista numa maratona. O resultado da maratona é dado em horas, minutos e segundos. Marisa precisa converter o resultado para segundos. Ajude Marisa.

// Em um minuto tem 60 segundos
// Em uma hora tem 60 minutos
// Em uma hora tem 3600 segundos (60 minutos vezes 60 segundos)

// Resolução 1

const horas = prompt('Digite a duração em horas');
let minutos = prompt('Digite a duração em minutos');
let segundos = prompt('Digite a duração em segundos');

minutos = (horas*60) + minutos; // ou minutos += horas*60;
segundos = minutos*60 + segundos; // ou segundos += minutos*60

alert(`A duração em segundos é ${segundos}.`);


// Resolução 2

const horas01 = prompt('Digite a duração em horas');
const minutos01 = prompt('Digite a duração em minutos');
let segundos01 = prompt('Digite a duração em segundos');

segundos01 += horas01*3600 + minutos01*60;
// segundos01 = segundos01 + horas01*3600 + minutos01*60;

alert(`A duração em segundos é ${segundos01}.`);
