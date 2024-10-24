import { jest } from '@jest/globals';
import Mediator from '../../src/mediator.js';

test('Debería enviar y recibir eventos correctamente', () => {
    const mockCallback = jest.fn();
    Mediator.subscribe('testEvent', mockCallback);
    Mediator.send('testEvent', 'información de prueba');
    expect(mockCallback).toHaveBeenCalledWith('información de prueba');
});
