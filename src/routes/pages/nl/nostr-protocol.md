---
title: Het NOSTR Protocol
description: Hoe NOSTR censuurbestendige communicatie mogelijk maakt in Flash's Chat functie
---

## Wat is NOSTR?

NOSTR (Notes and Other Stuff Transmitted by Relays) is een open protocol dat Flash's Chat functionaliteit aandrijft. Ontworpen voor censuurbestendige wereldwijde communicatie, creëert NOSTR een gedecentraliseerd sociaal netwerk waar geen enkele entiteit gebruikersgegevens of communicatie controleert.

In tegenstelling tot traditionele sociale netwerken en messaging apps die afhankelijk zijn van centrale servers, verspreidt NOSTR berichten over meerdere onafhankelijke relay servers. Deze architectuur maakt het bijna onmogelijk voor wie dan ook om communicatie het zwijgen op te leggen of de informatiestroom te controleren.

## Hoe NOSTR Flash Chat Aandrijft

Flash integreert NOSTR om een veilig, censuurbestendig chatsysteem te bieden dat wereldwijd werkt:

### Kern Chat Functies

- **Direct Messaging**: Privé gesprekken tussen gebruikers
- **Groepschats**: Communicatie tussen meerdere deelnemers
- **Publieke Kanalen**: Community discussieruimtes
- **Flash Support Kanaal**: Officieel ondersteuningskanaal voor gebruikers

### Integratie Voordelen

- **Cross-Platform Compatibiliteit**: Chat met vrienden die andere NOSTR clients gebruiken
- **Zelf-Soevereine Identiteit**: Beheer uw eigen cryptografische identiteit
- **Geen Centrale Autoriteit**: Geen bedrijf kan uw berichten bekijken of censureren
- **Persistentie**: Berichten blijven beschikbaar zelfs als Flash zou verdwijnen

## Technische Architectuur

NOSTR gebruikt een eenvoudig maar krachtig technisch ontwerp:

### Belangrijke Componenten

- **Public Key Cryptografie**: Elke gebruiker heeft een publiek/privé sleutelpaar
- **Events**: Gestandaardiseerd dataformaat voor alle inhoud (berichten, profielen, etc.)
- **Relays**: Servers die events opslaan en doorgeven tussen gebruikers
- **Clients**: Applicaties (zoals Flash) die interacteren met relays

### Hoe Het Werkt

1. **Identiteit Creatie**: Wanneer u Flash Chat instelt, genereert u een cryptografisch sleutelpaar
2. **Bericht Authoring**: Uw berichten worden ondertekend met uw privésleutel
3. **Bericht Publicatie**: Ondertekende berichten worden gepubliceerd naar meerdere relays
4. **Bericht Distributie**: Relays delen berichten met andere verbonden gebruikers
5. **Handtekening Verificatie**: Ontvangers verifiëren uw handtekening met uw publieke sleutel

### Relay Infrastructuur

Berichten in NOSTR verspreiden zich via een netwerk van relay servers:

- **Meerdere Relays**: Flash verbindt met verschillende relays voor redundantie
- **Relay Selectie**: Gebruikers kunnen kiezen welke relays ze vertrouwen
- **Relay Publishing**: Flash publiceert belangrijke berichten naar meerdere relays
- **Bericht Filtering**: Clients kunnen specifieke inhoud van relays opvragen

## Belangrijke NOSTR Functies in Flash

Flash benut NOSTR's mogelijkheden om verschillende belangrijke functies te bieden:

### Privacy en Beveiliging

- **End-to-End Encryptie**: Privéberichten zijn versleuteld
- **Cryptografische Verificatie**: Zorgt voor authenticiteit van berichten
- **Gebruikerscontrole**: Stel uw eigen privacyvoorkeuren in
- **Geen Telefoonnummer Vereist**: Gebruik zonder persoonlijke informatie prijs te geven

### Censuurbestendigheid

- **Geen Centrale Autoriteit**: Geen enkele entiteit kan uw stem het zwijgen opleggen
- **Relay Diversiteit**: Meerdere paden voor berichtlevering
- **Client Portabiliteit**: Toegang tot uw identiteit vanaf verschillende apps
- **Grenzeloze Communicatie**: Werkt wereldwijd zonder beperkingen

### Cross-Applicatie Compatibiliteit

- **Open Standaard**: Werkt met elke NOSTR-compatibele applicatie
- **Identiteit Portabiliteit**: Gebruik uw NOSTR identiteit over platforms
- **Contact Delen**: Maak verbinding met vrienden op verschillende apps
- **Ecosysteem Toegang**: Neem deel aan het bredere NOSTR netwerk

## NOSTR Gebruiken in Flash

Flash maakt NOSTR's krachtige mogelijkheden toegankelijk voor iedereen:

### Aan de Slag

1. **Open Flash**: Download en installeer de Flash app
2. **Toegang tot Chat Tab**: Tik op het Chat icoon in de navigatiebalk
3. **Maak Profiel**: Stel uw NOSTR identiteit in (of importeer bestaande sleutels)
4. **Begin met Messaging**: Maak verbinding met vrienden en doe mee aan kanalen

### Contacten Vinden

Maak verbinding met anderen op NOSTR via Flash:

