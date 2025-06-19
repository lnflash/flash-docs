---
title: El Proyecto Galoy
description: Aprende sobre Galoy, la infraestructura bancaria de Bitcoin de código abierto que impulsa Flash
---

## ¿Qué es Galoy?

Galoy es la infraestructura bancaria de Bitcoin de código abierto que impulsa Flash y otras aplicaciones de Bitcoin en todo el mundo. Creado para hacer que Bitcoin y Lightning Network sean accesibles a comunidades globalmente, Galoy proporciona la base para servicios financieros modernos e inclusivos construidos sobre Bitcoin.

## La Misión de Galoy

La misión de Galoy es acelerar la adopción de Bitcoin facilitando la construcción de soluciones bancarias de Bitcoin. Al crear infraestructura gratuita y de código abierto, Galoy permite a empresas, comunidades y países proporcionar servicios de Bitcoin a sus usuarios sin tener que construir sistemas técnicos complejos desde cero.

El proyecto apunta a:

- Reducir la barrera de entrada para servicios bancarios de Bitcoin
- Llevar inclusión financiera a los miles de millones de personas no bancarizadas en todo el mundo
- Crear estándares abiertos e interoperables para la banca de Bitcoin
- Fomentar un ecosistema global de aplicaciones financieras de Bitcoin

## Cómo Flash Usa Galoy

Flash está construido sobre la infraestructura de Galoy, aprovechando sus componentes probados en batalla para proporcionar una experiencia de usuario fluida. Los componentes clave de Galoy que impulsan Flash incluyen:

### Características Bancarias Centrales

- **Gestión de Cuentas**: Registro de usuarios, integración KYC y estructuras de cuentas
- **Billeteras de Bitcoin y Lightning**: Infraestructura segura de billeteras para transacciones tanto en cadena como Lightning
- **Procesamiento de Pagos**: Manejo de depósitos, retiros y transferencias internas
- **Integración de Lightning Network**: Gestión de canales, liquidez y optimización de enrutamiento

### Infraestructura Backend

- **Capa API**: APIs RESTful y GraphQL para aplicaciones cliente
- **Sistema de Autenticación**: Autenticación y autorización segura de usuarios
- **Motor de Contabilidad**: Sistema de contabilidad de doble entrada para precisión financiera
- **Servicio de Notificaciones**: Notificaciones push para transacciones y actualizaciones de cuenta

### Herramientas Administrativas

- **Herramientas de Cumplimiento**: Monitoreo y reporte de transacciones
- **Panel de Servicio al Cliente**: Herramientas de gestión de usuarios y soporte
- **Gestión de Tesorería**: Herramientas para administrar reservas de Bitcoin
- **Panel de Análisis**: Información sobre el uso y rendimiento del sistema

## Historias de Éxito de Galoy

Más allá de Flash, Galoy impulsa varias aplicaciones exitosas de Bitcoin en todo el mundo:

### Bitcoin Beach Wallet

La implementación original de Galoy se lanzó en El Zonte, El Salvador (conocido como "Bitcoin Beach") antes de que el país adoptara Bitcoin como moneda de curso legal. Esta billetera enfocada en la comunidad demostró que Bitcoin podía servir como dinero cotidiano en una economía local y ayudó a inspirar la adopción nacional de Bitcoin.

### Bitcoin Jungle

Una iniciativa comunitaria de Bitcoin en Costa Rica que usa la infraestructura de Galoy para llevar Bitcoin a comerciantes y residentes locales, enfocándose en crear economías circulares impulsadas por Bitcoin.

### Ibex Mercado

Ibex aprovecha la tecnología de Galoy para proporcionar servicios de Bitcoin y Lightning Network a empresas en toda América Latina, ofreciendo procesamiento de pagos, servicios de remesas y herramientas financieras.

## Arquitectura Técnica

La arquitectura de Galoy es modular y flexible, permitiendo que implementaciones como Flash personalicen sus servicios mientras mantienen la funcionalidad central:

### Componentes Clave

- **Integración con Bitcoin Core**: Se conecta a la red Bitcoin para transacciones en cadena
- **Integración LND**: Impulsa las capacidades de Lightning Network
- **API GraphQL**: Proporciona acceso a datos para aplicaciones cliente
- **MongoDB Seguro**: Almacena datos de usuarios y transacciones
- **Backend NodeJS**: Gestiona la lógica de aplicación y procesos en segundo plano
- **Orquestación Kubernetes**: Asegura operaciones confiables y escalables

### Características de Seguridad

- **Almacenamiento en Frío Multi-firma**: Para gestión segura de reservas
- **Integración HSM**: Seguridad de hardware para gestión de claves
- **Registro Integral**: Para monitoreo de seguridad y cumplimiento
- **Auditorías de Seguridad Regulares**: Por firmas de seguridad de terceros

## Desarrollo de Código Abierto

Galoy es completamente de código abierto, con todo el código disponible en GitHub bajo licencia MIT. Este compromiso con el código abierto asegura:

- **Transparencia**: Cualquiera puede inspeccionar el código por seguridad o funcionalidad
- **Colaboración**: Desarrolladores de todo el mundo pueden contribuir mejoras
- **Soberanía**: Los usuarios pueden auto-hospedar sus propias instancias si lo desean
- **Innovación**: Las características desarrolladas por una implementación benefician a todas

## Involucrándose con Galoy

Los desarrolladores interesados en Galoy pueden contribuir de varias maneras:

### Para Desarrolladores

- **GitHub**: Explora y contribuye al [código de Galoy](https://github.com/GaloyMoney/galoy)
- **Documentación de Desarrollo**: Comienza con la [documentación para desarrolladores](https://dev.galoy.io)
- **Chat de la Comunidad**: Únete a las discusiones en [Slack](https://join.slack.com/t/galoymoney-workspace/shared_invite/zt-rvnhsdb5-72AZCD_jzw6_Q05aCs0SgA)

### Para Empresas

- **Desplegar Galoy**: Lanza tu propia plataforma bancaria de Bitcoin
- **Integración**: Conecta servicios existentes al ecosistema Galoy
- **Personalización**: Adapta Galoy a tus necesidades específicas de mercado

## Desarrollo Futuro

El proyecto Galoy continúa evolucionando con características que beneficiarán a los usuarios de Flash:

- **Sistema Federado**: Permitiendo que diferentes instancias de Galoy interactúen sin problemas
- **Gestión Avanzada de Tesorería**: Herramientas para optimizar reservas de Bitcoin
- **Características de Privacidad Mejoradas**: Mejorando la privacidad financiera del usuario
- **Rampas Fiat**: Mejor integración con sistemas financieros tradicionales
- **SDKs para Desarrolladores**: Facilitando la construcción sobre Galoy

## Recursos

- [Sitio Web de Galoy](https://galoy.io)
- [Repositorio GitHub](https://github.com/GaloyMoney/galoy)
- [Documentación](https://dev.galoy.io)
- [Twitter](https://twitter.com/GaloyMoney)

A medida que Flash continúa creciendo, su base en la infraestructura de código abierto de Galoy asegura que permanezca a la vanguardia de la tecnología financiera de Bitcoin mientras mantiene la seguridad y confiabilidad que los usuarios esperan.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="breez-sdk" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Breez SDK
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="ibex-mercado" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      IBEX Mercado
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>