class EmisorEventos {
    constructor() {
        this.eventos = {};// Almacena los eventos y sus suscriptore
    }
    suscribir(evento, listener) {
        // Si el evento no existe, lo inicializa como un array vacío
        if (!this.eventos[evento]) {
            this.eventos[evento] = [];
        }
         // Agrega el listener (función) al evento
        this.eventos[evento].push(listener);
    }
    emitir(evento, datos) {
         // Si el evento tiene listeners, ejecuta cada uno con los datos proporcionados
        if (this.eventos[evento]) {
            this.eventos[evento].forEach(listener => listener(datos));
        }
    }
  }
  export default new EmisorEventos();
   // Exporta instancia que compartir en otros módulos