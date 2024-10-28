
### Implementación de un Sistema de Plugins para una Aplicación Web
##### Descripción
Este proyecto consiste en desarrollar un sistema de plugins que permita añadir funcionalidades adicionales a una aplicación web mediante módulos externos. La arquitectura está diseñada utilizando los patrones de diseño **Observer** y **Mediator** para gestionar la comunicación entre los plugins y la aplicación principal. 

##### Requisitos

- Uso patrones  Observer y Mediator
- Carga dinámica de plugins mediante `import()` dinámico
- Aislamiento en la ejecución de los plugins
- creacion e integrar nuevos plugins
- Pruebas unitarias y de integración del sistema

#### Estructura del Proyecto
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdz12z0VYfE3KNUqEkXHqoM3RjHEZP8KztsdVIAZuP_mvpS-cq3nh2PEoTZzVy4jp_NSnvCTEpDsGgCj4cHrYpYSSbViYMP-jb-w0UdQKLIo1eq_1OvQtRGgDQy20Z0wa1EKDoUALKSxSGbfRAokXYwuJUD?key=a-9MstdKlZ5cWvVkGRr6lQ)

#### Diagrama
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfhFmXatA8yt695ojG4yVkSTlmkx_je-1YogamBB6cK8oX4FCPLzovrdYY7wPPW6gTOtQlz60FYZf_PFqrz2lsFlA0zKjmLtpmOY95UvCWCbTwl2Kzvp01AgiHN1qTDZGpOtr4cVd9zjKSWtgpNcZgbTQbd?key=a-9MstdKlZ5cWvVkGRr6lQ)

##### Beneficios
1.-Modularidad: Los plugins se pueden agregar, modificar o eliminar sin afectar la aplicación.
2.-Flexibilidad: Permite a los desarrolladores ampliar las funcionalidades de la aplicación sin cambiar su estructura central.
3.-: El sistema puede crecer al agregar más plugins sin comprometer el rendimiento.

#####  Diseño e Implementación
1.-Patrones de Diseño
-Observer (Emisor de Eventos)
El patrón Observer permite suscribir y emitir eventos para manejar la comunicación entre los módulos. La clase EmisorEventos

######  emisor evento.js:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfhl0wiAhsRmECIFnWKiAK3j8yEGvEi0Qth8NaEMPusIyRY2qEQvhrHq9MU50wDGtQcwqtmbNETpZV9SiubwPwm42KcN3nm8Z8ICoX-XEGf6Gk8-Mkw_foWsD8a7s2ncxDfnZNcdnZsAkrEVa1vKIyv8hI?key=a-9MstdKlZ5cWvVkGRr6lQ)

###### Mediator

El patrón Mediator centraliza la comunicación entre los diferentes módulos lo cual simplifica  el envío de mensajes entre componentes.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeKDja3axfGv8cwWGb9wa5Z5W-hUi1RQb3NfRgq0CU6CkSljz1GV9Rucp2ZRwZ__kbvDpdSde0Ri0hbmNwtp_mHo34omo8_pREIdoMY5qlweBFC-cvhuNQECAUnjfvlQ2KJOHsbqfpGnTZSLo6eqdmT4QEA?key=a-9MstdKlZ5cWvVkGRr6lQ)

  

##### 2. Carga Dinámica 
Los plugins se cargan de manera dinámica usando import() en SistemaPlugins, por ello permite añadir nuevos módulos de forma asíncrona.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeoUdc5iRIYtFeRSVk0QOhIbV2drIopB5frVOKAmYVVcfNBf4VJEiD6UayM6Wgs1iBpNTxvTimPyvl7RrsJodgzN8P_QibjFCWuiB1BEPDX6ssk6Bix6akrsp8CXsVJ9Rx3EgfrPMzqE5V_SGXqugOskuK0?key=a-9MstdKlZ5cWvVkGRr6lQ)

  
######  3. Seguridad y Aislamiento de Plugins
El uso de import() permite que el plugin se cargue aisladamente, evitando la interferencia entre módulos.

##### Guía de Extensibilidad
###### Crear un Plugin
creacion del nuevo plugin:
1.  Definir una función initPlugin que reciba el mediador
2.  Usar el mediador para suscribirse y emitir eventos
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcNPJ6D2WvS5Dxo0dD1KczAOf86Sz8Ju-Ug_fAvWNd0pQnGtr_yuFbfVvsIGuq6eRzcxF06g2WIdmvF7jD4pk1QSTxtSF1FakbbczSf0kD4GsJs4HRnjZzW__SZDogku8PU6j3l1O3WtQF_5JFoA6ZfExWr?key=a-9MstdKlZ5cWvVkGRr6lQ)

  

