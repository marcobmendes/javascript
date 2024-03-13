function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var txt = document.querySelector('div#txt')
    var img = document.querySelector('div#img')
    txt.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        document.body.style.backgroundColor = '#E2CD9F'
        img.innerHTML = '<img src="images/morning.png" alt="Foto Dia"></img>'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundColor = '#b9846f'
        img.innerHTML = '<img src="images/afternoon.png" alt="Foto Tarde"></img>'
    } else {
        document.body.style.backgroundColor = '#515154'
        img.innerHTML = '<img src="images/morning.png" alt="Foto Dia"></img>'
    }
}