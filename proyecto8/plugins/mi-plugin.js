export const initPlugin = (Mediador) => {
    console.log('Mi Plugin iniciado');

    Mediador.suscribir('saludar', (nombre) => {
        console.log(`Mi Plugin recibió un saludo a ${nombre}`);
    });

    Mediador.suscribir('conteoSaludos', ({ contador }) => {
        if (contador === 5) {
            console.log('¡Has saludado 5 veces!');
            // Opcional: Mostrar un mensaje especial en la interfaz
            const divSaludo = document.getElementById('divSaludo');
            if (divSaludo) {
                divSaludo.innerText = '¡Felicidades por saludar 5 veces!';
            }
        }
    });
};
