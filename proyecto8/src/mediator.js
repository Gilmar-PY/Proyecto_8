import EventEmitter from './event-emitter.js';

class Mediator {
    send = (event, data) => {
        EventEmitter.emit(event, data);
    };

    subscribe = (event, callback) => {
        EventEmitter.on(event, callback);
    };

    sendEventToSubscribers = (event, data) => {
        EventEmitter.emit(event, data);
    };
}

export default new Mediator();
