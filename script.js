document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const nomeError = document.getElementById('nomeError');
    const emailError = document.getElementById('emailError');
    const mensagemError = document.getElementById('mensagemError');

    // Função para validar o nome
    function validateNome() {
        const nome = nomeInput.value.trim();
        const nomePattern = /^[A-Za-z]{3,}$/;
        if (nomePattern.test(nome)) {
            nomeError.textContent = '';
        } else {
            nomeError.textContent = 'O nome deve conter apenas letras e ter pelo menos 3 caracteres.';
        }
    }

    // Função para validar o e-mail
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]{5,}@[^\s@]+\.[^\s@]{2,}$/;
        if (emailPattern.test(email)) {
            emailError.textContent = '';
        } else {
            emailError.textContent = 'E-mail inválido. Deve conter pelo menos 5 caracteres antes do "@" e pelo menos 3 caracteres após o "@"';
        }
    }

    // Função para validar a mensagem
    function validateMensagem() {
        const mensagem = mensagemInput.value.trim();
        if (mensagem.length >= 10) {
            mensagemError.textContent = '';
        } else {
            mensagemError.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
        }
    }

    // Adiciona event listeners para validação em tempo real
    nomeInput.addEventListener('input', validateNome);
    emailInput.addEventListener('input', validateEmail);
    mensagemInput.addEventListener('input', validateMensagem);

    // Validação ao submeter o formulário
    form.addEventListener('submit', (e) => {
        validateNome();
        validateEmail();
        validateMensagem();
        if (nomeError.textContent || emailError.textContent || mensagemError.textContent) {
            e.preventDefault(); // Impede o envio do formulário se houver erros
        }
    });
});

