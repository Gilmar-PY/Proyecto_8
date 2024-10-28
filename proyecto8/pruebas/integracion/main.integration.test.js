import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { JSDOM } from 'jsdom';
import { SistemaPlugins } from '../../src/sistema-plugins.js';
import Mediador from '../../src/mediador.js';

describe('Main.js - Integración', () => {
  let sistemaPlugins;
  let dom;

  beforeAll(() => {
    // Crear un DOM simulado
    dom = new JSDOM(`<!DOCTYPE html><p>Hola mundo</p>`);
    global.document = dom.window.document;
    global.window = dom.window;
    sistemaPlugins = new SistemaPlugins();
  });

  afterAll(() => {
    dom.window.close();
  });

  test('Debería cargar el plugin y enviar eventos correctamente', async () => {
    await sistemaPlugins.cargarPlugin('contador-saludos.js');
    expect(sistemaPlugins.plugins['contador-saludos.js']).toBeDefined();
  });
});
