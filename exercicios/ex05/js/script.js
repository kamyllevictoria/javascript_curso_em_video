function tabuada(){
    let num = Number(document.querySelector('input#txtn').value)
    let tab = Number(document.querySelector('select#tab').value)
    //como eu ja coloquei o Number no começo do input e o .value no final, nao ha necessidade de refazer esse procedimento com novas variaveis.
    if (num == 0){
        window.alert('Inform a number!')
    } else{
        //let c = 1: enquanto c for igual a 1 faça: c <= 10.
        //Ao usarmos o c++ estamos incrementando as contagens que usamos no c <=10, pois assim ira agir sobre os elementos de c, que vale 1 ate 10, o nosso parametro estabelecido da tabuada.
        for (let c = 1; c <= 10; c++){
            let item = window.document.createElement('option')
            item.text = ` ${num} x ${c} = ${num * c}`
            document.querySelector('select#tab').appendChild(item)
            //usamos o appendChild para adicionarmos as modificações realizadas com a nossa variavel item ao nosso codigo html/js.
    
        }
    }


}
