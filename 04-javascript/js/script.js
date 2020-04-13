// 1. Faça um algoritmo que imprima números inteiros de n a 1;

let number = parseInt(prompt('Informe um numero'));
for(let i = number; i>= 1; i--){
    console.log(i);
}


// 2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100;

for(let i= 1; i <= 100; i++){
  
  if(i % 2 !== 0){
      console.log(i);
  }
}


// 3. Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000.

let soma = 0
for (let i=0; i < 1000; i++){
  if(i % 3 === 0 && i % 5 === 0){
    soma += i;
  }
}
console.log(`A soma dos números múltiplos de 3 e 5 é ${soma}!`);


// 4. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que dado um número, print (console.log) a tabuada do mesmo de 1 a 10.

const numero = parseInt (prompt('Digite um número:'));
for (let i = 1; i <= 10; i++) {
  console.log(numero*i);
}


/*5. Faça um programa que leia um array e informe o maior número.*/

const listaNumero = [8, 16, 31, 25, 24, 40, 93, 2, 54];

let maiorNumero = 0;

for (let i = 0; i < listaNumero.length; i++) {
    if (listaNumero[i] > maiorNumero) {
        maiorNumero = listaNumero[i];
    }
}


// 6. Faça um Programa que leia um array de 5 números inteiros e mostre-os. 

const myArray = [10,25,32,46,58];
let contador = 0;

// exemplo com for

for(let i=0; i <= myArray.length; i++){
    console.log(myArray[i]);
}

// exemplo while
while(contador < myArray.length){
    console.log (myArray[contador]);
    contador++;
}



