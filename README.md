# Guia de JavaScript com HTML e CSS

[![App Platform](https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg)](https://instagram.com/r.pellegrinii)

## O que e JavaScript

JavaScript e uma linguagem de programacao usada pra dar vida as paginas da web. So com HTML e CSS, a pagina fica montada e bonita, mas parada. Com JavaScript, ela pode reagir ao que a pessoa faz.

Por exemplo:

- clicar em botao;
- digitar num campo;
- marcar checkbox;
- mudar texto na tela;
- validar formulario.

## Pra que JavaScript serve em paginas web

Na pratica, JavaScript serve pra controlar comportamento e logica da pagina.

Ele pode:

- fazer contas;
- comparar valores;
- tomar decisoes;
- repetir acoes;
- alterar elementos do HTML;
- responder a eventos.

Entao, quando uma pagina muda sem precisar recarregar tudo, quase sempre tem JavaScript no meio.

## Como JavaScript se relaciona com HTML e CSS

Os tres trabalham juntos:

- HTML monta a estrutura;
- CSS cuida da aparencia;
- JavaScript cuida das acoes.

Se eu quiser criar um botao que muda a cor de um texto, por exemplo:

- o HTML cria o botao e o texto;
- o CSS define o visual;
- o JavaScript faz a troca acontecer quando clicar.

## Onde JavaScript pode ser usado no HTML

O JavaScript pode aparecer no HTML de duas formas mais comuns:

### 1. Dentro da propria pagina

Usando a tag `<script>`.

Exemplo:

```html
<script>
  alert("Oi");
</script>
```

### 2. Em arquivo separado

Ligando um arquivo `.js` no HTML.

Exemplo:

```html
<script src="script.js"></script>
```

## Diferenca entre script no HTML e script em arquivo separado

### Script dentro do HTML

E bom pra teste rapido ou exemplo pequeno. O problema e que mistura muita coisa no mesmo arquivo.

### Script em arquivo separado

Fica mais organizado e mais facil de manter. Em projeto de verdade, isso costuma ser melhor.

## Variaveis

Variavel e um lugar pra guardar um valor.

Exemplos:

```js
let nome = "Guilherme";
let idade = 18;
const aprovado = true;
```

Os valores podem ser texto, numero, verdadeiro ou falso, e por ai vai.

## Como declarar variaveis

Em JavaScript, as formas principais sao:

- `var`
- `let`
- `const`

### var

Forma mais antiga. Ainda funciona, mas hoje em dia costuma ser evitada porque pode gerar confusao com escopo.

```js
var cidade = "Porto Alegre";
```

### let

Usa quando o valor pode mudar.

```js
let pontos = 10;
pontos = 20;
```

### const

Usa quando a variavel nao deve receber outro valor depois.

```js
const pi = 3.14;
```

## Diferenca entre var, let e const

Resumo direto:

- `var` e antiga e nao e tao segura;
- `let` pode mudar;
- `const` nao deve ser reatribuida.

Hoje, o mais comum e usar:

- `const` por padrao;
- `let` quando precisar mudar o valor;
- `var` mais pra entender codigo antigo.

## Escopo de variavel

Escopo e o lugar onde a variavel existe e pode ser usada.

### Escopo global

Quando a variavel foi criada fora de blocos e funcoes, ela pode ser acessada em varias partes do codigo.

```js
let turma = "3 ano";

function mostrarTurma() {
  console.log(turma);
}
```

### Escopo de funcao

Se a variavel foi criada dentro de uma funcao, ela so existe ali.

```js
function exemplo() {
  let mensagem = "Oi";
  console.log(mensagem);
}
```

### Escopo de bloco

Bloco e o que fica dentro de chaves, tipo em `if`, `for` e `while`.

`let` e `const` respeitam isso.

```js
if (true) {
  let numero = 5;
  console.log(numero);
}
```

## Exemplo com variavel acessivel fora do bloco

Com `var`, isso pode acontecer:

```js
if (true) {
  var teste = "aparece fora";
}

console.log(teste);
```

## Exemplo com variavel que nao pode ser acessada fora do bloco

Com `let`, nao funciona fora:

```js
if (true) {
  let teste = "so dentro do bloco";
}

// console.log(teste);
// Da erro porque essa variavel so existe dentro do bloco
```

## Operadores aritmeticos

Os principais sao:

- `+` soma
- `-` subtracao
- `*` multiplicacao
- `/` divisao
- `%` resto da divisao

Exemplo:

```js
let resultado = 10 + 5;
```

## Operadores relacionais

Servem pra comparar valores.

Os mais usados:

- `>`
- `<`
- `>=`
- `<=`
- `==`
- `===`
- `!=`
- `!==`

## Operadores logicos

Servem pra juntar condicoes.

- `&&` quer dizer "e"
- `||` quer dizer "ou"
- `!` quer dizer "nao"

Exemplo:

```js
let idade = 18;
let temDocumento = true;

if (idade >= 18 && temDocumento) {
  console.log("Pode entrar");
}
```

## Diferenca entre == e ===

Essa parte e importante.

### `==`

Compara o valor, mas pode converter tipo sozinho.

```js
console.log(5 == "5"); // true
```

### `===`

Compara valor e tipo ao mesmo tempo.

```js
console.log(5 === "5"); // false
```

Outro exemplo:

```js
console.log(0 == false); // true
console.log(0 === false); // false
```

## Por que `===` e mais seguro

Porque ele evita comparacao enganosa.

Quando usa `==`, o JavaScript tenta ajeitar os tipos sozinho. As vezes isso parece ajudar, mas tambem pode causar bug sem tu perceber. Com `===`, o resultado fica mais claro e mais confiavel.

## Diferenca entre != e !==

Mesma ideia da comparacao anterior.

```js
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
```

- `!=` compara com conversao de tipo;
- `!==` compara valor e tipo.

## Estruturas condicionais

Servem pra fazer o codigo tomar decisao.

### if

```js
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
}
```

### if...else

```js
let nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

### switch

```js
let dia = 2;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  default:
    console.log("Outro dia");
}
```

## Estruturas de repeticao

Servem pra repetir codigo.

### for

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### while

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

## Funcoes

Funcao e um bloco de codigo feito pra executar uma tarefa.

### Como declarar uma funcao

```js
function mostrarMensagem() {
  console.log("Ola");
}
```

### Como chamar uma funcao

```js
mostrarMensagem();
```

### Funcao com parametro

```js
function saudar(nome) {
  console.log("Ola, " + nome);
}

