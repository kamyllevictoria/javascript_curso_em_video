 function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat

 }

console.log(fatorial(5))


//explicando o for:
//inicializamos nossa variavel c (de contador) sendo igual à n, pois no fatorial, ele começa com o parametro informado e vai sendo multiplicado ate 1 (decrescendo). Entao, usamos o contador na condição de maior do que 1 (c >1) e vamos decrescendo seu valor com o (c--).