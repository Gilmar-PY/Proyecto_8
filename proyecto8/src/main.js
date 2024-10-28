import { SistemaPlugins } from './sistema-plugins.js';
import Mediador from './mediador.js';

// Crea una instancia del sistema de plugins
const sistemaPlugins = new SistemaPlugins();

(async () => {
    // Carga los plugins de manera dinámica
    await sistemaPlugins.cargarPlugin('contador-saludos.js');
    await sistemaPlugins.cargarPlugin('mi-plugin.js');

    // Elementos del DOM que se manipulan en la aplicación
    const inputTexto = document.getElementById('miTexto');
    const botonCambiarIdioma = document.getElementById('botonCambiarIdioma');
    const botonResetear = document.getElementById('botonResetear');
    const divSaludo = document.getElementById('divSaludo');
    const divContador = document.getElementById('divContador');
    const divEstadisticas = document.getElementById('divEstadisticas');

    let idiomaActual = 'es'; // Estado de idioma actual

    // Cambia el texto del botón de idioma
    botonCambiarIdioma.innerText = `Cambiar a ${idiomaActual === 'es' ? 'Inglés' : 'Español'}`;

    // Muestra el saludo cuando se emite el evento saludoGenerado
    Mediador.suscribir('saludoGenerado', (mensaje) => {
        divSaludo.innerText = mensaje;
    });

    // Actualiza el contador cuando se emite el evento conteoSaludos
    Mediador.suscribir('conteoSaludos', ({ contador, idioma }) => {
        const mensaje = `Contador: ${contador}, Idioma: ${idioma}`;
        divContador.innerText = mensaje;
    });

    // Muestra estadísticas cuando se emite el evento estadisticas
    Mediador.suscribir('estadisticas', (estadisticas) => {
        divEstadisticas.innerText = `Estadísticas: ${JSON.stringify(estadisticas)}`;
    });

    // Envía el evento 'saludar' al presionar Enter en el campo de texto
    inputTexto.addEventListener('keypress', (evento) => {
        if (evento.key === 'Enter') {
            const texto = evento.target.value.trim();
            if (texto !== '') {
                Mediador.enviar('saludar', texto);
                evento.target.value = ''; // Limpia el campo texto
            }
        }
    });

    // Cambia el idioma y envía el evento 'cambiarIdioma' al hacer clic en el botón
    botonCambiarIdioma.addEventListener('click', () => {
        idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
        Mediador.enviar('cambiarIdioma', idiomaActual);
        botonCambiarIdioma.innerText = `Cambiar a ${idiomaActual === 'es' ? 'Inglés' : 'Español'}`;
    });

    // Resetea el contador y actualiza el contador en la interfaz
    botonResetear.addEventListener('click', () => {
        Mediador.enviar('resetear');
        divContador.innerText = `Contador: 0, Idioma: ${idiomaActual}`;
    });

    // Registra al usuario y solicita estadísticas al Mediador
    Mediador.enviar('registrarUsuario', 'Carlos');
    Mediador.enviar('obtenerEstadisticas');
})();
