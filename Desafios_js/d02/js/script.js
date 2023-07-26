function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('year')
    var resultado = window.document.getElementById('res')

    if (formAno.value.length == 0 || formAno.value > ano ){
        window.alert('ERROR.Try again with valid years!')
    } 
    else {
        var sex = document.getElementsByName ('sex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        
        if (sex[0].checked){
            genero = 'Man'
        }

        else if (sex[1].checked){
            genero = 'Woman '
        }
        resultado.innerHTML = `It was detected a ${genero} with ${idade} years.`

        

    }
}
