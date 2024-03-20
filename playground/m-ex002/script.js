function carregar() {
    var nome = window.prompt('Nome do funcionário:')
    var sal = Number(window.prompt('Salário:'))
    var res = document.querySelector('p#res')
    res.innerHTML = `O funcionário ${nome} tem um salário de ${sal.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'})}`
}