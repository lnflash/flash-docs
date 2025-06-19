---
title: Infraestructura de Flash
description: Aprende sobre la arquitectura técnica que impulsa las capacidades de Bitcoin, Lightning y NOSTR de Flash
---

## Cómo Funciona Flash Bajo el Capó

Flash combina tecnologías de código abierto para crear una aplicación financiera fluida. Esta página explica la infraestructura técnica que impulsa Flash.

## Stack de Tecnología Central

### 1. Integración con Bitcoin Core

Flash se conecta a la red Bitcoin a través de:
- **Nodos Bitcoin Core** para validación de blockchain
- **Servidor Electrum** para acceso eficiente a datos
- **Indexación de direcciones** para búsquedas rápidas de saldo

Esto proporciona funcionalidad de Bitcoin en cadena con retiros de auto-custodia, verificación de transacciones y detección de depósitos.

### 2. Implementación de Lightning Network

Flash usa [LND](https://github.com/lightningnetwork/lnd) para funcionalidad Lightning:

- **Nodos LND** proporcionan capacidades centrales de Lightning
- **Middleware personalizado** gestiona la liquidez de canales

Habilitando pagos instantáneos, micropagos de sub-centavos y transacciones transfronterizas.

### 3. Integración del Protocolo NOSTR

Flash incorpora NOSTR a través de:
- **Múltiples conexiones de retransmisión** para resistencia a la censura
- **Gestión de claves del lado del cliente** para control de identidad
- **Cifrado de extremo a extremo** para mensajes privados

Impulsando mensajería directa, chats grupales y comunicación empresarial.

### 4. Sistema eCash

Flash implementa un sistema eCash chaumiano que ofrece:
- **Privacidad total de transacciones**
- **Escalado fuera de cadena**
- **Capacidades de pago sin conexión**

### 5. Integración con BTCPay Server

Flash aprovecha [BTCPay Server](https://btcpayserver.org/) para:
- Procesamiento de pagos de **Tarjetas Flash**
- Gestión del **sistema de recompensas**
- Infraestructura de **servicios para comerciantes**

## Arquitectura del Sistema

La arquitectura de Flash está diseñada para confiabilidad, escalabilidad y seguridad con estos componentes clave:

### Componentes del Servidor
- Capa API, Servicio de Autenticación, Servicio Lightning
- Servicio Bitcoin, Retransmisor NOSTR, Casa de Moneda eCash
- Clúster de Base de Datos, Motor de Análisis, BTCPay Server

### Componentes del Cliente
- Almacenamiento Seguro de Claves, Base de Datos Local, Cliente NOSTR
- Sistemas de Respaldo, Lógica de Pago

## Modelo de Seguridad

Flash emplea múltiples capas de seguridad:
- Nodos protegidos por HSM para claves Lightning y Bitcoin
- Billeteras multi-firma para reservas de almacenamiento en frío
- Auditorías de seguridad regulares y bases de datos cifradas
- Limitación de velocidad y sistemas de detección de anomalías

## Componentes de Código Abierto

Flash se basa en y contribuye a:
- [LND](https://github.com/lightningnetwork/lnd) - Implementación de Lightning Network
- [Galoy](https://github.com/GaloyMoney/galoy) - Infraestructura bancaria de Bitcoin
- [NOSTR](https://github.com/nostr-protocol/nostr) - Protocolo social descentralizado
- [Breez SDK](https://github.com/breez/breez-sdk) - Componentes SDK de Lightning
- [Cashu](https://github.com/cashubtc/cashu) - Implementación de eCash
- [BTCPay Server](https://github.com/btcpayserver/btcpayserver) - Procesador de pagos auto-hospedado

## Recursos para Desarrolladores

- [Documentación API](https://docs.getflash.io/api)
- [Repositorios GitHub](https://github.com/LNFlash)
- [Discord para Desarrolladores](https://discord.gg/flashbitcoin)
- [Blog Técnico](https://blog.getflash.io/tech)

Flash está comprometido con el desarrollo de código abierto y da la bienvenida a las contribuciones de la comunidad.