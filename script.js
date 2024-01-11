"use strict";
//Annotation e Inference
function soma(a, b) {
    return a + b;
}
console.log(somar(10, 30));
const produto = "Livro";
const preco = 100;
const carro = {
    marca: "Audi",
    portas: 5,
};
const barato = preco < 400 ? true : "produto caro";
//Funções
function somar(a, b) {
    return a + b;
}
console.log(somar(20, 20));
const nintendo = {
    nome: "nintendo",
    preco: "5000", //eu quero uma função que transforme isso em real
};
function transformaPreco(produto) {
    produto.preco = 'R$' + produto.preco;
    return produto;
}
const produtoNovo = transformaPreco(nintendo);
console.log(produtoNovo);
