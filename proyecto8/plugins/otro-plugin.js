export const initPlugin = (Mediator) => {
  console.log('Nuevo plugin iniciado');
  Mediator.subscribe('nuevoEvento', (data) => {
      console.log(`Evento recibido en el nuevo plugin: ${data}`);
  });
};

export const handleEvent = (event, data) => {
  if (event === 'nuevoEvento') {
      console.log(`Manejando el evento: ${event} con datos: ${data}`);
  }
};
