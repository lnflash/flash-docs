---
title: Infrastructure Flash
description: Découvrez l'architecture technique alimentant les capacités Bitcoin, Lightning et NOSTR de Flash
---

## Comment Flash Fonctionne Sous le Capot

Flash combine des technologies open-source pour créer une application financière transparente. Cette page explique l'infrastructure technique alimentant Flash.

## Stack Technologique Central

### 1. Intégration Bitcoin Core

Flash se connecte au réseau Bitcoin via :
- **Nœuds Bitcoin Core** pour la validation de la blockchain
- **Serveur Electrum** pour un accès efficace aux données
- **Indexation d'adresses** pour des recherches rapides de soldes

Cela fournit des fonctionnalités Bitcoin on-chain avec des retraits en auto-garde, la vérification des transactions et la détection des dépôts.

### 2. Implémentation du Lightning Network

Flash utilise [LND](https://github.com/lightningnetwork/lnd) pour les fonctionnalités Lightning :

- **Nœuds LND** fournissent les capacités Lightning de base
- **Middleware personnalisé** gère la liquidité des canaux

Permettant des paiements instantanés, des micropaiements de moins d'un centime et des transactions transfrontalières.

### 3. Intégration du Protocole NOSTR

Flash incorpore NOSTR via :
- **Connexions à plusieurs relais** pour la résistance à la censure
- **Gestion des clés côté client** pour le contrôle d'identité
- **Chiffrement de bout en bout** pour les messages privés

Alimentant la messagerie directe, les chats de groupe et la communication d'entreprise.

### 4. Système eCash

Flash implémente un système eCash chaumien offrant :
- **Confidentialité totale des transactions**
- **Mise à l'échelle hors-chaîne**
- **Capacités de paiement hors ligne**

### 5. Intégration BTCPay Server

Flash tire parti de [BTCPay Server](https://btcpayserver.org/) pour :
- Le traitement des paiements des **Cartes Flash**
- La gestion du **système de récompenses**
- L'infrastructure des **services marchands**

## Architecture du Système

L'architecture de Flash est conçue pour la fiabilité, l'évolutivité et la sécurité avec ces composants clés :

### Composants Serveur
- Couche API, Service d'authentification, Service Lightning
- Service Bitcoin, Relais NOSTR, Monnaie eCash
- Cluster de base de données, Moteur d'analyse, Serveur BTCPay

### Composants Client
- Stockage sécurisé des clés, Base de données locale, Client NOSTR
- Systèmes de sauvegarde, Logique de paiement

## Modèle de Sécurité

Flash emploie plusieurs couches de sécurité :
- Nœuds protégés par HSM pour les clés Lightning et Bitcoin
- Portefeuilles multi-signatures pour les réserves de stockage à froid
- Audits de sécurité réguliers et bases de données chiffrées
- Limitation de débit et systèmes de détection d'anomalies

## Composants Open Source

Flash s'appuie sur et contribue à :
- [LND](https://github.com/lightningnetwork/lnd) - Implémentation du Lightning Network
- [Galoy](https://github.com/GaloyMoney/galoy) - Infrastructure bancaire Bitcoin
- [NOSTR](https://github.com/nostr-protocol/nostr) - Protocole social décentralisé
- [Breez SDK](https://github.com/breez/breez-sdk) - Composants SDK Lightning
- [Cashu](https://github.com/cashubtc/cashu) - Implémentation eCash
- [BTCPay Server](https://github.com/btcpayserver/btcpayserver) - Processeur de paiement auto-hébergé

## Ressources pour Développeurs

- [Documentation API](https://docs.getflash.io/api)
- [Dépôts GitHub](https://github.com/LNFlash)
- [Discord Développeurs](https://discord.gg/flashbitcoin)
- [Blog Technique](https://blog.getflash.io/tech)

Flash s'engage dans le développement open-source et accueille les contributions de la communauté.