import Mediador from './mediador.js';

export class SistemaPlugins {
  constructor() {
    this.plugins = {};// Almacena los plugins cargados
  }

  // Método para cargar un plugin de manera asíncrona
  cargarPlugin = async (nombrePlugin) => {
    try {
      // importa el plugin dinámicamente
      const modulo = await this.importarPlugin(nombrePlugin);

      if (modulo && modulo.initPlugin) {
        // Inicializa el plugin pasándole el mediador
        modulo.initPlugin(Mediador);
        this.plugins[nombrePlugin] = modulo;
        console.log(`Plugin ${nombrePlugin} cargado.`);
      } else {
        throw new Error('El plugin no tiene una función initPlugin');
      }
    } catch (error) {
      console.error(`Error al cargar el plugin ${nombrePlugin}:`, error);
    }
  };
  // Método separado para la importación de plugins
  importarPlugin = async (nombrePlugin) => {
    try {
      // Usamos una ruta relativa para cargar el plugin
      const rutaPlugin = `../plugins/${nombrePlugin}`; // Ruta del plugin
      return await import(rutaPlugin);// Importa el módulo del plugin
    } catch (error) {
      throw new Error(`No se pudo importar el plugin desde ${rutaPlugin}: ${error.message}`);
    }
  };
}




