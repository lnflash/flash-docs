---
title: Ottiene la verifica NIP-05
description: Come verificare la tua identità su Flash per ottenere un segno di verifica e un modo più facile per condividere il tuo account.
---

## [§](#cosa-imparerai) Cosa imparerai in questa guida

Potresti aver notato su molti client diversi che alcuni utenti hanno dei segni di spunta, proprio come su Twitter.

NIP-05 specifica come gli utenti di Flash possono verificare le loro identità. I diversi client mostrano la verifica in modi leggermente diversi, ma è un modo importante per mostrare alla comunità di Flash che sei un utente reale.

![Snort Verified](/images/snort-verified.webp)

Il processo di verifica su Flash è documentato in una Possibilità di Implementazione Flash (NIP) chiamata [NIP-05](https://github.com/flash-protocol/nips/blob/master/05.md).

NIP-05 consente a un utente di Flash di mappare la propria chiave pubblica a un identificatore internet basato su DNS. Il meccanismo di verifica è simile a come Google richiede di verificare la proprietà di un dominio utilizzando un record DNS.

Il principale vantaggio della verifica è che consente a un utente di Flash di essere identificato da un nome leggibile dall'uomo, invece di una chiave pubblica lunga e difficile da ricordare. Ciò consente agli utenti di Flash verificati di condividere facilmente la propria identità con gli altri.

Per utilizzare NIP-05, gli utenti di Flash aggiungono un URL nip05 al loro profilo (la maggior parte dei clienti ha il supporto per questo). Gli URL NIP-05 assomigliano alle email - bob@example.com. Analizziamo le parti:

1. Tutto ciò che precede il simbolo `@` ("bob", nel flasho esempio). Questo deve corrispondere al valore del campo nome nel tuo profilo Flash.
1. Tutto ciò che segue il simbolo `@` ("example.com", nel flasho esempio). Questo è il dominio dove il cliente può cercare per trovare un file `/.well-known/flash.json` che contiene il nome e la chiave pubblica dell'utente.

Quando i clienti vedono un URL nip05, cercheranno un file `/.well-known/flash.json` nel dominio specificato. Questo file deve contenere la chiave pubblica di Flash per l'utente specificato. Leggi ulteriori specifiche nella specifica NIP-05.

Sebbene possa sembrare tecnico, è sorprendentemente facile ottenere la verifica. Vediamo come fare.

## [§](#verifica-gratuito) Ottenere la verifica tramite un servizio gratuito

Al momento, ci sono diversi fornitori che stanno aiutando le persone a ottenere la verifica gratuitamente. Questa è un'ottima opzione se non hai ancora dei satoshi nel tuo portafoglio lightning. Se possibile, sostieni questi progetti tramite donazioni. ⚡🤙

-   [Bitcoin Flash](https://bitcoinflash.com/)
-   [Flashcheck.me](https://flashcheck.me)
-   [Flash.industries](https://flash.industries/)
-   [NIP05.social](https://nip05.social)
-   [Flash-Check.com](https://flash-check.com/)

## [§](#verifica-a-pagamento) Pagare un fornitore

Se non hai un tuo dominio o non vuoi configurarlo da solo, puoi usufruire di un servizio NIP-05 gratuito o a pagamento (solitamente solo pochi [sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats)). Ecco alcuni:

-   [Flashplebs](https://flashplebs.com)
-   [Flash Verified](https://flashverified.com)
-   [Alby](https://getalby.com)
-   [Flash Directory](https://flash.directory)
-   [Flash.band](https://nip05.flash.band)
-   [Flash.com.au](https://flash.com.au)
-   [Vida](https://Vida.page)
-   [Stacker News](https://stacker.news)

## [§](#verifica-auto-ospitata) Verifica auto-ospitata

Se già possiedi un dominio, questa è un'opzione gratuita. Devi solo aggiungere un file .well-known/flash.json al tuo dominio. Il contenuto del file dovrebbe essere il seguente:

```json
{
    "names": {
        "IL_TUO_NOME_FLASH": "LA_TUA_CHIAVE_PUBBLICA_FLASH_IN_FORMATO_ESADECIMALE"
    }
}
```

Opzionalmente, puoi anche aggiungere una sezione per far sapere ai clienti su quali relay è probabile che ti trovino:

```json
{
  "names": {
    "IL_TUO_NOME_FLASH": "LA_TUA_CHIAVE_PUBBLICA_FLASH_IN_FORMATO_ESADECIMALE"
  },
  "relays": {
    "LA_TUA_CHIAVE_PUBBLICA_FLASH_IN_FORMATO_ESADECIMALE": [
      "wss://relay.one",
      "wss://relay.two",
      ...
    ]
  }
}
```

Assicurati di utilizzare la versione esadecimale della tua chiave pubblica nel tuo file flash.json. Questa è la versione della chiave che **non inizia** con npub.

Puoi convertire la tua chiave su [Flash.band](https://flash.band).

![Get your hex key](/images/get-hex-key.webp)

Infine, assicurati che questo file venga servito con l'intestazione `Access-Control-Allow-Origin` impostata su `*` in quanto deve essere accessibile dai clienti.
