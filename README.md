# Manual Básico de JavaScript para Páginas Web

## Integrantes

- Guilherme De Farias Wohl
- Rafael Pellegrini Fodi

## Dupla

Guilherme De Farias Wohl e Rafael Pellegrini Fodi

## Objetivo do trabalho

Este repositório foi montado como um manual de estudo de JavaScript para web. A ideia foi explicar os conceitos com palavras simples e mostrar cada parte funcionando junto com HTML e CSS.

## Estrutura do repositório

- `01_introducao/`
- `02_script_no_html/`
- `03_script_externo/`
- `04_variaveis_tipos_escopo/`
- `05_operadores_e_comparacoes/`
- `06_condicionais/`
- `07_repeticao/`
- `08_funcoes/`
- `09_dom/`

Cada pasta tem um exemplo prático, com arquivos organizados em HTML, CSS e JavaScript.

## Prints de funcionamento

Os prints de funcionamento estão organizados dentro de `prints/`, separados por pasta da atividade:

### Pasta `prints/01`

- `01_tela_inicial.png`
- `02_botao_clicado.png`

### Pasta `prints/02`

- `01_tela_inicial.png`
- `02_script_inline_funcionando.png`

### Pasta `prints/03`

- `01_tela_inicial.png`
- `02_script_externo_funcionando.png`

### Pasta `prints/04`

- `01_tela_inicial.png`
- `02_exemplo_var.png`
- `03_exemplo_let.png`
- `04_exemplo_const.png`
- `05_exemplo_escopo.png`

### Pasta `prints/05`

- `01_tela_inicial.png`
- `02_operacoes_aritmeticas.png`
- `03_comparacoes_obrigatorias.png`
- `04_operadores_logicos.png`

### Pasta `prints/06`

- `01_tela_inicial.png`
- `02_exemplo_if.png`
- `03_exemplo_if_else.png`
- `04_exemplo_switch.png`

### Pasta `prints/07`

- `01_tela_inicial.png`
- `02_exemplo_for.png`
- `03_exemplo_while.png`

### Pasta `prints/08`

- `01_tela_inicial.png`
- `02_funcao_sem_parametro.png`
- `03_funcao_com_parametro.png`
- `04_funcao_com_retorno.png`

### Pasta `prints/09`

- `01_tela_inicial.png`
- `02_ler_valor_e_checked.png`
- `03_textContent.png`
- `04_style.png`
- `05_classList_e_querySelectorAll.png`
- `06_createElement_e_appendChild.png`
- `07_remove.png`

Esses nomes deixam a identificação mais clara na hora da correção.

## O que é JavaScript

JavaScript é uma linguagem de programação usada para fazer a página reagir. Só com HTML e CSS, a página fica montada e com visual. Com JavaScript, dá para clicar em botão, validar campo, trocar texto, esconder coisa, mostrar mensagem e mexer nos elementos da tela.

## Para que JavaScript serve em páginas web

Na prática, ele serve para cuidar do comportamento da página.

Exemplos simples:

- ler o que a pessoa digitou;
- verificar se um checkbox foi marcado;
- comparar valores;
- fazer contas;
- tomar decisões com `if`;
- repetir ações com `for` e `while`;
- mudar texto, cor, classe e estilo dos elementos.

## Como JavaScript se relaciona com HTML e CSS

Os três trabalham juntos:

- HTML monta a estrutura;
- CSS cuida do visual;
- JavaScript cuida da lógica e da interação.

Exemplo do dia a dia:

- o HTML cria um botão e um parágrafo;
- o CSS deixa esse botão bonito;
- o JavaScript faz o clique trocar o texto ou a cor.

## Onde JavaScript pode ser usado no HTML

Existem duas formas bem comuns:

### 1. Script dentro do próprio HTML

Usando a tag `<script>` no mesmo arquivo.

```html
<script>
  alert("Oi");
</script>
```

