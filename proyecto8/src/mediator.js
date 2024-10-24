import EventEmitter from './event-emitter.js';

//  clase Mediator que centraliza la comunicación entre la aplicación y los plugins.
class Mediator {
    // Método para enviar un evento. Llama al método 'emit' del EventEmitter.
    send = (event, data) => {
        // 'emit' emite el evento especificado y pasa los datos a los observadores suscritos.
        EventEmitter.emit(event, data);
    };

    // Método para suscribirse a un evento. Llama al método 'on' del EventEmitter.
    subscribe = (event, callback) => {
        // 'on' registra una función (callback) que se ejecutará cuando se emita el evento especificado.
        EventEmitter.on(event, callback);
    };

    // Método  para enviar eventos a los suscriptores (equivalente a 'send').
    sendEventToSubscribers = (event, data) => {
        // Este método emite el evento a todos los suscriptores registrados, como 'send'.
        EventEmitter.emit(event, data);
    };
}

// Exporta una única instancia de Mediator para que toda la aplicación use el mismo Mediator compartido.
export default new Mediator();
