function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length ==0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let iten = document.createElement('option')
            iten.text = `${n} x ${c} = ${n*c}`
            iten.value = `tab${c}`
            tab.appendChild(iten)
        }
    }
    
}