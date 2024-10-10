document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar os valores dos campos de e-mail e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Exemplo de validação simples (somente para efeito de demonstração)
    if (email === "exemplo@gmail.com" && senha === "0123456789") {
        alert("Login realizado com sucesso!");
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});
