function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.style.textAlign = 'center'
    msg.style.paddingBottom = '20px'
    msg.innerHTML = `It's ${hora} hours.`

    if (hora >= 5 && hora < 12){
        //Good Morning
        img.src = '../manha.jpg'
        document.body.style.background = '#2a769c'
    } 
    
    else if( hora >= 12 && hora < 18){
        //Good Evening
        img.src = '../tarde.jpg'
        document.body.style.background = '#d98102'
    }
    
    else {
        //Good Night
        img.src = '../noite.jpg'
        document.body.style.background = '#002b51'
    }
}
