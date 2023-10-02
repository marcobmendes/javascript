function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/criança-m.png')
            } 
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem-m.png')   
            } 
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso-m.png')
            }  
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/criança-f.png')
            } 
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem-f.png')   
            } 
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso-f.png')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
    