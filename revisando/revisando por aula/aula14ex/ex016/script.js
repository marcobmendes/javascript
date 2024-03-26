function contar() {
    let n1 = document.getElementById('ini')
    let n2 = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.querySelector('div#res')

    res.innerHTML = ""
    if (passo.value.lenght == 0 || n1.value.lenght == 0 || n2.value.lenght == 0) {
        res.innerText = 'Imposspossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('[ERRO] Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} &#x1F449`
            }
        } else {
            // Decrescente
            for (var c = i; c >= f ; c -= p) {
                res.innerHTML += `${c} &#x1F449`
            }
        }  
    }
    res.innerHTML += '&#x1F3C1'
}
// &#x1F449 apontar*
// &#x1F3C1 bandeita*