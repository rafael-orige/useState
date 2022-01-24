<h1>useState: Conceitos e Usabilidade</h1>

<img src="https://blog.rocketseat.com.br/content/images/2019/03/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png" />

<br/>

<h2>Como funcionam as variáveis ao utilizar o React:</h2>

Quando usamos o React para desenvolver um projeto, precisamos ter em mente o modo que ele funciona e como ele se difere do uso padrão do Javascript que estamos acostumados.
Ao nos adentrarmos nos estudos de React pela primeira vez percebemos que as variáveis são tratadas de forma diferente por este framework, mas por que?

Começaremos com um exemplo simples. Vamos ver o que acontece ao tentarmos redefinir uma variável e porquê isso ocorre.

var numero = 0;

Se tivermos o número 0 em uma variável com o nome _numero_ e criarmos uma função para adicionar +1 para cada vez que apertarmos um botão, o que aconteceria é que esse número se manteria como 0 na tela e se tornaria 1 no console.

<img src="https://i.imgur.com/p8Bgzek.png" />

<h2>Por que isso acontece?</h2>
Isso acontece porque ao mudar uma informação do componente, tudo será executado novamente, assim a variável retornará seu valor para 0.
E é assim que o aprendizado do useState se torna imprescindível para dominarmos o React.

<br/>
<br/>
<br/>

<h2>O que é o useState:</h2>

O useState é um dos principais hooks da biblioteca React e ele nos permite atribuir e gerenciar um estado de um componente funcional.
Nele nós declaramos uma constante com um array, onde é passado dois valores, sendo o nome que será usado para acessar a variável em sí e o outro se torna uma função com o propósito de alterar esta variável. Por fim, o resultado desta constante retorna a função useState com o valor da variável passado como argumento.

<br/>
<br/>
<br/>

<h2>Como utilizar o useState:</h2>

Para utilizarmos o useState, primeiro precisamos importar o hook da biblioteca React.

<img src="https://i.imgur.com/CuKADSA.png" />

E agora, seguindo a premissa de criar um contador, iremos criar a variável utilizando o useState.
Começamos com _const [numero¹, setNumero²] = useState(0)³_ para definirmos a nossa variável.

- 1: Nome da variável.
- 2: Função que será utilizada para alterar esta variável.
- 3: Função do useState que atribui o valor inicial.

<img src="https://i.imgur.com/XLccspE.png" />

Por fim, ao invés de utilizarmos o símbolo de = para alterar o valor, iremos utilizar a função que foi passada como segundo valor para fazer este trabalho.

_setNumero(numero + 1)_

 <img src="https://i.imgur.com/SxaQfAO.png" />

 <hr/>

Agora temos aquilo que nós queriamos no início, um contador funcional utilizando React.

<img src="https://i.imgur.com/m2QH5J0.gif" />

<hr/>
