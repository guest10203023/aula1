// Alternar entre as Abas do Site
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    
    // Esconde todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    
    // Remove a classe 'active' de todos os botões
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Mostra a aba atual e adiciona a classe ativa
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Alternar Tema (Claro / Escuro)
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Simular Mudança de Tela (PC para Celular)
function toggleView() {
    const container = document.getElementById("main-container");
    const header = document.getElementById("main-header");
    
    container.classList.toggle("phone-view");
    header.classList.toggle("phone-view");
}

// Capturar link do usuário e injetar na área da câmera
function atualizarLink() {
    const url = document.getElementById("link-input").value;
    const container = document.getElementById("camera-container");
    
    if (url.trim() === "") {
        alert("Por favor, insira um link válido para continuar.");
        return;
    }

    // Identifica se é um link de imagem direta ou um site/dashboard externo
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        container.innerHTML = `<img src="${url}" alt="Monitoramento Agrícola">`;
    } else {
        container.innerHTML = `<iframe src="${url}" title="Painel de Dados Integrado"></iframe>`;
    }
}

// Controle do Trator Autônomo
let tratorLigado = false;
function alternarTrator() {
    tratorLigado = !tratorLigado;
    const indicador = document.getElementById("status-trator");
    const texto = document.getElementById("texto-trator");
    const btn = document.getElementById("btn-trator");

    if (tratorLigado) {
        indicador.classList.add("status-on");
        texto.innerText = "Motor Ligado - Rota traçada via GPS";
        btn.innerText = "Desligar Motor";
        btn.style.background = "#d32f2f";
        btn.style.color = "white";
    } else {
        indicador.classList.remove("status-on");
        texto.innerText = "Desconectado";
        btn.innerText = "Ligar Motor do Veículo";
        btn.style.background = "#e0e0e0";
        btn.style.color = "#333";
    }
}

// Controle do Sistema de Irrigação
let irrigacaoLigada = false;
function alternarIrrigacao() {
    irrigacaoLigada = !irrigacaoLigada;
    const indicador = document.getElementById("status-agua");
    const texto = document.getElementById("texto-agua");
    const btn = document.getElementById("btn-agua");

    if (irrigacaoLigada) {
        indicador.classList.add("status-on");
        texto.innerText = "Aspergindo - Fluxo Inteligente Ativo";
        btn.innerText = "Interromper Aspersores";
        btn.style.background = "#d32f2f";
        btn.style.color = "white";
    } else {
        indicador.classList.remove("status-on");
        texto.innerText = "Desligado";
        btn.innerText = "Ativar Aspersores";
        btn.style.background = "#e0e0e0";
        btn.style.color = "#333";
    }
}