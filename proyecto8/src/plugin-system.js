import Mediator from './mediator.js';

// Definición de la clase PluginSystem que gestiona los plugins de la aplicación.
export class PluginSystem {
    constructor() {
        // Almacena los plugins cargados en un objeto con su nombre como clave.
        this.plugins = {};
    }

    // Método asíncrono para cargar un plugin usando su nombre.
    loadPlugin = async (pluginName) => {
        try {
            // Construye la ruta al archivo del plugin utilizando su nombre y el URL relativo.
            const pluginPath = new URL(`../plugins/${pluginName}`, import.meta.url).href;
            // Importa el módulo del plugin de manera dinámica (asíncrona).
            const module = await import(pluginPath);

            // Verifica si el módulo importado tiene una función 'initPlugin'.
            if (module && module.initPlugin) {
                // Llama a la función 'initPlugin' y le pasa el Mediator para que se integre en el sistema.
                module.initPlugin(Mediator);
                // Almacena el módulo del plugin en el objeto 'plugins' usando el nombre del plugin como clave.
                this.plugins[pluginName] = module;
                console.log(`Plugin ${pluginName} cargado.`);
            } else {
                // Si el plugin no tiene una función 'initPlugin', lanza un error.
                throw new Error('El plugin no tiene una función initPlugin');
            }
        } catch (error) {
            // Captura y muestra cualquier error que ocurra durante la carga del plugin.
            console.error(`Error al cargar el plugin ${pluginName}:`, error);
        }
    };

    // Método para ejecutar un evento en un plugin específico.
    executePlugin = (pluginName, event, data) => {
        // Verifica si el plugin está cargado y si tiene la función 'handleEvent'.
        if (this.plugins[pluginName] && this.plugins[pluginName].handleEvent) {
            // Llama a la función 'handleEvent' del plugin, pasando el evento y los datos.
            this.plugins[pluginName].handleEvent(event, data);
        } else {
            // Si el plugin no está cargado o no tiene la función 'handleEvent', muestra un error.
            console.error(`El plugin ${pluginName} no está cargado o no tiene una función handleEvent`);
        }
    };
}
