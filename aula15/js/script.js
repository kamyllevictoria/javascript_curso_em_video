let num = [5,8,9,5,7,3]


//Tem como sabermos a posição do array sem necessariamente termos que verificar toda vez? sim, usamos o num.length para isso
for(let c = 0; c <=num.length; c++){
    console.log(num[c])
}

//quando usamos uma variavel para criamos o teste logico e realizarmos o for, precisamos inclui-la dentro da chave num.

for (let c in num){
    console.log(num[c])
}

//"para cada posição c na variavel num"