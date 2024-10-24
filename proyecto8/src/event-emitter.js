class EventEmitter {
  constructor() {
      // Inicializa un objeto para almacenar eventos y sus suscriptores (listeners).
      this.events = {};
  }

  // Método para suscribirse a un evento específico.
  on = (event, listener) => {
      // Si el evento no existe, lo inicializa como un array vacío.
      if (!this.events[event]) {
          this.events[event] = [];
      }
      // Añade el listener (función) al evento.
      this.events[event].push(listener);
  };

  // Método para emitir un evento y notificar a todos sus suscriptores.
  emit = (event, data) => {
      // Si el evento tiene suscriptores, ejecuta cada uno con los datos proporcionados.
      if (this.events[event]) {
          this.events[event].forEach(listener => listener(data));
      }
  };
}

// Exporta una instancia para uso global en la aplicación.
export default new EventEmitter();
