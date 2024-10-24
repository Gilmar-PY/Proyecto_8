
# Documentación del Sistema de Plugins

## 1. Descripción General

El sistema de plugins es una **arquitectura modular** que permite extender las funcionalidades de una aplicación web cargando y ejecutando módulos dinámicamente. Este sistema usa patrones de diseño como **Mediator** y **Observer**, lo que facilita la comunicación y gestión de eventos de manera ordenada y flexible. La integración de plugins se realiza utilizando importación dinámica (`import()`), asegurando que solo se carguen los módulos que realmente se utilizan.

### Beneficios
- **Modularidad**: Los plugins se pueden agregar, modificar o eliminar sin afectar el núcleo de la aplicación.
- **Flexibilidad**: Permite a los desarrolladores ampliar las funcionalidades de la aplicación sin cambiar su estructura central.
- **Escalabilidad**: El sistema puede crecer al agregar más plugins sin comprometer el rendimiento.

## 2. Estructura del Sistema

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcAHoGA_Pi50d1uFXtFpu1DLuorOD48dWpO4vQ5sdBrldi7ryieE8-eFQTcw4qYufDFOTd_OTEd4J1wgFjKSZXcTHRk10X5LbR0nl6l89rQif2XlEFPQnSVDiDxlB_YhOB7ZDLJtgNtlNcVibzhtOIGU8g?key=a-9MstdKlZ5cWvVkGRr6lQ)

La estructura del sistema se organiza en diferentes módulos y carpetas:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc0BBRRP_vrmlMJH3LiQElEjyQ1kpzYzwfpI6v_HOI9HuYAUvVa5b76a8QY1kkaqdRabVsCTqeTMGODsZSM2gQNyn6LK9qiJ8-nWp5DpQDddLovH98_Re4iOebgc6ertZUUYrjqJ0cXU4oYPJdqZtsGb6tm?key=a-9MstdKlZ5cWvVkGRr6lQ)

# Documentación del Sistema de Plugins

## 3. Creación e Integración de Plugins

### 3.1. Estructura de un Plugin

Cada plugin debe seguir una estructura específica para integrarse correctamente con el sistema. Un plugin debe exportar dos funciones principales:

- **`initPlugin(Mediator)`**: Esta función se llama cuando el plugin es cargado por el `PluginSystem`. Aquí es donde el plugin se inicializa y se conecta al `Mediator` para suscribirse a eventos específicos.
- **`handleEvent(event, data)`**: Esta función maneja los eventos que se envían desde la aplicación principal. Según el evento recibido, el plugin realiza acciones específicas.

### 3.2. Pasos para Crear un Nuevo Plugin

1. **Crear el Archivo del Plugin**: En la carpeta `src/plugins`, crea un archivo con un nombre descriptivo, por ejemplo, `nuevo-plugin.js`.
2. **Agregar las Funciones Requeridas**:
   - **`initPlugin(Mediator)`**: Conecta el plugin con el `Mediator`.
   - **`handleEvent(event, data)`**: Maneja eventos específicos según la lógica del plugin.
3. **Implementar la Lógica del Plugin**: Implementa la lógica necesaria para el evento en cuestión. Puedes suscribirte a eventos como `'saludar'`, `'cambiarIdioma'`, o definir eventos nuevos.

### 3.3. Cargar el Plugin en la Aplicación

Para cargar un plugin en la aplicación, sigue los siguientes pasos:

1. **Modificar `main.js`**:
   - Usa el método `loadPlugin` de `PluginSystem` para cargar el plugin.
   - Envía eventos a través del `Mediator` para interactuar con el plugin.

## 4. Documentación de la API del Sistema de Plugins

### 4.1. Métodos del `PluginSystem`

- **`loadPlugin(pluginName)`**:
  - **Descripción**: Carga un plugin de forma asíncrona y lo inicializa.
  - **Parámetro**: `pluginName` - El nombre del archivo del plugin a cargar.
  - **Retorno**: Ninguno.
  - **Ejemplo**: `pluginSystem.loadPlugin('mi-plugin.js');`

- **`executePlugin(pluginName, event, data)`**:
  - **Descripción**: Ejecuta un evento en un plugin cargado.
  - **Parámetros**:
    - `pluginName` - El nombre del plugin.
    - `event` - El nombre del evento a ejecutar.
    - `data` - Los datos que se pasarán al evento.
  - **Retorno**: Ninguno.

### 4.2. Eventos Usados en los Plugins

- **`saludar`**: Envía un saludo con el nombre proporcionado.
- **`cambiarIdioma`**: Cambia el idioma de salida (por ejemplo, 'es' o 'en').
- **`registrarUsuario`**: Registra el nombre del usuario actual.
- **`obtenerEstadisticas`**: Muestra estadísticas actuales del plugin.
- **`resetear`**: Resetea el contador de saludos.


![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfDOKTsotc_WfJwZUnDabOf9pL0cjhNrjAchcDLn1ABncjsGeSvsMjNZVBoErozLnGzpdUkfBJd79BPJzEQhsGpkFpSSoCSaJHr8Urx5ggmfydYpmmDg1k_S75GXlvCsWlc2tjWP96JGhyOEgPIYy_u5VrN?key=a-9MstdKlZ5cWvVkGRr6lQ)

## 5. Pruebas Unitarias y de Integración

### 5.1. Pruebas Unitarias

Las pruebas unitarias se encuentran en el directorio `__tests__/unit`. Se prueban los componentes básicos del sistema como `EventEmitter` y `Mediator`.

### 5.2. Pruebas de Integración

Las pruebas de integración se ubican en el directorio `__tests__/integracion`. Estas pruebas se aseguran de que el `PluginSystem` interactúe correctamente con los plugins y que el `Mediator` gestione adecuadamente los eventos entre la aplicación y los plugins.

**Ejecución de pruebas** con:

```bash
npx jest
