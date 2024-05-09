document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');

    const loginContainer = document.querySelector('.login-container');

    const formHTML = `
        <form id="login-form">
            <input type="text" id="username" placeholder="Nombre de usuario" required>
            <input type="password" id="password" placeholder="Contraseña" required>
            <button type="submit">Iniciar sesión</button>
        </form>
    `;

    loginContainer.innerHTML = formHTML;

    const form = document.getElementById('login-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            console.log(username, password);

            const usuarioValido = usuarios.find(user => user.usuario === username && user.contraseña === password);

            console.log(usuarioValido);

            if (usuarioValido) {
                window.location.href = './rubricas.html';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    } else {
        console.error('Form element not found');
    }
});