export const initPlugin = (Mediator) => {
    console.log('Plugin iniciado');
    Mediator.subscribe('saludar', (data) => {
        const mensaje = `¡Hola, ${data}! Desde el plugin.`;
        console.log(mensaje);
        Mediator.sendEventToSubscribers('respuestaPlugin', mensaje);
    });
};

export const handleEvent = (event, data) => {
    if (event === 'saludar') {
        const mensaje = `¡Hola, ${data}! Desde el plugin.`;
        console.log(mensaje);
    }
};
