let txtn = document.getElementById('txtn')
let res = document.getElementById('nadd')

function adicionar() {
    if (txtn.value.length == 0 || txtn.value < 1 || txtn.value > 100) {
        window.alert('ERRO! Valor inválido ou já encontrado na lista!')
    } else {
        n[] = Number(txtn.value)
        let item = document.createElement('option')
        item.text += `Valor ${n1} adicionado.`
        res.appendChild(item)
    }
    
}