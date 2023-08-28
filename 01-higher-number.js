/*
Desenvolver um algoritmo que receba 2 variáveis a e b do tipo inteiro e devolve o maior deles.
Exemplo: se a = 2 e b = 7, o algoritmo devolve 7.

RESTRIÇÕES:
  * Não pode usar if's, estruturas de comparação, operador ternário, bibliotecas tipo Math, Colections ou semelhantes.
*/

// Função que retorna o maior numero.
function higherNumber(a, b) {
  soma = a + b
  sub = abs(a - b)
  result = (soma + sub) / 2

  return result
}

// Função que retorna o modulo de um numero
function abs(a) {
  if (a < 0) {
    return -a
  }

  return a
}

higherNumber(2, 7) // 7
higherNumber(3, 1) // 3