1. **Scan QR Code**: Scan de NOSTR publieke sleutel QR code van een vriend
2. **Zoek op Sleutel**: Voer direct een NOSTR publieke sleutel in
3. **Gebruikersnaam Zoeken**: Vind mensen op hun NOSTR gebruikersnaam (indien geregistreerd)
4. **Doe Mee aan Kanalen**: Ontdek mensen in publieke discussieruimtes

### Uw Identiteit Beheren

Uw NOSTR identiteit in Flash is draagbaar en zelf-soeverein:

- **Backup Uw Sleutels**: Bewaar uw privésleutel veilig
- **Importeer Bestaande Sleutels**: Gebruik uw bestaande NOSTR identiteit in Flash
- **Meerdere Apparaten**: Toegang tot uw account vanaf verschillende apparaten
- **Identiteit Herstel**: Herstel uw profiel met uw privésleutel

## Zaps: Bitcoin Betalingen in Chat

Een krachtige functie van NOSTR in Flash is de mogelijkheid om Bitcoin betalingen direct in chatgesprekken te verzenden:

### Wat zijn Zaps?

Zaps zijn Bitcoin Lightning Network betalingen verzonden binnen NOSTR:

- **Microbetalingen**: Stuur kleine hoeveelheden Bitcoin met berichten
- **Content Ondersteuning**: Tip vrienden voor waardevolle bijdragen
- **Geïntegreerde Ervaring**: Betaling en messaging in één flow
- **Cross-platform**: Werkt tussen verschillende NOSTR clients

### Zaps Verzenden in Flash

1. Open een chatgesprek
2. Tik op het bliksemschicht icoon
3. Voer het te verzenden bedrag in
4. Voeg een optionele notitie toe
5. Bevestig de betaling

### Zaps Ontvangen

Wanneer iemand u een Zap stuurt in Flash:

1. U ziet de Zap in uw chatgesprek
2. De Bitcoin wordt direct toegevoegd aan uw Flash wallet
3. Een melding verschijnt als uw app op de achtergrond draait
4. De transactie verschijnt in uw betalingsgeschiedenis

## NOSTR Voorbij Chat

Hoewel Flash momenteel NOSTR voornamelijk voor chat gebruikt, maakt het protocol veel meer mogelijk:

### Huidige NOSTR Mogelijkheden

- **Short-form Content**: Twitter-achtige posts en reacties
- **Long-form Content**: Blog-stijl artikelen en nieuwsbrieven
- **Media Sharing**: Afbeeldingen, video's en andere bijlagen
- **Marketplace Functionaliteit**: Kopen en verkopen met Bitcoin

### Toekomstig Potentieel in Flash

Flash is van plan de NOSTR integratie uit te breiden:

- **Verbeterde Zakelijke Communicatie**: Geavanceerde tools voor handelaren
- **Content Discovery**: Vind Bitcoin-gefocuste content en creators
- **Community Building**: Creëer en doe mee aan interesse-gebaseerde groepen
- **Identiteitsverificatie**: Optioneel identiteitsbewijs voor bedrijven

## Het NOSTR Ecosysteem

Flash's Chat is onderdeel van een groeiend ecosysteem van NOSTR applicaties:

### Populaire NOSTR Clients

- **Damus**: iOS-gefocuste NOSTR client
- **Amethyst**: Android NOSTR ervaring
- **Snort**: Web-gebaseerd NOSTR platform
- **Primal**: Feature-rijke web en mobiele client

### Belangrijke NOSTR Projecten

- **NIP Ontwikkeling**: NOSTR Improvement Proposals die standaarden definiëren
- **Relay Software**: Verschillende implementaties van relay servers
- **Developer Tools**: Bibliotheken en SDK's voor het bouwen op NOSTR
- **User Directories**: Manieren om mensen op het netwerk te ontdekken

## Technische Specificaties

Voor ontwikkelaars geïnteresseerd in NOSTR's technische details:

### Event Types

NOSTR gebruikt verschillende event types voor verschillende content:

- **Kind 1**: Korte tekstnotities (posts)
- **Kind 4**: Versleutelde directe berichten
- **Kind 3**: Contactlijsten
- **Kind 0**: Metadata (profielen)
- **Kind 9735**: Zap ontvangstbewijzen voor betalingen

### NIPs (NOSTR Improvement Proposals)

Het protocol evolueert via NIPs:

- **NIP-01**: Basis protocol specificatie
- **NIP-04**: Versleutelde directe berichten
- **NIP-05**: Identifiers naar sleutels mappen (gebruikersnamen)
- **NIP-57**: Zap functionaliteit voor Lightning betalingen

### NOSTR URIs

Flash ondersteunt standaard NOSTR adressering:

- **nostr:npub...**: Link naar een gebruikersprofiel
- **nostr:note...**: Link naar een specifiek bericht
- **nostr:nevent...**: Link naar elk event type

## Bronnen

- [NOSTR Protocol Specificatie](https://github.com/nostr-protocol/nostr)
- [NOSTR NIPs Repository](https://github.com/nostr-protocol/nips)
- [NOSTR FAQ](https://nostr.com/faq)
- [Aan de Slag met NOSTR](https://nostr.how)

Door NOSTR te integreren, biedt Flash gebruikers communicatiemogelijkheden die net zo censuurbestendig en gedecentraliseerd zijn als Bitcoin zelf. Deze afstemming van technologieën creëert een platform waar zowel geld als berichten vrij stromen, buiten de controle van enige centrale autoriteit.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="lightning-network" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Lightning Network
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Flash Chat Gebruiken
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>