### 2. Script em arquivo separado

Ligando um arquivo `.js` no final do HTML ou no `head` com cuidado.

```html
<script src="script.js"></script>
```

## Diferença entre script no HTML e script em arquivo separado

### Script no HTML

É bom para exemplo pequeno e teste rápido. O lado ruim é que mistura estrutura e lógica no mesmo arquivo.

### Script em arquivo separado

Fica mais organizado, mais fácil de ler e melhor para manter. Em projeto normal, essa costuma ser a melhor opção.

## Exemplos da parte inicial

### `01_introducao`

O que é:
Uma página simples mostrando a função do JavaScript junto com HTML e CSS.

Para que serve:
Para apresentar a ideia geral da linguagem.

Como eu usei no exemplo:
Criei um botão que troca o texto de uma caixa e mostra que o JavaScript é a parte que faz a página reagir.

Onde está:
`01_introducao/index.html`

### `02_script_no_html`

O que é:
Exemplo com JavaScript escrito dentro da própria página.

Para que serve:
Para mostrar como usar a tag `<script>` direto no HTML.

Como eu usei no exemplo:
O botão chama um código inline que muda um texto na tela.

Onde está:
`02_script_no_html/index.html`

### `03_script_externo`

O que é:
Exemplo com JavaScript em arquivo separado.

Para que serve:
Para mostrar a forma mais organizada de ligar o script na página.

Como eu usei no exemplo:
O HTML puxa um `script.js`, e esse arquivo responde ao clique do botão.

Onde está:
`03_script_externo/index.html`

## Variáveis, tipos e escopo

### O que é uma variável

Variável é um espacinho na memória para guardar um valor.

Exemplos:

```js
let nome = "Guilherme";
let idade = 18;
const aprovado = true;
```

### Como declarar variável em JavaScript

As formas principais são:

- `var`
- `let`
- `const`

### Diferença entre `var`, `let` e `const`

#### `var`

É a forma mais antiga. Hoje em dia costuma ser evitada porque pode causar confusão com escopo.

```js
var cidade = "Porto Alegre";
```

#### `let`

Usa quando o valor pode mudar.

```js
let pontos = 10;
pontos = 20;
```

#### `const`

Usa quando a variável não deve receber outro valor depois.

```js
const curso = "JavaScript";
```

### Quando cada uma pode ser usada

- `const`: quando o valor vai ficar fixo;
- `let`: quando o valor vai mudar;
- `var`: mais para entender código antigo ou demonstrar diferença de escopo.

### O que é escopo global

Quando a variável é criada fora de função e fora de bloco. Ela pode ser usada em várias partes do código.

```js
let turma = "3 ano";
```

### O que é escopo de função

Quando a variável nasce dentro de uma função. Fora dela, ela não existe.

```js
function exemplo() {
  let mensagem = "Oi";
  console.log(mensagem);
}
```

### O que é escopo de bloco

Bloco é o que fica entre chaves, como em `if`, `for` e `while`. `let` e `const` respeitam esse limite.

```js
if (true) {
  let numero = 5;
  console.log(numero);
}
```

### Exemplo com `var`

```js
var serie = "3 ano";
```

### Exemplo com `let`

```js
let faltas = 2;
faltas = 3;
```

### Exemplo com `const`

```js
const escola = "SENAI";
```

### Variável acessível fora de um bloco

```js
if (true) {
  var teste = "aparece fora";
}

console.log(teste);
```

### Variável que não pode ser acessada fora do bloco

```js
if (true) {
  let teste = "só dentro";
}

// console.log(teste);
// Dá erro porque a variável só existe dentro do bloco
```

### Exemplo prático

O que é:
Uma página que mostra `var`, `let`, `const`, escopo global, de função e de bloco.

Para que serve:
Para visualizar a diferença de comportamento entre as declarações.

Como eu usei no exemplo:
Criei botões que escrevem o resultado na tela e um trecho comentado mostra o erro fora do bloco.

