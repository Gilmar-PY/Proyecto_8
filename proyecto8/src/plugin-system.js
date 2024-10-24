import Mediator from './mediator.js';

export class PluginSystem {
    constructor() {
        this.plugins = {};
    }

    loadPlugin = async (pluginName) => {
        try {
            const pluginPath = new URL(`../plugins/${pluginName}`, import.meta.url).href;
            const module = await import(pluginPath);

            if (module && module.initPlugin) {
                module.initPlugin(Mediator);
                this.plugins[pluginName] = module;
                console.log(`Plugin ${pluginName} cargado.`);
            } else {
                throw new Error('El plugin no tiene una función initPlugin');
            }
        } catch (error) {
            console.error(`Error al cargar el plugin ${pluginName}:`, error);
        }
    };

    executePlugin = (pluginName, event, data) => {
        if (this.plugins[pluginName] && this.plugins[pluginName].handleEvent) {
            this.plugins[pluginName].handleEvent(event, data);
        } else {
            console.error(`El plugin ${pluginName} no está cargado o no tiene una función handleEvent`);
        }
    };
}
