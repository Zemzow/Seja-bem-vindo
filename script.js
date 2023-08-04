function exibirpalavra() {
    let palavra = document.getElementById('palavrainput').value;
    document.getElementById('resultado').innerHTML=`Bem vindo(a) <span class="destaque">${palavra}</span>`;
}