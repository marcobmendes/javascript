let txtn = document.getElementById('txtn')
let lista = document.getElementById('nadd')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(txtn.value) && !inLista(txtn.value, valores)) {
        
    } else {
        window.alert('ERRO! Valor inválido ou já encontrado na lista!')
    }
    
}

/*
        n = Number(txtn.value)
        let item = document.createElement('option')
        item.text += `Valor ${n1} adicionado.`
        lista.appendChild(item)
*/