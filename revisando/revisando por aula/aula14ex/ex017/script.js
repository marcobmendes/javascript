function gerar() {
    let txtn = document.getElementById('txtn')
    let res = document.getElementById('tab')

    if (txtn.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        var n1 = Number(txtn.value)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            // res.innerText = `${n1} x ${c} = ${(n1 * c)}`
            let item = document.createElement('option')  
            item.text = `${n1} x ${c} = ${(n1 * c)}`
            item.value = `tab${c}`
            res.appendChild(item)  
        }
    }
}