Onde está:
`04_variaveis_tipos_escopo/index.html`

## Operadores, comparações e lógica

### Operadores aritméticos principais

- `+` soma
- `-` subtração
- `*` multiplicação
- `/` divisão
- `%` resto da divisão

### Operadores relacionais principais

- `>`
- `<`
- `>=`
- `<=`
- `==`
- `===`
- `!=`
- `!==`

### Operadores lógicos principais

- `&&` significa "e"
- `||` significa "ou"
- `!` significa "não"

### Diferença entre `==` e `===`

`==` compara o valor, mas aceita conversão de tipo.

```js
5 == "5"; // true
```

`===` compara valor e tipo ao mesmo tempo.

```js
5 === "5"; // false
```

### Diferença entre `!=` e `!==`

`!=` compara com conversão de tipo.

```js
5 != "5"; // false
```

`!==` compara valor e tipo.

```js
5 !== "5"; // true
```

### Por que `===` é mais seguro em muitos casos

Porque ele evita comparação enganosa. Com `==`, o JavaScript tenta converter os valores sozinho. Isso pode parecer prático, mas também pode esconder erro. Com `===`, o resultado fica mais confiável porque ele exige mesmo valor e mesmo tipo.

### Comparações obrigatórias

```js
5 == "5";   // true
5 === "5";  // false
5 != "5";   // false
5 !== "5";  // true
0 == false; // true
0 === false; // false
```

### Exemplo prático

O que é:
Página com contas e comparações.

Para que serve:
Para mostrar operadores aritméticos, relacionais e lógicos em um resultado visível.

Como eu usei no exemplo:
Botões executam as comparações obrigatórias e explicam por que `===` é mais seguro.

Onde está:
`05_operadores_e_comparacoes/index.html`

## Estruturas condicionais

Condicionais servem para fazer o código escolher um caminho.

### `if`

```js
if (idade >= 18) {
  console.log("Maior de idade");
}
```

### `if...else`

