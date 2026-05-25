// Atributos iniciais da Fazenda
let producao = 60;
let ambiente = 60;
let lucro = 5000;

function atualizarTela() {
    // Atualiza os textos
    document.getElementById('txt-producao').innerText = producao + "%";
    document.getElementById('txt-ambiente').innerText = ambiente + "%";
    document.getElementById('txt-lucro').innerText = "R$ " + lucro.toLocaleString('pt-BR');

    // Atualiza as barras visuais
    document.getElementById('bar-producao').style.width = producao + "%";
    document.getElementById('bar-ambiente').style.width = ambiente + "%";

    // Lógica do técnico ambiental: validação do equilíbrio
    let mensagem = document.getElementById('status-mensagem');
    
    if (ambiente >= 75 && producao >= 75) {
        mensagem.innerText = "🏆 Excelente! Você atingiu o ápice do Agro Sustentável!";
        mensagem.style.color = "#10b981"; // Verde sucesso
    } else if (ambiente < 40) {
        mensagem.innerText = "⚠️ Alerta Ecológico! Multas ambientais eminentes e esgotamento do solo!";
        mensagem.style.color = "#ef4444"; // Vermelho alerta
    } else if (producao < 40) {
        mensagem.innerText = "📉 Alerta Financeiro! A produção está muito baixa para sustentar a propriedade.";
        mensagem.style.color = "#f59e0b"; // Laranja
    } else {
        mensagem.innerText = "Sua fazenda está operando. Busque otimizar os recursos!";
        mensagem.style.color = "#3b82f6";
    }
}

function aplicarTecnologia(tipo, botao) {
    // Desativa o botão para não clicar duas vezes na mesma tecnologia
    botao.classList.add('active');

    // Modificações baseadas em critérios reais de engenharia agronômica
    if (tipo === 'drone') {
        producao += 15;
        ambiente += 5; // Reduz desperdício de defensivos químicos
        lucro += 2000;
    } else if (tipo === 'biologico') {
        producao += 5;
        ambiente += 20; // Preserva polinizadores e fauna do solo
        lucro += 1500;
    } else if (tipo === 'sensores') {
        producao += 10;
        ambiente += 15; // Economia brutal de água e energia
        lucro += 1000;
    } else if (tipo === 'desmate') {
        producao += 25;
        ambiente -= 35; // Destruição de biodiversidade e perda de serviços ecossistêmicos
        lucro -= 3000; // Simula perda por multas e erosão a longo prazo
    }

    // Travas de limites (0 a 100%)
    producao = Math.min(Math.max(producao, 0), 100);
    ambiente = Math.min(Math.max(ambiente, 0), 100);

    atualizarTela();
}

// Inicializa o painel
atualizarTela();