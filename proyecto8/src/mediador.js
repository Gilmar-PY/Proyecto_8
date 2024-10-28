import EmisorEventos from './emisor-eventos.js';

class Mediador {
        // Envía un evento específico junto con los datos al Emisor de Eventos
    enviar(evento, datos) {
        EmisorEventos.emitir(evento, datos);
    }

    // Permite que otros componentes se suscriban a un evento específico
    suscribir(evento, callback) {
        EmisorEventos.suscribir(evento, callback);
    }
}

export default new Mediador();
// Exporta instancia única del Mediador