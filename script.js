// Alternar abas
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(section => section.classList.remove('active'));
    const tab = document.getElementById(tabId);
    if(tab) tab.classList.add('active');
    document.getElementById('login-section').style.display = 'none';
}

// Login simulado
function login() {
    const email = document.querySelector('#login-section input[type="email"]').value;
    const senha = document.querySelector('#login-section input[type="password"]').value;

    if(email && senha) {
        alert('Login realizado com sucesso!');
        document.getElementById('login-section').style.display = 'none';
        showTab('dashboard');
    } else {
        alert('Por favor, preencha email e senha.');
    }
}

function loginGoogle() {
    alert('Login com Google realizado com sucesso!');
    document.getElementById('login-section').style.display = 'none';
    showTab('dashboard');
}

// Controle de máquinas
function ligar(nome) {
    alert(nome + ' ligado!');
}

function desligar(nome) {
    alert(nome + ' desligado!');
}

// Troca de tema
function changeTheme(theme) {
    document.body.className = theme;
}

// Função opcional: alternar entre visualização desktop e celular (simulação)
function toggleMobileView() {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    nav.style.position = nav.style.position === 'fixed' ? 'relative' : 'fixed';
    main.style.marginLeft = main.style.marginLeft === '240px' ? '0' : '240px';
}

// Função opcional: exibir alertas de notícias em tempo real
function mostrarAlertasNoticias() {
    const noticias = document.querySelectorAll('.news-item');
    noticias.forEach((item, index) => {
        setTimeout(() => {
            alert('Nova notícia: ' + item.querySelector('h4').innerText);
        }, index * 5000);
    });
}

// Inicialização opcional
document.addEventListener('DOMContentLoaded', () => {
    // Começa com login visível
    document.getElementById('login-section').style.display = 'block';
    // Oculta todas abas
    document.querySelectorAll('.tab-content').forEach(section => section.classList.remove('active'));
});