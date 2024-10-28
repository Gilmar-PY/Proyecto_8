let contador = 0;
let idioma = 'es'; 
let usuario = '';

export const initPlugin = (Mediador) => {
    console.log('Plugin contador de saludos iniciado');

    Mediador.suscribir('saludar', (nombre) => {
        contador++;
        const saludo = idioma === 'es' ? `¡Hola, ${nombre}!` : `Hello, ${nombre}!`;
        const mensaje = `${saludo} Has saludado ${contador} veces.`;
        console.log(mensaje);

        // Emitir el saludo generado
        Mediador.enviar('saludoGenerado', mensaje);

        // Emitir el conteo de saludos
        Mediador.enviar('conteoSaludos', { contador, idioma });
    });

    Mediador.suscribir('cambiarIdioma', (nuevoIdioma) => {
        if (nuevoIdioma === 'es' || nuevoIdioma === 'en') {
            idioma = nuevoIdioma;
            console.log(`Idioma cambiado a ${idioma === 'es' ? 'español' : 'inglés'}`);
        } else {
            console.log('Idioma no soportado.');
        }
    });

    Mediador.suscribir('registrarUsuario', (nombreUsuario) => {
        usuario = nombreUsuario;
        console.log(`Usuario registrado: ${usuario}`);
    });

    Mediador.suscribir('obtenerEstadisticas', () => {
        const estadisticas = {
            contador,
            idioma,
            usuario: usuario || 'No registrado',
        };
        console.log(`Estadísticas: ${JSON.stringify(estadisticas)}`);

        // Emitir el evento con las estadísticas
        Mediador.enviar('estadisticas', estadisticas);
    });

    Mediador.suscribir('resetear', () => {
        contador = 0;
        console.log('El contador de saludos se ha reseteado.');
        // Emitir el conteo de saludos para actualizar la interfaz
        Mediador.enviar('conteoSaludos', { contador, idioma });
    });
};
