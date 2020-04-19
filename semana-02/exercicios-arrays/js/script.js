// 1. Crie uma lista (string), que contenha o nome de 10 alunas da reprograma.
Em seguida, verifique o tamanho, e qual aluna está na posição 5.

let alunas = ['Lorena', 'Marisa', 'Débora', 'Gabi', 'Vivi', 'Nayla', 'Ilza', 'Liana', 'Maria', 'Adela'];

console.log(alunas[4]);


// 2. Crie uma lista de matérias que contenha 6 matérias, e mostre qual matéria está na posição 4.

let materia = ['HTML', 'CSS', 'UX', 'Javascript', 'React', 'Lógica'];
console.log(materia[3]);

// 3. Crie uma lista de números fora de ordem e ordene-a utilizando o método .sort();

let numeros = [6, 9, 8, 7, 5];
console.log (numeros.sort());


// 4. Crie uma lista vazia e verifique se o length == 0 (se a lista estiver vazia) .push() inserindo algum valor dentro. Se o length for maior > 0 alert() mostrando o tamanho.

let lista = [];

if (lista.length == 0) {
lista.push(5)
}
if (lista.length >= 0){
  alert (`O tamanho da lista é ${lista.length}`);
}
