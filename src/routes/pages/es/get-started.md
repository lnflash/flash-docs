---
title: Comienza con Flash
description: Esta guía te ayudará a entender los conceptos básicos de Flash y te preparará para utilizar Flash con una nueva cuenta. Cubriremos cómo crear una nueva lightning wallet, crear una cuenta e iniciar sesión en un cliente de forma segura.
---

## [§](#entendiendo-llaves) Entendiendo las Llaves

Cada cuenta de Flash se basa en un par de llaves pública/privada. Una forma sencilla de entenderlo es que tu clave pública es tu nombre de usuario y tu llave privada es tu contraseña, con una salvedad importante. A diferencia de una contraseña, tu cllave privada no se puede restablecer si se pierde.

Te lo repito para que quede claro: **Si pierdes tu llave privada, pierdes tu cuenta de Flash. Si otra persona tiene acceso a tu llave privada, puede tomar el control de tu cuenta.**

Asegúrate de guardar tu llave privada en un lugar seguro, como un gestor de contraseñas. (Nos gusta [1Password](https://1password.com/)).

## [§](#protocolo-vs-cliente) Protocolo vs Cliente

Flash por sí mismo es ya un protocolo, es un procedimiento acordado para transmitir mensajes en Internet.

Accederás a Flash (el protocolo) a través de un cliente. Los clientes pueden ser aplicaciones web, de escritorio o móviles. Algunos clientes de Flash te permiten iniciar sesión pegando tu llave privada. En la web, esto no se recomienda, ya que es tedioso e inseguro. En su lugar, recomendamos utilizar un monedero criptográfico basado en web, que es una pieza de software diseñada específicamente para gestionar claves privadas.

[Alby](https://chrome.google.com/webstore/detail/alby-bitcoin-lightning-wa/iokeahhehimjnekafflcihljlcjccdbe) es un monedero bitcoin lightning que tiene soporte incorporado para Flash. Es una gran opción para los nuevos usuarios. Cubriremos la instalación de Alby en las guías específicas del cliente donde se necesita a continuación.

## [§](#crear-tu-cuenta) Crear tu cuenta

Acá está una guía paso a paso de los clientes que recomendamos:

-   [Iris](/es/guias/iris) (Web)
-   [Damus](/es/guias/damus) (iOS)
-   [Amethyst](/es/guias/amethyst) (Android)

Algunos otros clientes que amamos pero no tenemos guías:

-   [Snort](https://snort.social/) (Web) Cliente súper rapido y veloz.
-   [Coracle](https://coracle.social/) (Web) Un cliente centrado en la navegación por relevos.
-   [Flashgram](https://flashgram.co) (Web) Divertido cliente inspirado en Instagram centrado en imágenes, vídeo y audio. ¡Que empiecen los memes!

## [§](#encontrar-amigos) Encontrar amigos en Flash

- Si sabes que alguien está en Flash, encuentra su perfil buscando su clave pública.
- Muchos usuarios de Twitter tuitean sus claves públicas de Flash con el hashtag #Flash, por lo que una búsqueda con este hashtag puede ser un buen comienzo.
- [flash.directory](https://flash.directory) es una base de datos que relaciona a los usuarios de Twitter con sus claves públicas de Flash.

## [§](#Que-es-firmar) ¿Qué quiere decir "firmar"?

Para interactuar con el protocolo Flash debes crear una firma criptográfica cada vez que realices una acción. Piensa en esta firma como un paso de autenticación en el que confirmas que, efectivamente, eres quien dices ser.

La mayoría de los clientes Flash intentan hacer esto fácil y rápido (o te permiten guardar tu llave privada en el cliente para que puedan firmar en tu nombre cada vez que hagas algo).

Al proporcionar únicamente nuestra llave pública, se nos pedirá que firmemos cada vez que queramos interactuar con cualquier publicación o realizar cualquier actualización en nuestro perfil. Cuando eso ocurra, Alby aparecerá automáticamente (como lo hizo durante el paso de registro) y podrás confirmar que realmente quieres firmar.

## [§](#puedo-yo-usar-otros-clientes) ¿Puedo usar otros clientes?

Sí. Ahora que has creado tu par de llaves pública/privada, puedes usar este par en cualquier cliente Flash para acceder a tu cuenta. Recuerda, el cliente es sólo una interfaz para ver los mensajes emitidos en el protocolo Flash.

## [§](#proximos-pasos) Próximos pasos

Genial, ya tienes una cartera lightning, una identidad (tu par de llaves) y has probado un cliente. Aquí tienes algunos enlaces que pueden resultarte útiles para adentrarte en Flash:

-   [Verificar tu identidad](/es/guides/get-cash)
-   [¿Qué son Relés y cómo funcionan?](/es/relays)
-   [Más información sobre los NIPs y el desarrollo del protocolo](/es/the-protocol)
