## Projeto Playground Functions

 
### 1 - Crie uma função usando o operador &&

Considerando isso, implemente na função  `compareTrue`, um código que ao receber dois parâmetros booleanos deve:

    -   Retornar  `true`  se ambos os valores forem verdadeiros;
    -   Retornar  `false`  se um ou ambos os parâmetros forem falsos.


### 2 - Crie uma função que calcule a área de um triângulo

Escreva uma função com o nome  `calcArea`  que receba um valor de base (chamado  `base`) e outro de altura (chamado  `height`) de um triângulo e retorne o cálculo da sua área.


### 3 - Crie uma função que divida a frase

Escreva uma função com o nome  `splitSentence`, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

    Exemplo: se a função receber a string  `"go Trybe"`, o retorno deverá ser  `['go', 'Trybe']`.


### 4 - Crie uma função que use concatenação de strings

Escreva uma função com o nome  `concatName`  que, ao receber uma array de strings, retorne uma string com o formato  `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array.
    

### 5 - Crie uma função que calcule a quantidade de pontos no futebol

    Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

### 6 - Crie uma função que calcule a repetição do maior número

Escreva uma função chamada  `highestCount`  que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
    
### 7 - Crie uma função de Caça ao Rato

Imagine que existem dois gatos, os quais chamaremos de  `cat1`  e  `cat2`, e que ambos estão caçando um mesmo rato chamado  `mouse`. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.

Sabendo disso, crie uma função chamada  `catAndMouse`  que, ao receber a posição de  `mouse`,  `cat1`  e  `cat2`. Calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string  `"os gatos trombam e o rato foge"`.
    

### 8 - Crie uma função FizzBuzz

Crie uma função chamada  `fizzBuzz`  que receba uma array de números e retorne uma array da seguinte forma:

    -   Para cada número do Array que seja divisível apenas por 3, apresente uma string  `"fizz"`;
    -   Para cada número do Array que seja divisível apenas por 5, apresente uma string  `"buzz"`;
    -   Caso o número seja divisível por 3 e 5, retorne a string  `"fizzBuzz"`;
    -   Caso o número não possa ser dividido por 3 nem por 5, retorne a string  `"bug!"`;
    

### 9 - Crie uma função que Codifique e Decodifique

Crie duas funções: a primeira deverá se chamar  `encode`  e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

    a -> 1  
    e -> 2  
    i -> 3  
    o -> 4  
    u -> 5

Ou seja, caso o parâmetro de  `encode`  seja  `"hi there!"`, o retorno deverá ser  `"h3 th2r2!"`.

A segunda função deverá se chamar  `decode`  fazendo o contrário de  `encode` .
    

### 10 - Crie uma função de Lista de Tecnologias

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

```
{
  tech: "NomeTech",
  name: name
}

```

Caso o array venha vazio sua função deve retornar 'Vazio!'

**Bônus**

### 11 - Crie uma função de Número de Telefone

Crie uma função chamada  `generatePhoneNumber`  que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

-   Se a função receber um array com tamanho diferente de 11, a mesma deve retornar  `"Array com tamanho incorreto."`.
    
-   Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais,  `generatePhoneNumber`  deverá retornar a string  `"não é possível gerar um número de telefone com esses valores"`.
    

### 12 - Crie uma função de Condição de existência de um triângulo

Um triângulo é composto de três linhas:  `lineA`,  `lineB`  e  `lineC`. Crie uma função chamada  `triangleCheck`  que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

    -   O retorno da sua função deverá ser um booleano.

    

### 13 - Crie uma função de boas vindas ao Bar da Trybe!

Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Crie a função  `hydrate`  que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. 