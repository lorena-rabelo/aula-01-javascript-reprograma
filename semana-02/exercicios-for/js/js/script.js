// 1. Faca um loop que mostre 15 vezes uma mensagem ("Ola Reprograma")

for (var i = 0; i < 15; i++) {
  console.log("Olá, Reprograma <3");
}


// 2. Criem array de string, percorram (for of) exibindo cada texto do array.

// let livros = ['Cem anos de solidão', 'Ensaio sobre a cegueira', 'Eu receberia as piores notícias de seus lindos lábios'];

// for (element of livros) {
//   console.log(element);
// }

// 3. Criem um array de objetos e percorra (for of) mostrando apenas uma propriedade.
// [
// {nome: "",
// idade:0
// },
// {nome: "",
// idade: 1
// }
// ]
// x console.log(x.propriedade);

let doguinhos = [
  {raca: "pitbull",
  porte: "médio",
 },
 {raca: "pequinês",
  porte: "pequeno",
 },
]

for (element of doguinhos) {
    console.log(element.raca);
 }


//5. Faça um programa que receba 10 números, 
//calcule e imprima a soma dos números pares e a soma dos números ímpares.

// - for para ler 10 prompt 


let numero = 0, somaImpares = 0, somaPares = 0,  contPar = 0, contImpar = 0;

for (let num = 1; num <= 10; num++) {
    numero = parseInt(prompt(`Digite o número ${num} :`));

    if (numero % 2 === 0) {
        contPar++;
        somaPares += numero;
    }
    else {
        contImpar++; 
        somaImpares += numero;
    }
}

console.log(somaImpares, 'soma de numero impares');
console.log(somaPares, 'soma de numeros pares');
console.log(contPar, 'total de pares');
console.log(contImpar, 'total de impares');

// 6.Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:

// total de homens;
// total de mulheres;
// média das idades dos homens;
// média dos pesos das mulheres.

let sexo = "";
let peso = 0;
let idade = 0;
let totalM = 0;
let totalF = 0;
let mediaIdadeMulher = 0;
let mediaIdadeHomem = 0;
let mediaPesoMulher = 0;
let mediaPesoHomem = 0;

for (let i = 1; i <= 10; i++) {
    sexo = (prompt(`Digite M para masculino e F para feminino:`));
    idade = parseInt(prompt(`Digite a idade:`));
    peso = parseInt(prompt(`Digite o peso:`));

    if (sexo === "F") {
        totalF++;
        mediaIdadeMulher += idade;
        mediaPesoMulher += peso;
    }
    else {
        totalM++;
        mediaIdadeHomem += idade;
        mediaPesoHomem += peso;
    }
}

alert(`O número total de mulheres é ${totalF}, a média de peso feminina é ${mediaPesoMulher/totalF} e a média de idade é ${mediaIdadeMulher/totalF}.`)
alert(`O número total de homens é ${totalM}, a média de peso masculina é ${mediaPesoHomem/totalM} e a média de idade é ${mediaIdadeHomem/totalM}.`)