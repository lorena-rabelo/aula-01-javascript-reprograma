alert('Olá, Reprograma! Sou um js externo!');

// 1 . Com base no exemplo do link do slide 1 (o que é javascript), crie um arquivo com um button, que ao clicar exiba a mensagem “Bem vindo ao Reprograma”. 
// Obs. Utilize javascript externo.


// let botao = document.querySelector('button');

// botao.addEventListener('click', clicar);

// function clicar() {
//   alert ('Bem vindo ao Reprograma!')
// }


// 2. Crie 3 variáveis, e exiba no console o tipo de cada uma, utilizando o typeof

// let filme = 'Parasita'; 
// let numeroDeEstatuetas = 4;
// let livro = true; 

// console.log (typeof filme);
// console.log (typeof numeroDeEstatuetas);
// console.log (typeof livro);


// 3. Crie um botao, que ao ser clicado, exiba:
// - 1 console.log()
// - 1 console.error()
// - 1 console.info()


let segundoBotao = document.querySelector('.p');   //selecionado através da classe

segundoBotao.addEventListener('click', clicar);

 function clicar() {
  console.log();
  console.error();
  console.info();
}