```js
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

### `switch`

```js
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  default:
    console.log("Outro dia");
}
```

### Exemplo prático

O que é:
Página com três testes de decisão.

Para que serve:
Para ver a diferença entre `if`, `if...else` e `switch`.

Como eu usei no exemplo:
Cada botão roda uma estrutura diferente e mostra a resposta na tela.

Onde está:
`06_condicionais/index.html`

## Estruturas de repetição

Repetição serve para executar uma ação várias vezes.

### `for`

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### `while`

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

### Exemplo prático

O que é:
Página com um exemplo de `for` e um de `while`.

Para que serve:
Para mostrar repetição de forma visual.

Como eu usei no exemplo:
Os botões montam uma lista de números usando cada estrutura.

Onde está:
`07_repeticao/index.html`

## Funções

Função é um bloco de código criado para executar uma tarefa.

### Como declarar uma função

```js
function mostrarMensagem() {
  console.log("Olá");
}
```

### Como chamar uma função

```js
mostrarMensagem();
```

### Função com parâmetro

```js
function saudar(nome) {
  console.log("Olá, " + nome);
}
```

### Função com retorno

```js
function somar(a, b) {
  return a + b;
}
```

### Exemplos obrigatórios

- função sem parâmetro;
- função com parâmetro;
- função que retorna valor.

### Exemplo prático

O que é:
Página com três exemplos de função.

Para que serve:
Para mostrar declaração, chamada, parâmetro e retorno.

Como eu usei no exemplo:
Uma função mostra mensagem, outra recebe nome e outra soma dois números e devolve o resultado.

Onde está:
`08_funcoes/index.html`

## Manipulação de página com JavaScript

Aqui entra o DOM, que é a forma do JavaScript acessar e mudar os elementos da página.

### `document`

Para que serve:
Representa a página inteira.

Como usei:
Usei o `document` como ponto de partida para selecionar e criar elementos.

Pasta:
`09_dom/`

### `getElementById()`

Para que serve:
Pega um elemento pelo `id`.

Como usei:
Usei para acessar input, checkbox, título e lista.

Pasta:
`09_dom/`

### `querySelector()`

Para que serve:
Pega o primeiro elemento que combina com um seletor CSS.

Como usei:
Usei para selecionar um card da página e trocar classe.

Pasta:
`09_dom/`

### `.value`

Para que serve:
Ler o que foi digitado em campo de formulário.

Como usei:
Li o nome digitado pelo usuário e mostrei no resultado.

Pasta:
`09_dom/`

### `.checked`

Para que serve:
Ver se um checkbox está marcado.

Como usei:
Mostrei na tela se a pessoa marcou ou não a opção.

Pasta:
`09_dom/`

### `.textContent`

Para que serve:
Ler ou trocar o texto de um elemento.

Como usei:
Troquei o texto do título e do parágrafo de resposta.

Pasta:
`09_dom/`

### `.style`

Para que serve:
Alterar estilo direto com JavaScript.

Como usei:
Mudei a cor do título por clique.

Pasta:
`09_dom/`

### `classList`

Para que serve:
Adicionar, remover ou alternar classe CSS.

Como usei:
Ativei e removi uma classe de destaque no card.

Pasta:
`09_dom/`

### `addEventListener()`

Para que serve:
Fazer um elemento responder a um evento.

Como usei:
Todos os botões da página usam `click` com `addEventListener()`.

Pasta:
`09_dom/`

### Itens recomendados

#### `querySelectorAll()`

Para que serve:
Selecionar vários elementos.

Como usei:
Marquei vários itens da lista com uma classe.

Pasta:
`09_dom/`

#### `checkValidity()`

Para que serve:
Ver se um formulário está válido.

Como usei:
Chequei se o nome foi preenchido antes de mostrar a mensagem.

Pasta:
`09_dom/`

#### `DOMContentLoaded`

Para que serve:
Esperar o HTML carregar antes de rodar o script.

Como usei:
Esperei a página carregar para preencher uma mensagem inicial.

Pasta:
`09_dom/`

### Diferencial

#### `createElement()`

Para que serve:
Criar um elemento novo.

Como usei:
Criei um item de lista novo.

Pasta:
`09_dom/`

#### `appendChild()`

Para que serve:
Colocar um elemento dentro de outro.

Como usei:
Adicionei o item criado dentro da lista.

Pasta:
`09_dom/`

#### `remove()`

Para que serve:
Remover um elemento.

Como usei:
Apaguei o último item criado da lista.

Pasta:
`09_dom/`

### Exemplo prático principal do DOM

O que é:
Uma página com formulário, checkbox, botões e lista.

Para que serve:
Para mostrar como o JavaScript interage com elementos reais da página.

Como eu usei no exemplo:
Li valor digitado, verifiquei checkbox, troquei texto, alterei cor, adicionei classe, escutei clique, selecionei vários elementos, validei formulário, criei item novo e removi item.

Onde está:
`09_dom/index.html`

## Referências

- MDN Web Docs. JavaScript Guide. Disponível em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- MDN Web Docs. Introduction to HTML. Disponível em: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content
- MDN Web Docs. CSS first steps. Disponível em: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics
- MDN Web Docs. Document Object Model. Disponível em: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- W3Schools. JavaScript Tutorial. Disponível em: https://www.w3schools.com/js/

## Fechamento

Com esse manual, deu para ver que o JavaScript é a parte que faz a página reagir. Ele completa o HTML e o CSS, ajuda a criar interação e também treina bastante lógica. Os exemplos ficaram separados por assunto para facilitar a correção e o estudo.

## Observação final

Foi feito o uso de IA apenas para a estilização e padronização frontend das telas, para uma visualização mais agradável. (e acentuação no texto kkkk)

Ass: Guilherme e Rafa :)
