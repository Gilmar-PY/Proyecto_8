// pruebas/unitarias/emisor-eventos.test.js

import { jest } from '@jest/globals';
import EmisorEventos from '../../src/emisor-eventos.js';

describe('EmisorEventos', () => {
  beforeEach(() => {
    // Reiniciar el estado antes de cada prueba
    EmisorEventos.eventos = {};
  });

  test('Debería suscribirse y emitir eventos correctamente', () => {
    const mockCallback = jest.fn();

    EmisorEventos.suscribir('eventoPrueba', mockCallback);
    EmisorEventos.emitir('eventoPrueba', 'datos de prueba');

    expect(mockCallback).toHaveBeenCalledWith('datos de prueba');
  });

  test('No debería llamar al callback si el evento no coincide', () => {
    const mockCallback = jest.fn();

    EmisorEventos.suscribir('eventoPrueba', mockCallback);
    EmisorEventos.emitir('otroEvento', 'datos');

    expect(mockCallback).not.toHaveBeenCalled();
  });
});
