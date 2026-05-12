// Seleciona o formulário
const formulario = document.getElementById('formContato');

// Seleciona o botão de tema
const temaBtn = document.getElementById('temaBtn');

// Evento de envio do formulário
formulario.addEventListener('submit', function(event) {

    // Impede o envio automático
    event.preventDefault();

    // Captura os valores
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Expressão para validar e-mail
    const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Verifica campos vazios
    if(nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos!');
        return;
    }

    // Verifica e-mail válido
    if(!validarEmail.test(email)) {
        alert('Digite um e-mail válido!');
        return;
    }

    // Mensagem de sucesso
    alert('Mensagem enviada com sucesso!');

    // Limpa os campos
    formulario.reset();
});
// Alternar tema claro/escuro
temaBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});