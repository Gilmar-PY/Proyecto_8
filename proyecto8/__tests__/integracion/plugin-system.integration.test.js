import { PluginSystem } from '../../src/plugin-system.js';
import Mediator from '../../src/mediator.js';

test('Debería cargar un plugin y manejar eventos correctamente', async () => {
    const pluginSystem = new PluginSystem();
    await pluginSystem.loadPlugin('mi-plugin.js');

    const mockCallback = jest.fn();
    Mediator.subscribe('respuestaPlugin', mockCallback);

    Mediator.send('saludar', 'Juan');
    expect(mockCallback).toHaveBeenCalledWith('¡Hola, Juan! Desde el plugin.');
});
