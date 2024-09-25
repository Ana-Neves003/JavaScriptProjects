document.getElementById('buscar').addEventListener('click', function() {
    const cidade = document.getElementById('cidade').value;

    if (cidade === '') {
        alert('Por favor, insira o nome de uma cidade.');
        return;
    }

    // Função para gerar previsões de tempo aleatórias
    function gerarPrevisao() {
        const temperaturas = [15, 20, 25, 30, 35, 40];
        const descricoes = [
            "Ensolarado", 
            "Nublado", 
            "Chuva leve", 
            "Chuva forte", 
            "Tempestade", 
            "Neve"
        ];
        
        // Seleciona uma temperatura e uma descrição aleatória
        const temperatura = temperaturas[Math.floor(Math.random() * temperaturas.length)];
        const descricao = descricoes[Math.floor(Math.random() * descricoes.length)];

        return {
            temperatura: temperatura,
            descricao: descricao
        };
    }

    // Gera uma previsão aleatória
    const previsao = gerarPrevisao();

    // Atualiza os elementos com as informações geradas
    document.getElementById('nome-cidade').textContent = `Cidade: ${cidade}`;
    document.getElementById('temperatura').textContent = `Temperatura: ${previsao.temperatura}°C`;
    document.getElementById('descricao').textContent = `Descrição: ${previsao.descricao}`;
});
