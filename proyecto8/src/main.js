import { PluginSystem } from './plugin-system.js';
import Mediator from './mediator.js';

const pluginSystem = new PluginSystem();

(async () => {
    // Cargar el nuevo plugin 'contador-saludos.js'
    await pluginSystem.loadPlugin('contador-saludos.js');

    // Enviar un saludo en español (por defecto)
    Mediator.send('saludar', 'Juan');

    // Cambiar el idioma a inglés y saludar nuevamente
    Mediator.send('cambiarIdioma', 'en');
    Mediator.send('saludar', 'John');

    // Registrar un usuario y saludar con su nombre
    Mediator.send('registrarUsuario', 'Carlos');
    Mediator.send('saludar', 'Carlos');

    // Obtener estadísticas
    Mediator.send('obtenerEstadisticas');

    // Resetea el contador de saludos después de 5 segundos
    setTimeout(() => {
        Mediator.send('resetear', null);
        // Saludar de nuevo después de resetear
        Mediator.send('saludar', 'Carlos');
    }, 5000);
})();























/*
import { PluginSystem } from './plugin-system.js';
import Mediator from './mediator.js';

const pluginSystem = new PluginSystem();

(async () => {
    // Cargar el nuevo plugin 'contador-saludos.js'
    await pluginSystem.loadPlugin('contador-saludos.js');

    // Enviar un saludo usando el Mediator
    Mediator.send('saludar', 'Juan');

    // Suscribirse al evento 'conteoSaludos' para manejar el conteo desde el sistema principal
    Mediator.subscribe('conteoSaludos', (contador) => {
        console.log(`Número total de saludos registrados: ${contador}`);
    });

    // Opción adicional: resetear el contador
    setTimeout(() => {
        Mediator.send('resetear', null); // Envía el evento 'resetear' al plugin
    }, 5000); // Resetea después de 5 segundos como ejemplo
})();



*/





/*

import { PluginSystem } from './plugin-system.js';
import Mediator from './mediator.js';

const pluginSystem = new PluginSystem();

(async () => {
    await pluginSystem.loadPlugin('mi-plugin.js'); // Carga el plugin dinámicamente

    // Usa el Mediator para enviar un evento al plugin
    Mediator.send('saludar', 'Juan');
})();
*/