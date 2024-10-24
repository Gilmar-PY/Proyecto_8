let contador = 0;
let idioma = 'es';
let usuario = '';

// Inicializa el plugin y se suscribe a eventos
export const initPlugin = (Mediator) => {
    console.log('Plugin contador de saludos iniciado');

    // Suscribirse a varios eventos usando el Mediator
    Mediator.subscribe('saludar', (nombre) => {
        contador++;
        const saludo = idioma === 'es' ? `¡Hola, ${nombre}!` : `Hello, ${nombre}!`;
        const mensaje = `${saludo} Has saludado ${contador} veces.`;
        console.log(mensaje);

        // Emitir un evento con el contador actual
        Mediator.sendEventToSubscribers('conteoSaludos', { contador, idioma });
    });

    Mediator.subscribe('cambiarIdioma', (nuevoIdioma) => {
        if (nuevoIdioma === 'es' || nuevoIdioma === 'en') {
            idioma = nuevoIdioma;
            console.log(`Idioma cambiado a ${nuevoIdioma === 'es' ? 'español' : 'inglés'}`);
        } else {
            console.log('Idioma no soportado.');
        }
    });

    Mediator.subscribe('registrarUsuario', (nombreUsuario) => {
        usuario = nombreUsuario;
        console.log(`Usuario registrado: ${usuario}`);
    });

    Mediator.subscribe('obtenerEstadisticas', () => {
        const estadisticas = {
            contador,
            idioma,
            usuario: usuario || 'No registrado',
        };
        console.log(`Estadísticas: ${JSON.stringify(estadisticas)}`);

        // Emitir el evento con las estadísticas
        Mediator.sendEventToSubscribers('estadisticas', estadisticas);
    });
};

// Maneja eventos externos
export const handleEvent = (event, data) => {
    if (event === 'resetear') {
        contador = 0;
        console.log('El contador de saludos se ha reseteado.');
    }
};



















/*
let contador = 0;

export const initPlugin = (Mediator) => {
    console.log('Plugin contador de saludos iniciado');

    // Suscribirse al evento 'saludar' usando el Mediator
    Mediator.subscribe('saludar', (nombre) => {
        contador++;
        const mensaje = `¡Hola, ${nombre}! Has saludado ${contador} veces.`;
        console.log(mensaje);

        // Emitir un evento con el contador actual
        Mediator.sendEventToSubscribers('conteoSaludos', contador);
    });
};

export const handleEvent = (event, data) => {
    if (event === 'resetear') {
        contador = 0;
        console.log('El contador de saludos se ha reseteado.');
    }
};
*/
