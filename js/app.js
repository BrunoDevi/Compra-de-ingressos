function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let qtdPista = document.getElementById("qtd-pista");
    let qtdSuperior = document.getElementById("qtd-superior");
    let qtdInferior = document.getElementById("qtd-inferior");
    let novoValor;

    if (tipoIngresso === 'inferior') {
        novoValor = qtdInferior.textContent - quantidade;
    } else if (tipoIngresso === 'superior') {
        novoValor = qtdSuperior.textContent - quantidade;
    } else if (tipoIngresso === 'pista') {
        novoValor = qtdPista.textContent - quantidade;
    }
    
    if (novoValor >= 0) {
        alert('Parabens! Compra realizada com sucesso!');
        if (tipoIngresso === 'inferior') {
            qtdInferior.textContent = novoValor;
        } else if (tipoIngresso === 'superior') {
            qtdSuperior.textContent = novoValor;
        } else if (tipoIngresso === 'pista') {
            qtdPista.textContent = novoValor;
        }
    } else {
        alert('Desculpe, não temos essa quantidade de ingressos disponíveis.');
    }

}    

