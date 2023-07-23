---
title: Etre vérifié avec le NIP-05
description: Comment vérifier votre identité sur Flash pour obtenir une coche de vérification et un moyen plus facile de partager votre compte.
---

## [§](#what-youll-learn) Ce que vous apprendrez dans ce guide

Vous avez peut-être remarqué sur différents clients que certains utilisateurs ont des contrôles, comme sur Twitter.

Le NIP-05 spécifie comment les utilisateurs de Flash peuvent vérifier leur identité. Les différents clients présentent la vérification de manière légèrement différente, mais il s'agit d'un moyen important de montrer à la communauté Flash que vous êtes un utilisateur réel.
![Snort Verified](/images/snort-verified.webp)

Le processus de vérification sur Flash est documenté dans un Flash Implementation Possibilities (NIP) appelé [NIP-05](https://github.com/flash-protocol/nips/blob/master/05.md).

Le NIP-05 permet à un utilisateur de Flash de faire correspondre sa clé publique à un identifiant internet basé sur le DNS. Le mécanisme de vérification est similaire à celui utilisé par Google pour vérifier la propriété d'un domaine à l'aide d'un enregistrement DNS.

Le principal avantage de la vérification est qu'elle permet à un utilisateur Flash d'être identifié par un nom lisible par l'homme, au lieu d'une longue clé publique difficile à mémoriser. Cela permet aux utilisateurs vérifiés de Flash de partager facilement leur identité avec d'autres personnes.

Pour utiliser le NIP-05, les utilisateurs de Flash ajoutent une url nip05 à leur profil (la plupart des clients ont un support pour cela). Les urls NIP-05 ressemblent à des emails - bob@example.com. Décomposons les différentes parties :

1. Tout ce qui précède le symbole `@` ("bob", dans notre exemple). Cela doit correspondre à la valeur du champ nom dans votre profil Flash.
1. Tout ce qui suit le symbole `@` ("exemple.com", dans notre exemple). C'est le domaine dans lequel le client peut chercher un fichier `/.well-known/flash.json` qui contient le nom et la clé publique de l'utilisateur.
2. 
Lorsque les clients voient une url nip05, ils vont chercher un fichier `/.well-known/flash.json` dans le domaine spécifié. Ce fichier doit contenir la clé publique de flash pour l'utilisateur spécifié. Pour plus de détails, voir la spécification NIP-05.

Bien que cela semble technique, il est étonnamment facile de se faire vérifier. Voyons comment procéder.

## [§](#free-verification) Obtenir une vérification grâce à un service gratuit

Actuellement, plusieurs fournisseurs aident les gens à se faire vérifier gratuitement. C'est une excellente option si vous n'avez pas encore de sats dans votre portefeuille lightning. Si possible, soutenez ces projets par des dons. ⚡🤙

-   [Bitcoin Flash](https://bitcoinflash.com/)
-   [Flashcheck.me](https://flashcheck.me)
-   [Flash.industries](https://flash.industries/)
-   [NIP05.social](https://nip05.social)
-   [Flash-Check.com](https://flash-check.com/)

## [§](#paid-verification) Payer un fournisseur pour la vérification

Si vous n'avez pas votre propre domaine ou si vous ne voulez pas le configurer vous-même, vous pouvez profiter d'un service NIP-05 gratuit ou payant (généralement quelques [sats](https://coinmarketcap.com/alexandria/glossary/satoshi-sats)). En voici quelques-uns :

-   [Flashplebs](https://flashplebs.com)
-   [Flash Verified](https://flashverified.com)
-   [Alby](https://getalby.com)
-   [Flash Directory](https://flash.directory)
-   [Flash.band](https://nip05.flash.band)
-   [Flash.com.au](https://flash.com.au)
-   [Vida](https://Vida.page)
-   [Stacker News](https://stacker.news)

## [§](#self-hosted) Vérification auto-hébergée

Si vous possédez déjà un domaine, c'est une option gratuite. Il vous suffit d'ajouter un fichier `.well-known/flash.json` à votre domaine. Le contenu de ce fichier doit être le suivant :

```json
{
    "names": {
        "YOUR_FLASH_NAME": "YOUR_FLASH_PUBLIC_KEY"
    }
}
```

En option, vous pouvez également ajouter une section permettant aux clients de savoir sur quels relais ils sont susceptibles de vous trouver :

```json
{
  "names": {
    "YOUR_FLASH_NAME": "YOUR_FLASH_PUBLIC_KEY_IN_HEX_FORMAT"
  },
  "relays": {
    "YOUR_FLASH_PUBLIC_KEY_IN_HEX_FORMAT": [
      "wss://relay.one",
      "wss://relay.two",
      ...
    ]
  }
}
```

Assurez-vous d'utiliser la version hexagonale de votre clé publique dans votre fichier `flash.json`. C'est la version de la clé qui **ne** commence pas par `npub`.

Vous pouvez convertir votre clé sur [Flash.band](https://flash.band)

![Get your hex key](/images/get-hex-key.webp)

Enfin, assurez-vous que ce fichier est servi avec l'en-tête `Access-Control-Allow-Origin` fixé à `*` car il doit être accessible par les clients.
