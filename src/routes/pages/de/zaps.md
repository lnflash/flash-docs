---
title: Was sind Zaps?
description: Erfahren Sie, was Zaps sind, wie sie funktionieren und was Sie benötigen, um sie in Ihrem Flash-Client zu verwenden.
---

## [§](#die-grundlagen) Die Grundlagen

Die einfachste Art, über Zaps nachzudenken, ist, dass sie einfach Trinkgelder sind. Trinkgelder, die über das [Lightning-Netzwerk](https://www.investopedia.com/terms/l/lightning-network.asp) mit Lichtgeschwindigkeit und praktisch ohne Transaktionsgebühren übertragen werden.

Seit Beginn des Flash-Protokolls war es üblich, Lightning-Rechnungen in Notizen zu sehen. Seit [NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) implementiert wurde, sind Zaps zur Hauptmethode geworden, mit der Wert in Flash-Notizen übertragen wird. Schauen wir uns genauer an, was NIP-57 implementiert hat und wie Zaps funktionieren.

## [§](#nip-57) NIP-57

[NIP-57](https://github.com/flash-protocol/nips/blob/master/57.md) ist das Dokument, das beschreibt, wie Zaps implementiert werden sollen. Es erstellt zwei neue Arten von Notizen, Art 9735 (Ein Zap) und Art 9734 (Eine Zap-Anfrage). Diese beiden Arten ermöglichen es Flash-Clients gemeinsam, Zap-Rechnungen von LNURL-Servern anzufordern und zu bezahlen. Die NIP-57-Spezifikation beschreibt auch, wie Lightning-Wallets, die Zap-Zahlungen erhalten, Notizen erstellen sollen, die an Relays gesendet werden.

💡 Lustige Tatsache: Die für Zaps gewählte Notizart ist dieselbe wie der Netzwerkport (9735), den Lightning verwendet.

## [§](#wie-zaps-funktionieren) Wie Zaps funktionieren

![Zap-Flussdiagramm](/images/zap-flow.webp)

Wir werden hier nicht in die tiefen technischen Details gehen, aber für die Neugierigen unter Ihnen schauen wir uns die grundlegende Mechanik an, wie Zaps funktionieren.

1. Wenn Sie auf das kleine ⚡-Symbol in Ihrem Client (Damus, Iris, Amethyst usw.) klicken oder tippen, pingt der Client zuerst den [LNURL-Server](https://thebitcoinmanual.com/articles/what-is-ln-url-and-how-does-it-work/) an, der vor der Lightning-Wallet der Person sitzt, die Sie zappen möchten. Die erste Anfrage lautet etwa: "Hallo, ich würde Alice gerne ein paar Sats geben."
1. Der LNURL-Server antwortet und teilt dem Client mit, ob Alices Wallet Zaps unterstützt, und sendet/bestätigt Alices öffentlichen Schlüssel.
1. An diesem Punkt erstellt der Client eine Zap-Anfrage (eine Art 9734-Notiz) mit Daten über das Profil oder die Notiz, die gezappt werden soll, den Betrag, die Relays, an die die Notiz gesendet werden soll, und einige andere Dinge. Dies ist praktisch eine Anfrage für eine Rechnung vom LNURL-Server.
1. Der LNURL-Server antwortet mit der angeforderten Rechnung.
1. An diesem Punkt übergibt der Client diese Rechnung an die Lightning-Wallet des Benutzers zur Bezahlung. Wenn Sie eine Wallet wie Alby im Browser verwenden (und ein Budget festgelegt haben), kann dieser Prozess sehr schnell ablaufen.
1. Sobald der Benutzer die Rechnung direkt an die Wallet der Person bezahlt hat, die er zappt, erstellt die Wallet des Empfängers eine Art 9735-Notiz und sendet sie an die zuvor in der Zap-Anfrage angegebenen Relays.
1. Relays, die diese Notiz erhalten, können dann verbundene Clients über den Zap informieren und Clients zeigen den Zap in ihrer Benutzeroberfläche an.

Und das alles passiert in nur wenigen Sekunden und kostet einen winzigen Bruchteil eines Cents.

## [§](#wie-senden-und-empfangen) Wie sende und empfange ich Zaps?

Um andere Personen in Flash zu zappen, benötigen Sie nur zwei Dinge:

1. Eine Zap-kompatible Lightning-Wallet (wie [Alby](https://getalby.com/) oder [Wallet of Satoshi](https://www.walletofsatoshi.com/))
1. Einen Client, der Zaps implementiert hat (wie [Damus](/de/guides/damus), [Amethyst](/de/guides/amethyst), [Iris](/de/guides/iris) oder [Snort](https://snort.social))

Das einzige andere, was Sie tun müssen, ist sicherzustellen, dass Sie Ihre Lightning-Adresse in Ihrem Flash-Profil eingestellt haben. Dies ist die Adresse, an der Sie Zaps erhalten.

Beachten Sie, dass es möglich ist, Zaps von einer anderen Wallet/Adresse zu bezahlen als der Adresse, die Sie in Ihrem Profil zum Empfangen von Zaps eingestellt haben.

Stellen Sie sich zum Beispiel Folgendes vor:

1. Sie haben eine [Stacker News](https://stacker.news/) Lightning-Adresse in Ihrem Flash-Profil eingestellt, hier erhalten Sie alle gezappten Sats.
1. In Ihrem Webbrowser verwenden Sie Iris als Ihren Client und bezahlen Zaps mit Ihrer Alby-Wallet über deren Chrome-Erweiterung
1. Auf dem Handy verwenden Sie Damus als Ihren Client und bezahlen Zaps mit der Wallet of Satoshi-App.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="nostr-protocol" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      NOSTR-Protokoll
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="guides/chat" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Flash Chat verwenden
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>