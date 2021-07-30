# Array e Loop For

Como vimos no vídeo, uma das grandes vantagens dos arrays é o armazenamento de várias informações em uma mesma estrutura. Veja o exemplo e pratique:
Copiar
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3
Sempre que precisar armazenar várias informações, o Array é uma boa alternativa e será uma ferramenta muito útil. Observamos que por meio do .length , conseguimos ter acesso à quantidade de elementos contidos nele. Agora, como podemos acessar essas informações? Veja este exemplo:
Copiar
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro
Como podemos observar, é possível acessar os arrays pelo seu índice. O fato curioso é que a primeira posição do array é representada pelo número 0 . Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1 .
Vamos agora adicionar uma nova atividade para nossa lista de arrays. Veja e pratique com o exemplo a seguir:
Copiar
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
Legal, né!? Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift() . Teste em seu console e veja o resultado.
Bacana, já aprendemos a estruturar nosso array, acessar algumas informações e adicionar itens. Espero que esteja animado e se perguntando: "Ok. Agora como faço para remover?" . Simples, veja este exemplo:
Copiar
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]
O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift() . Faça em seu console e veja o resultado.
Outra importante ferramenta é o indexOf() , usado para procurar o índice de um item no Array . Veja o exemplo:
Copiar
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1
Essas são algumas das possibilidades mais utilizadas para manipular arrays. Caso tenha dúvidas, lembre-se sempre de consultar a documentação.
Para fixar faça os próximos exercícios :
Exercício 1
Obtenha o valor "Serviços" do array menu :
Copiar
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = ;

console.log(menuServices);
Exercício 2
Procure o índice do valor "Portfólio" do array menu :
Copiar
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = ;

console.log(indexOfPortfolio);
Exercício 3
Adicione o valor "Contato" no final do array menu :
Copiar
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu);