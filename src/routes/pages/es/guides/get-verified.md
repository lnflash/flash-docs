---
title: Obtén la verificación NIP-05
description: Cómo verificar tu identidad en Flash para obtener una marca de verificación y una manera más fácil de compartir tu cuenta..
---

## [§](#lo-que-aprenderás) Lo que aprenderás en esta guía

Es posible que hayas notado que en muchos clientes diferentes algunos usuarios tienen marcas de verificación, como en Twitter.

NIP-05 especifica cómo los usuarios de Flash pueden verificar sus identidades. Diferentes clientes muestran la verificación de formas ligeramente diferentes, pero es una forma importante de mostrar a la comunidad de Flash que eres un usuario real.

![Verificado en Snort](/images/snort-verified.webp)

El proceso de verificación en Flash está documentado en una Posibilidad de Implementación de Flash (NIP) llamada [NIP-05](https://github.com/flash-protocol/nips/blob/master/05.md).

NIP-05 permite a un usuario de Flash asignar su clave pública a un identificador de internet basado en DNS. El mecanismo de verificación es similar a como Google te pide que verifiques la propiedad de un dominio usando un registro DNS.

El beneficio principal de la verificación es que permite que un usuario de Flash sea identificado por un nombre legible por humanos en lugar de una clave pública larga y difícil de recordar. Esto permite a los usuarios verificados de Flash compartir fácilmente su identidad con otros.

Para utilizar NIP-05, los usuarios de Flash agregan una URL de nip05 a su perfil (la mayoría de los clientes admiten esto). Las URLs de NIP-05 se parecen a los correos electrónicos: bob@example.com. Veamos las partes:

1. Todo lo que está antes del símbolo `@` ("bob", en nuestro ejemplo). Esto debe coincidir con el valor del campo de nombre en tu perfil de Flash.
2. Todo lo que está después del símbolo `@` ("example.com", en nuestro ejemplo). Este es el dominio donde el cliente puede buscar un archivo `/.well-known/flash.json` que contiene el nombre y la clave pública del usuario.

Cuando los clientes ven una URL de nip05, buscarán un archivo `/.well-known/flash.json` en el dominio especificado. Este archivo debe contener la clave pública de Flash del usuario especificado. Lee más detalles en la especificación de NIP-05.

Aunque suena técnico, es sorprendentemente fácil de verificar. Veamos cómo hacerlo.

## [§](#verificación-gratuita) Obtén la verificación a través de un servicio gratuito

En este momento, hay varios proveedores que están ayudando a la gente a obtener verificación de forma gratuita. Esta es una gran opción si aún no tienes sats en tu billetera lightning. Si es posible, apoya estos proyectos a través de donaciones. ⚡🤙

-   [Bitcoin Flash](https://bitcoinflash.com/)
-   [Flashcheck.me](https://flashcheck.me)
-   [Flash.industries](https://flash.industries/)
-   [NIP05.social](https://nip05.social)
-   [Flash-Check.com](https://flash-check.com/)

## [§](#verificación-pagada) Paga a un proveedor por la verificación

Si no tiene su propio dominio o no desea configurarlo usted mismo, puede aprovechar una versión gratuita o paga (generalmente solo unos pocos [sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats)) Servicio NIP-05. Aquí hay algunos:

-   [Flashplebs](https://flashplebs.com)
-   [Flash Verified](https://flashverified.com)
-   [Alby](https://getalby.com)
-   [Flash Directory](https://flash.directory)
-   [Flash.band](https://nip05.flash.band)
-   [Flash.com.au](https://flash.com.au)
-   [Vida](https://Vida.page)
-   [Stacker News](https://stacker.news)

## [§](#verificacion-autohospedada) Verificación autohospedada

Si ya posee un dominio, esta es una opción gratuita. Solo necesita agregar un archivo `.well-known/flash.json` a su dominio. El contenido del archivo debe ser el siguiente:

```json
{
    "nombres": {
        "YOUR_FLASH_NAME": "TU_FLASH_PUBLIC_KEY"
    }
}
```

Opcionalmente, también puede agregar una sección para que los clientes sepan en qué relés es probable que lo encuentren:

```json
{
   "nombres": {
     "YOUR_FLASH_NAME": "YOUR_FLASH_PUBLIC_KEY_IN_HEX_FORMAT"
   },
   "relés": {
     "TU_FLASH_PUBLIC_KEY_IN_HEX_FORMAT": [
       "wss://relé.uno",
       "wss://relé.dos",
       ...
     ]
   }
}
```

Asegúrese de usar la versión hexadecimal de su clave pública en su archivo `flash.json`. Esta es la versión de la clave que **no** comienza con `npub`.

Puede convertir su clave en [Flash.band](https://flash.band)

![Obtenga su clave hexadecimal](/images/get-hex-key.webp)

Finalmente, asegúrese de que este archivo se sirva con el encabezado `Access-Control-Allow-Origin` establecido en `*`, ya que los clientes deben poder acceder a él.
