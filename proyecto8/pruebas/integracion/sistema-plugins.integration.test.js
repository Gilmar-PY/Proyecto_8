import { jest } from '@jest/globals';
import { SistemaPlugins } from '../../src/sistema-plugins.js';
import Mediador from '../../src/mediador.js';

describe('SistemaPlugins - Integración', () => {
  test('Debería cargar un plugin y manejar eventos correctamente', async () => {
    const sistemaPlugins = new SistemaPlugins();
    const mockCallback = jest.fn();

    // Suscribirse al evento que el plugin emitirá
    Mediador.suscribir('saludoGenerado', mockCallback);

    // Cargar el plugin real
    await sistemaPlugins.cargarPlugin('contador-saludos.js');

    // Enviar un evento que el plugin maneja
    Mediador.enviar('saludar', 'Ana');

    // Esperar a que las promesas se resuelvan con `setTimeout`
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Verificar que el plugin funcionó correctamente
    expect(mockCallback).toHaveBeenCalledWith(expect.stringContaining('¡Hola, Ana!'));
  });
});
