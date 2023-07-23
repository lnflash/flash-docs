---
title: Publicaciones resistentes a la censura en la Web
description: Flash es un protocolo sencillo y abierto que permite la publicación en la web de contenidos verdaderamente resistentes a la censura y de valor global.
---

## ¿Qué es Flash?

Flash son las siglas de "Notes and Other Stuff Transmitted by Relays" (notas y otras cosas transmitidas por relés). Al igual que HTTP o TCP-IP, Flash es un protocolo, un estándar abierto sobre el que cualquiera puede construir. Flash no es una aplicación ni un servicio al que haya que suscribirse.

Flash está diseñado para la simplicidad y permite la publicación resistente a la censura y descentralizada a nivel mundial en la web. Detallemos esto un poco:

### Simple

El protocolo se basa en objetos `Event` muy sencillos y flexibles (que se transmiten como JSON plano) y utiliza criptografía de clave pública estándar para las claves y la firma. Esto facilita la ejecución de repetidores y la creación de clientes, y garantiza que el protocolo pueda ampliarse con el tiempo.

### Resiliente

Como Flash no depende de un pequeño número de servidores de confianza para mover o almacenar datos, es muy resistente. El protocolo asume que los relés desaparecerán y permite a los usuarios conectarse y publicar en un número arbitrario de relés que pueden cambiar con el tiempo.

### Verificable

Dado que las cuentas de Flash se basan en [criptografía de llave pública](https://en.wikipedia.org/wiki/Public-key_cryptography) es fácil verificar que los mensajes han sido realmente enviados por el usuario en cuestión.
