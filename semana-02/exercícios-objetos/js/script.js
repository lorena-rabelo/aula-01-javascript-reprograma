// 1. Peça que o usuário digite um número de 1 a 12 e retorne o mês correspondente:

let mes = parseInt(prompt('Digite um número de 1 a 12:'));
let nomeMes = ""
switch (mes) {
  case 1:
   nomeMes = "janeiro";
    break;
  case 2:
    nomeMes = "fevereiro";
    break;
  case 3:
    nomeMes = "março";
    break;
  case 4:
    nomeMes = "abril";
    break;
  case 5:
    nomeMes = "maio";
    break;
  case 6:
    nomeMes = "junho";
    break;
  case 7:
    nomeMes = "julho";
    break;
  case 8:
    nomeMes = "agosto";
    break;
  case 9:
    nomeMes = "setembro";
    break;
  case 10:
    nomeMes = "outubro";
    break;
  case 11:
    nomeMes = "novembro";
    break;
  case 12:
    nomeMes = "dezembro";
    break;
}

alert (`O mês é ${nomeMes}!`);

// 2. Peça para inserir o cargo e calcule o valor do salario do dev conforme valores abaixos:


// salario Base: R$ 2.500,00
// salario Junior = salario base + 20%
// salario Pleno = salario base + 35%
// salario senior = salario base + 50% 

let cargo = prompt('Informe sua senioridade: Junior, Pleno ou Senior?');
let salarioBase = parseFloat(2500);
let novoSalario = "";

switch (cargo) {

  case 'Junior':
    novoSalario = salarioBase * 1.2;
    break;
  case 'Pleno':
    novoSalario = salarioBase * 1.35;
    break;
  case 'Senior':
    novoSalario = salarioBase * 1.50;
    break;
}

alert(`O novo salário é R$ ${novoSalario}!`);