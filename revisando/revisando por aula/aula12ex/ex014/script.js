var now = new Date()
var hora = now.getHours()
let msg = document.getElementById("text")
let img = document.getElementById("img")
let background = document.body.style
msg.innerHTML = `Agora são ${hora} horas`



if (hora >= 0 && hora <= 12) { 
    img.src = "/images/morning.png"
    document.body.style.background = "#E2CD9F"
} else if (hora > 12 && hora <= 18){
    img.src = '/images/afternoon.png'
    document.body.style.background = "#b9846f"
} else {
    img.src = '/images/evening.png'
    document.body.style.background = "#515154"
}