saudar("Guilherme");
```

### Funcao com retorno

```js
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3));
```

## Como JavaScript interage com a pagina

Essa parte e o DOM, que e basicamente a forma de o JavaScript acessar e mudar o que esta no HTML.

### `document`

Representa a pagina.

```js
console.log(document);
```

### `getElementById()`

Pega um elemento pelo `id`.

```js
const titulo = document.getElementById("titulo");
```

### `querySelector()`

Pega o primeiro elemento que combinar com o seletor.

```js
const caixa = document.querySelector(".caixa");
```

### `.value`

Le o valor digitado em um campo.

```js
const nome = document.getElementById("nome").value;
```

### `.checked`

Verifica se um checkbox esta marcado.

```js
const marcado = document.getElementById("aceito").checked;
```

### `.textContent`

Ler ou trocar o texto de um elemento.

```js
titulo.textContent = "Novo titulo";
```

### `.style`

Muda estilo direto pelo JavaScript.

```js
titulo.style.color = "red";
```

### `classList`

Adiciona, remove ou alterna classe CSS.

```js
titulo.classList.add("destaque");
```

### `addEventListener()`

Faz um elemento responder a evento.

```js
botao.addEventListener("click", function () {
  console.log("Clicou");
});
```

## Itens recomendados

### `querySelectorAll()`

Pega varios elementos de uma vez.

```js
const itens = document.querySelectorAll(".item");
```

### `checkValidity()`

Verifica se um formulario esta valido.

```js
formulario.checkValidity();
```

### `DOMContentLoaded`

Espera o HTML carregar antes de rodar o script.

```js
document.addEventListener("DOMContentLoaded", function () {
  console.log("Pagina carregada");
});
```

## Diferencial

### `createElement()`

Cria elemento novo.

```js
const li = document.createElement("li");
```

### `appendChild()`

Coloca esse elemento dentro de outro.

```js
lista.appendChild(li);
```

### `remove()`

Remove um elemento.

```js
li.remove();
```

## Fechando

JavaScript e a parte que faz a pagina reagir. Ele trabalha junto com HTML e CSS, ajuda a criar interatividade e tambem ensina muita logica de programacao. Entender bem variaveis, comparacoes, funcoes, repeticao e manipulacao da pagina ja da uma base bem boa pra seguir estudando.
