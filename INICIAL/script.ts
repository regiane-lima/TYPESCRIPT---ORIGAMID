//Annotation e Inference
function soma(a: number, b: number) {
  return a + b;
}

console.log(somar(10, 30));

const produto: string = "Livro";
const preco: number = 100;
const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

const barato = preco < 400 ? true : "produto caro";

//Funções
function somar(a: number, b: number) {
  return a + b;
}

console.log(somar(20, 20));

const nintendo = {
  nome: "nintendo",
  preco: "5000", //eu quero uma função que transforme isso em real
};

function transformaPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$" + produto.preco;
  return produto;
}

const produtoNovo = transformaPreco(nintendo);
console.log(produtoNovo);

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}
console.log(normalizarTexto("teste")); //teste

const input = document.querySelector("input");

const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    const value = Number(input.value);
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}
if(input){
  input.addEventListener("keyup", totalMudou);

}
