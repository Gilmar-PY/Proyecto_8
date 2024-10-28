// pruebas/unitarias/mediador.test.js

import { jest } from '@jest/globals';
import Mediador from '../../src/mediador.js';
import EmisorEventos from '../../src/emisor-eventos.js';

describe('Mediador', () => {
  beforeEach(() => {
    // Reiniciar el estado antes de cada prueba
    EmisorEventos.eventos = {};
  });

  test('Debería enviar y suscribirse a eventos correctamente', () => {
    const mockCallback = jest.fn();

    Mediador.suscribir('eventoMediador', mockCallback);
    Mediador.enviar('eventoMediador', 'datos mediador');

    expect(mockCallback).toHaveBeenCalledWith('datos mediador');
  });

  test('No debería llamar al callback si el evento no coincide', () => {
    const mockCallback = jest.fn();

    Mediador.suscribir('eventoMediador', mockCallback);
    Mediador.enviar('otroEvento', 'datos');

    expect(mockCallback).not.toHaveBeenCalled();
  });
});
