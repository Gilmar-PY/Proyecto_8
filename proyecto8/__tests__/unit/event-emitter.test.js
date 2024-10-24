// tests/unit/event-emitter.test.js
import { jest } from '@jest/globals';
import EventEmitter from '../../src/event-emitter.js';

test('Debería registrar y emitir eventos correctamente', () => {
    const mockCallback = jest.fn();
    EventEmitter.on('testEvent', mockCallback);
    EventEmitter.emit('testEvent', 'datos de prueba');
    expect(mockCallback).toHaveBeenCalledWith('datos de prueba');
});
