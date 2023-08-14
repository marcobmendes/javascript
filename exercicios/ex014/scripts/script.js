function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //GOOD MORNING!
        img.src = 'images/morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //GOOD AFTERNOON!
        img.src = 'images/afternoon.png'
        document.body.style.background = '#b9846f'
    } else {
        //GOOD EVENING!
        img.src = 'images/evening.png'
        document.body.style.background = '#515154'
    }
}