#####  Integración de Plugins
1.  Crear el archivo del plugin en la carpeta plugins
2.  En el archivo principal main.js, cargar el plugin:
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdjjudBO-aAKcKVDx6HVxwOlY0S64m7sNTUPzZiAN_290PFsd8pYFHQm1EWckAt_ObMvSecG7saFCRaJBUJGZl1sLrKXReAL-YeOlUXtiWYC6aOEk_LzIJPkSbeMCxvLhXweRYEVNZQgFKa-VUYnmEvSw6C?key=a-9MstdKlZ5cWvVkGRr6lQ)

  

##### Pruebas
 .- http-server -c-1
primera ejecucion :
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcuOkEzHV5CSe3NCuF4r2ymAl6xqtWYy2Z1dYhcpiZE6K2DPF0Gt3olNFmzwTHvkJrB4Jnb5pM1K_531ufPbjknXx7VzOI2vo0t_WV0KlMaDvNhsLiyT2AI7drC9DDEICSM4ywqtdhyOqU4kUv0N5M3J2MP?key=a-9MstdKlZ5cWvVkGRr6lQ)


![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJ8qY5_4fyRpbIqgDPY2UspZ0SJBUiOY8WSuOXEia5OwABfP7L2pRlaym4O2TjgSozWqEx_AkPnbGxg8yEPTUo837b8ZxvSSBVWnIlW77-uFC2SdpMVntmjaommEoM5c6SI1_QFGWVtkBCk7ZugkzDToGN?key=a-9MstdKlZ5cWvVkGRr6lQ)

1.- primera ejecución (En Español):
1.1- El usuario ingresa "Juan" en el campo de texto y presiona "Enter".
La app responde con el mensaje ¡Hola, Juan! Has saludado 1 veces. indica que el plugin ha registrado el saludo y cuenta la cantidad de veces que el usuario ha sido saludado.
.-Los datos adicionales incluyen:
.-Contador: que muestra el número de saludos realizados
.-Idioma:  idioma actua es español
.-Estadísticas: que presenta un objeto JSON con datos de seguimiento, donde contador:0, idioma:es, y usuario:Carlos.  reflejalos  datos adicionales del sistema para el usuario.
###### Cambio de Idioma a inglés:
2.- presionar el botón "Cambiar a Inglés", el sistema cambia el idioma de los mensajes.
2.-Después del cambio, cuando el usuario saluda nuevamente, el mensaje ahora se muestra en inglés: Hello, Juan! Has saludado 2 veces. Esto confirma que el plugin responde dinámicamente al cambio de idioma.

###### pruebas unitarias y de integración 
###### comando:  npx jest pruebas/integracion/ , npx jest pruebas/unitarias/
**prueba unitaria**
.-Pruebas unitarias (emisor-eventos.test.js, mediador.test.js, sistema-plugins.test.js)  verifica el comportamiento de los métodos.
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd3Xcs1j3zD3ZTQ9iVRs-QK75RRNdGoKFwBEASTyP4rAscKJjMoE8v6AZ6K9WzTrEMyC1SpAvX6dt_a93XBJC4ZTcBQo1y5BpCzd0Jb_iYry6inig0xFxs1BDiScxgiulcoL_h02M-iOmYd5HiO4cAm1_NB?key=a-9MstdKlZ5cWvVkGRr6lQ)

**Pruebas de integración**
(main.integration.test.js, sistema-plugins.integration.test.js) comprueba la interacción entre componentes.
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcbfQs62t66BdQNdAVwk5kMWq7Fi5RSZ7sQUT8jRqhuHSfZoYLUrALdB7fkrk_DVFeEO_sjq4RPn4uMtw0JZDr3L5UPqF52evhZwB0YuAB7_EHv--r_aOYWy49IXQX-vF8E4uiDzVbEArnIfgHegmZbSvo?key=a-9MstdKlZ5cWvVkGRr6lQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfcosMcKOgk1myuwngULLAMHlp6gT9s2roI-YQ5oFRpbJv5f040ybVLU_mkaJzn6DBySM-yy9flI87InzXoYTxn7gUG9TG9PQ0plvnTwN-oCNzNCkSltJXygweLvg_Iam3NTtaVMumo57vNaBfLBJdTruxg?key=a-9MstdKlZ5cWvVkGRr6lQ)

#### Conclusión

El sistema de plugins es modular, extensible. Los patrones de diseño aplicados aseguran una buena separación de responsabilidades, facilitando la adición de nuevas funcionalidades mediante módulos externos.

#### referencias 
- Getting started. (2019). Healthcare Policy | Politiques de Santé, 1(1), 1–3. https://doi.org/10.4337/9781786435767.00007


- Import. (s/f). MDN Web Docs. Recuperado el 28 de octubre de 2024, de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

- Refactoring and design Patterns. (s/f). Refactoring.Guru. Recuperado el 28 de octubre de 2024, de https://refactoring.guru/


