function Verificar() {
    var agora = new Date()
    var ano = Number(agora.getFullYear())
    var iano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (iano.value.length == 0 || iano.value >= ano) {
        window.alert('[ERRO] Verifique os dados e tente nomavente!')
    } else {
        var idade = ano - Number(iano.value)
        var sx = document.getElementsByName('sx')
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sx[0].checked) {
            gênero = "Homem"
            if (idade > 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'images/criança-m.png')
            } else if (idade > 10 && idade <= 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem-m.png')
            } else if (idade > 21 && idade <= 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'images/idoso-m.png')
            }
        } else if (sx[1].checked) {
            gênero = "Mulher"
            if (idade > 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'images/criança-f.png')
            } else if (idade > 10 && idade <= 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem-f.png')
            } else if (idade > 21 && idade <= 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'images/idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.style.textAlign = "center"
        res.appendChild(img)
    }
}