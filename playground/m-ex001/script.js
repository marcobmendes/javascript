var nome = window.prompt('Qual é o seu nome?')
res = document.querySelector('div#res')
res.innerHTML = `<p>Olá ${nome}, é um prazer te conhecer!</p>`