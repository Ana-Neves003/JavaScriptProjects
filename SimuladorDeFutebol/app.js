document.getElementById('simular').addEventListener('click', function() {
    // Lista de times
    //const times = ["Time A", "Time B", "Time C", "Time D", "Time E", "Time F"];
    const times = ["America", "Alecrim", "ABC"];

    // Seleciona dois times aleatórios
    const time1 = times[Math.floor(Math.random() * times.length)];
    let time2 = times[Math.floor(Math.random() * times.length)];

    // Garante que os times não sejam iguais
    while (time1 === time2) {
        time2 = times[Math.floor(Math.random() * times.length)];
    }

    // Gera um placar aleatório
    const golsTime1 = Math.floor(Math.random() * 5); // 0 a 4 gols
    const golsTime2 = Math.floor(Math.random() * 5); // 0 a 4 gols

    // Detalhes da partida (quem marcou gol e aos quantos minutos)
    const detalhes = gerarDetalhes(time1, golsTime1).concat(gerarDetalhes(time2, golsTime2));

    // Ordena detalhes por minuto
    detalhes.sort((a, b) => a.minuto - b.minuto);

    // Atualiza os elementos com as informações geradas
    document.getElementById('times').textContent = `${time1} vs ${time2}`;
    document.getElementById('placar').textContent = `Placar: ${golsTime1} - ${golsTime2}`;
    document.getElementById('detalhes').innerHTML = detalhes.map(evento => `<p>${evento.texto}</p>`).join('');
});

// Função para gerar detalhes da partida
function gerarDetalhes(time, gols) {
    let detalhes = [];
    for (let i = 0; i < gols; i++) {
        const minuto = Math.floor(Math.random() * 90) + 1; // 1 a 90 minutos
        detalhes.push({
            minuto: minuto,
            texto: `${time} marcou aos ${minuto} minutos!`
        });
    }
    return detalhes;
}
