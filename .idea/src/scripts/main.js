document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // valida se esta ok
    if (email === "exemplo@gmail.com" && senha === "0123456789") {
        alert("Login realizado com sucesso!");
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});
