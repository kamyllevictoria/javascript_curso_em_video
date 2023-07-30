function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('year') //year é o nosso id da div que possui input, ou seja, o numero que o usuário irá informar
    var resultado = window.document.getElementById('res') //res é o nosso id da div que vai mostrar o texto

    if (formAno.value.length == 0 || formAno.value > ano ){
        window.alert('ERROR.Try again!')
    } 
    else {
        var sex = document.getElementsByName ('sex') //nossa variavel que pega no name do nosso input, que é o mesmo para o mas e fem (sexos masculino e feminino)
        var idade = ano - Number(formAno.value) //variavel que pega o ano atual e subtrai do ano informado pelo usuario
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto') //aqui nos começamos a manipular as imagens que aparecem conforme a idade e o sexo informado pelo usuario

        if (sex[0].checked){ //(sex[0] sexo na posição 0, ou seja, masculino)
            genero = 'Man'
            if (idade >= 0 && idade <=10){
                //criança
                img.setAttribute('src', '../images/menino_bebe.jpg')
                document.body.style.background = '#e2c6ba'
            } 
            else if (idade > 10 && idade <= 21){
                //jovem
                img.setAttribute('src', '../images/menino_adolescente.jpg')
                document.body.style.background = '#5f6e46'
            } 
            else if(idade < 50){
                //adulto
                img.setAttribute('src', '../images/homem_adulto1.jpg')
                document.body.style.background = '#cfae8b'
            }

            else{
                //idoso
                img.setAttribute('src', '../images/homem_idoso.jpg')
                document.body.style.background = '#476f9a'
            }
        }

        else if (sex[1].checked){ //(sex[1] sexo na posição 1, ou seja, feminino)
            genero = 'Woman '
            if (idade >= 0 && idade <=10){
                //criança
                img.setAttribute('src', '../images/menina_bebe.jpg')
                document.body.style.background = '#F0C78C'
            } 
            else if (idade > 10 && idade <= 21){
                //jovem
                img.setAttribute('src', '../images/menina_adolescente.jpg')
                document.body.style.background = '#ED416A'
            } 
            else if(idade < 50){
                //adulta
                img.setAttribute('src', '../images/mulher_adulta.jpg')
                document.body.style.background = '#b5aeb3'
            } 
            else{
                //idosa
                img.setAttribute('src', '../images/mulher_idosa.jpg')
                document.body.style.background = '#4f6302'
            }
        }

        resultado.innerHTML = `It was detected a ${genero} with ${idade} years.`
        resultado.appendChild(img)

        

    }
}
