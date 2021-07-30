# Variáveis

Vamos praticar o que aprendemos no vídeo? 💪

Abra o seu VS Code e faça os exercícios a seguir.

__Dica:__ Com o plugin code runner que vimos no vídeo você pode executar o seu código no VS Code com o atalho ```ctrl + alt + n```. Confira mais dicas sobre o VS Code no conteúdo!

1. Crie uma constante chamada ```myName``` e atribua a ela o seu nome (Exemplo: Carolina);

2. Crie uma constante chamada ```birthCity``` e atribua a ela a sua cidade natal;

3. Crie uma variável chamada ```birthYear``` e atribua a ela o ano em que você nasceu;

4. Utilize o ```console.log()``` para imprimir as constantes e variáveis que você criou;

5. Altere o valor atribuído à variável ```birthYear``` para 2030. Faça um ```console.log(birthYear)``` novamente para ver o que acontece!

6. Altere o valor atribuído à constante ```birthCity``` . Faça um ```console.log(birthCity)``` novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

# Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

Agora é a hora da mão ~~na massa~~ no código!

No exemplo abaixo, temos as informações de um paciente. Utilize o operador ```typeof``` para imprimir qual o tipo das variáveis ```patientId``` , ```isEnrolled``` , ```patientInfo``` e ```patientEmail``` . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: ```console.log(typeof patientId)``` retornará ```number``` .

```
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
```

O que aconteceria se tentássemos checar qual o tipo da variável ```patientAge``` ? Experimente executar o comando ```console.log(typeof patientAge)``` e veja o que acontece! Ué...mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é ```undefined``` , como você pôde observar no retorno do ```console.log(typeof patientAge)``` . Experimente também trocar o valor de ```patientId = 50``` para ```patientId = '50'``` . Execute novamente um ```console.log()``` para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma ```string``` pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.

Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators disponível [nesse link](https://www.w3schools.com/js/js_operators.asp) se tiver dúvidas. Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

1. Crie uma variável chamada ```base``` e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;

2. Crie uma variável chamada ```area``` e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o ```console.log()``` para imprimir as variáveis e checar os resultados das operações!

3. Crie uma variável chamada ```perimetro``` e atribua a ela a soma de todos os lados do retângulo;

# Condições If e Else

Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. Então vamos praticar o que aprendemos no vídeo?

1. Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

    * Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"

    * Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"

    * Se a nota for menor que 60, imprima "Você foi reprovada(o)"

3. Crie uma estrutura condicional utilizando o ```if``` , ```else if``` e ```else``` para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

4. Altere o valor da nota para verificar se as condições que você implementou funcionam;

# Switch e Case

Você com certeza está super feliz com seus novos conhecimentos sobre JS, não é?! 🎉 Então vamos praticar mais um pouco antes de chegar na sessão de exercícios. 
__Vamos!!!__

1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: ```'aprovada'``` , ```'lista'``` ou ```'reprovada'``` ;

2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for ```'aprovada'``` , ```'lista'``` ou ```'reprovada'``` . 
Como ```default``` , imprima a mensagem de ```'não se aplica'``` .

A estrutura ```switch/case``` é utilizada quando queremos executar diferentes ações. A expressão que passamos para o ```switch``` é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em ```default``` .

# Exercícios

Agora a prática

Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional ( ```if/else``` e ```switch/case``` ), operadores aritméticos ( ```+``` , ```-``` , ```*``` , ```/``` , ```%``` ) e operadores lógicos ( ```>``` , ```<``` , ```&&``` , ```||``` ). Para que consiga executar seus códigos recomendamos que utilize a extensão ```Code Runner``` , você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code .

1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, ```a``` e ```b``` , definidas no começo com os valores que serão operados. Faça programas para:
    * Adição (a + b)

    * Subtração (a - b)

    * Multiplicação (a * b)

    * Divisão (a / b)

    * Módulo (a % b)

__Dica:__ [Neste link](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math) você encontra mais detalhes sobre operadores matemáticos 😉

2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne ```true``` se os ângulos representarem os ângulos de um triângulo e ```false``` , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

    * [Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus](https://blogdoenem.com.br/triangulos-propriedades/).

    * Um ângulo será considerado inválido se não tiver um valor positivo.

6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

    * Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

    * Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

    * Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    Exemplo: ```bishop``` (bispo) -> ```diagonals``` (diagonais)

7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    * Porcentagem >= 90 -> A

    * Porcentagem >= 80 -> B

    * Porcentagem >= 70 -> C

    * Porcentagem >= 60 -> D

    * Porcentagem >= 50 -> E

    * Porcentagem < 50 -> F

    *O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

8. Escreva um programa que defina três números em variáveis e retorne ```true``` se pelo menos uma das três for par. Caso contrário, ele retorna ```false``` .

    * __Bonus:__ use somente um ```if``` .

9. Escreva um programa que defina três números em variáveis e retorne ```true``` se pelo menos uma das três for ímpar. Caso contrário, ele retorna ```false``` .

    * __Bonus:__ use somente um ```if``` .

10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

    * Atente que, sobre o custo do produto, incide um imposto de 20%.

    * Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

    * O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
        * ```valorCustoTotal = valorCusto + impostoSobreOCusto```
        * ```lucro = valorVenda - valorCustoTotal``` (lucro de um produto)

11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

    * A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

        * __INSS (Instituto Nacional do Seguro Social)__

            * Salário bruto até R$ 1.556,94: alíquota de 8%

            * Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

            * Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

            * Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

        * __IR (Imposto de Renda)__

            * Até R$ 1.903,98: isento de imposto de renda
            * De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

            * De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

            * De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

            * Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

    * __Exemplo__ : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

        * O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

        * Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

        * Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

            * R$ 2.670,00: salário com INSS já deduzido;

            * 7.5%: alíquota de imposto de renda;

            * R$ 142,80 parcela a se deduzir do imposto.

        * Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

        * O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

__Resultado:__ R$ 2.612,55.

__Dica:__ que tal identificar as alíquotas com variáveis de nomes explicativos?
