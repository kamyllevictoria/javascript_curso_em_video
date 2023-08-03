function calcular(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //Aqui em js, o meu problema era esquecer o valor e função do length, caso o TAMANHO seja 0, ou seja, se o input fique vazio, ai sim dará erro, mas agora que temos condições para impedir que o numero informado nao possa ser zero (ai nao usamos o length, so o value), nao dara erro!
    
    //quando estamos na variavel i, temos que converter o valor para numero, logo, usamos o number:

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERROR!All values ​​need to be entered, try again!')
    } else {
        res.innerHTML = 'Couting:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('ERROR! The pass ou counting need to bem more than zero')
        }
        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c}- ` 
            } 
        } else{
            //contagem decrescente
            for(let c = i; c >= f; c-=p){
                res.innerHTML += `${c}- ` 
            }
        
        
    }
}



















}