function tabuada(){
    let num = document.querySelector('input#txtn').value
    let tab = document.querySelector('select#tab').value
    if (num == 0){
        window.alert('Inform a number!')
    } else{
        let n = Number(num)
        for (let c = 1; c <= 10; c++){
            let item = window.document.createElement('option')
            item.text = ` ${n} x ${c} = ${n * c}`
            document.querySelector('select#tab').appendChild(item)
    
        }
    }



}
