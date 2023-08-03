let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inList(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
// A exclamação ! quer dizer 'nao' em js, ou seja, se o numero nao estiver na lista d 1 a 100, adicionamo=os.
function add(){
    if (isNumber(num.value) && !inList(num.value, values)){
        //window.alert('Everything its ok.')
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} appended`
        list.appendChild(item)
        res.innerHTML = ''
        //quando conseguirmos adicionar um elemento, sua quantidade deve ser recalculada para que nao fique com erro na contagem de numeros informados.

    } else{
        window.alert('Invalid or present values ​​in the list')
    }
    num.value = ''
    num.focus()
    //A função "focus()" faz com que o cursor de texto e a janela role até onde o elemento HTML do DOM está localizado.
}

function final(){
    if (values.length == 0){
        window.alert('Add some values before finalizing!')
        //se nao informar nenhum valor, essa mensagem aparecerá, em seguida, teremos a validação dos dados de maior e menor numero. usamos o res.innerHTML vazio, para que ele nao possua nenhum valor dentro antes de tudo, depois, temos que usar o += para que as linhas acimas nao sejam perdidas e sejam adicionadas ao html.
    } else{
        let total = values.length
        let maior = values[0]
        let menor = values[0]
        let soma = 0
        for (let pos in values){
            soma += values[pos]
            if (values[pos] > maior){
                maior = values[pos]
            } 
            if (values[pos] < menor){
                menor = values[pos]
            }
            
        }
        res.innerHTML = ''
        res.innerHTML += `<p> It all, we have ${total} numbers registered.</p>`
        res.innerHTML += `<p>The biggest value is ${maior}.</p>`
        
        res.innerHTML += `<p>The smallest value is ${menor}.</p>`
        res.innerHTML += `<p>Adding all the values, the total is ${soma}.`
        res.innerHTML += `<p>The media its ${soma/total}.</p>`//nao criei outra iavel media, so fiz o calculo dela direto aqui.

    
    }
}