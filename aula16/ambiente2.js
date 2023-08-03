//podemos pré definir alguns parametros, caso os mesmos nao sejam informados, no caso, o valor n1 e n2 seriam 0.
//se adicionarmos mais um elemento no sum, como um n3, ele nao irá contar na soma, pois nao esta pre definido na função sum
function sum(n1=0, n2=0){
    return n1 + n2

}

console.log(sum(2,12))