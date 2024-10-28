// pruebas/unitarias/sistema-plugins.test.js
import { SistemaPlugins } from '../../src/sistema-plugins.js';
import Mediador from '../../src/mediador.js';

// Crear un mock de Mediador para evitar dependencias externas
jest.mock('../../src/mediador.js', () => ({
  send: jest.fn(),
  subscribe: jest.fn(),
}));

describe('SistemaPlugins', () => {
  let sistemaPlugins;

  beforeEach(() => {
    sistemaPlugins = new SistemaPlugins();
    jest.clearAllMocks();
  });

  test('debería cargar un plugin correctamente y llamarlo con Mediador', async () => {
    // Crear un mock para la función `importarPlugin`
    sistemaPlugins.importarPlugin = jest.fn().mockResolvedValue({
      initPlugin: (mediador) => {
        mediador.send('saludar', 'Test');
      },
    });

    const nombrePlugin = 'plugin-prueba.js';
    await sistemaPlugins.cargarPlugin(nombrePlugin);

    expect(sistemaPlugins.importarPlugin).toHaveBeenCalledWith(nombrePlugin);
    expect(sistemaPlugins.plugins[nombrePlugin]).toBeDefined();
    expect(Mediador.send).toHaveBeenCalledWith('saludar', 'Test');
  });

  test('debería manejar errores al cargar un plugin sin función initPlugin', async () => {
    // Mock para simular un módulo sin `initPlugin`
    sistemaPlugins.importarPlugin = jest.fn().mockResolvedValue({});

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await sistemaPlugins.cargarPlugin('plugin-invalido.js');

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Error al cargar el plugin'),
      expect.any(Error)
    );
    
    consoleSpy.mockRestore();
  });

  test('debería manejar correctamente la importación del plugin', async () => {
    const mockImport = jest.spyOn(sistemaPlugins, 'importarPlugin').mockResolvedValue({
      initPlugin: jest.fn(),
    });

    await sistemaPlugins.importarPlugin('plugin-ejemplo.js');
    expect(mockImport).toHaveBeenCalledWith('plugin-ejemplo.js');
  });
});
