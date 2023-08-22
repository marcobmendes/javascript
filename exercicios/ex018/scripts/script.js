function contar() {
    let n1 = document.getElementById('txti')
    let n2 = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    var res = document.querySelector('div#res')
    
    res.innerHTML = ''
    if (n1.value.length == 0 || n2.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }          
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
