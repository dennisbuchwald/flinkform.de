import type { Widen } from "@/lib/i18n/widen";

export const roadmap = {
  meta: {
    title: "Roadmap & Changelog: Woran Flinkform gerade arbeitet",
    description:
      "Die öffentliche Flinkform-Roadmap: was zuletzt erschienen ist, woran gerade gearbeitet wird und was als Nächstes kommt. Build in public, ohne Termin-Versprechen.",
  },
  hero: {
    eyebrow: "Roadmap & Changelog",
    title: "Woran wir gerade bauen",
    introPre:
      "Flinkform wird öffentlich weiterentwickelt. Hier siehst du, was zuletzt erschienen ist und was als Nächstes kommt. Ehrlicherweise: ohne Datums-Versprechen, dafür mit echtem Fortschritt. Wünsche und Bug-Reports gehören auf ",
    introLinkText: "GitHub",
    introPost: ".",
  },
  breadcrumb: { home: "Flinkform", roadmap: "Roadmap" },
  inProgress: {
    heading: "In Arbeit",
    items: [
      {
        title: "Zahlbetrag aus Berechnungsfeldern",
        desc: "Die berechnete Summe eines Angebotsrechners direkt als Stripe-Zahlbetrag verwenden, serverseitig aus der Formel abgeleitet und manipulationssicher.",
        area: "Pro",
      },
      {
        title: "Weitere Zahlungsarten",
        desc: "Redirect-Zahlarten über das Stripe Payment Element, damit auch Methoden mit Seitenwechsel sauber durchlaufen.",
        area: "Pro",
      },
      {
        title: "PDF-Eingangsbestätigung",
        desc: "Automatische PDF-Quittung an der Bestätigungsmail, für Buchungen und Zahlungen mit Beleg-Pflicht.",
        area: "Pro",
      },
    ],
  },
  planned: {
    heading: "Geplant",
    items: [
      {
        title: "Entry-Management-Tiefe",
        desc: "Status pro Einsendung (neu, in Bearbeitung, erledigt), interne Notizen und Ungelesen-Badge im Admin-Menü.",
        area: "Pro",
      },
      {
        title: "Optionale CAPTCHA-Anbindung",
        desc: "Für Betreiber, die zusätzlich einen externen Dienst einsetzen wollen. Der serverseitige Spam-Schutz bleibt der Standard und braucht weiterhin keinen.",
        area: "Pro",
      },
      {
        title: "SMTP OAuth2",
        desc: "Google Workspace und Microsoft 365 mit moderner Authentifizierung statt App-Passwörtern.",
        area: "Pro",
      },
      {
        title: "Weitere Newsletter-Anbieter",
        desc: "MailerLite und tiefere Feld-Zuordnung (Custom Fields, Tags, Gruppen) für die bestehenden Integrationen.",
        area: "Pro",
      },
    ],
  },
  radar: {
    heading: "Auf dem Radar",
    sub: "Größere Ideen, an denen wir noch nicht aktiv bauen, aber die auf unserer Liste stehen. Kein Versprechen, keine Termine - nur Transparenz, wohin die Reise gehen könnte.",
    items: [
      {
        title: "Hilfetext zwischen Label und Feld",
        desc: "Eine zusätzliche Position für Hilfetexte, direkt zwischen Beschriftung und Eingabefeld statt nur darunter. Ein klarer Barrierefreiheits-Gewinn.",
        area: "Free",
      },
      {
        title: "Begrenztes HTML im Hilfetext",
        desc: "Links, Hervorhebungen und kurze Inline-Formatierung im Hilfetext, sauber abgesichert und auf Kürze getrimmt.",
        area: "Free",
      },
      {
        title: "Zeit- und Datum-Zeit-Feld",
        desc: "Zwei neue Feldtypen für Uhrzeiten und kombinierte Datum-Zeit-Angaben, für Termin- und Buchungsformulare.",
        area: "Pro",
      },
      {
        title: "Wiederholbare Feldgruppen",
        desc: "Eine Gruppe von Feldern mehrfach hinzufügen können, etwa für mehrere Teilnehmer oder Positionen in einem Formular, inklusive Ansage für Screenreader beim Hinzufügen und Entfernen.",
        area: "Pro",
      },
      {
        title: "Barrierefreies Input-Masking",
        desc: "Eingabemasken für Telefonnummern und Postleitzahlen, die Screenreader nicht mit Platzhalter-Zeichen verwirren.",
        area: "Pro",
      },
      {
        title: "Vorbefüllte Bundesland- und Länder-Auswahl",
        desc: "Fertige, länderspezifische Auswahlfelder für Bundesland/Provinz und Land, direkt im Adressfeld nutzbar.",
        area: "Pro",
      },
      {
        title: "Anbindung an externe Apps",
        desc: "Einsendungen direkt in externe Tools wie Google Sheets übertragen, ganz ohne Zwischenschritt.",
        area: "Pro",
      },
      {
        title: "Formular-Zugriff nach Benutzerrolle",
        desc: "Absenden oder Ansehen eines Formulars auf bestimmte WordPress-Benutzerrollen oder -Rechte beschränken.",
        area: "Pro",
      },
    ],
  },
  changelogHeading: "Zuletzt erschienen",
  changelog: [
    {
      area: "Free",
      version: "1.13.2",
      date: "19.08.2026",
      items: [
        "Editor-Fix: Im Stil-Panel wurden die Beschriftungen der Auswahlknöpfe abgeschnitten - aus \"Umrandet / Weich / Unterstrichen / Minimal\" wurde \"Umran… / Unter… / Minim…\", man konnte die Einstellung nur noch raten. Einstellungen mit mehr als zwei, drei kurzen Optionen sind jetzt Auswahlfelder und in jeder Sprache vollständig lesbar",
        "Am Formular selbst ändert sich nichts: gleiche Werte, gleiche Voreinstellungen, bestehende Formulare sehen aus wie vorher. Gemeldet von Eric Saner - danke dafür!",
      ],
    },
    {
      area: "Free",
      version: "1.13.1",
      date: "18.08.2026",
      items: [
        "Kleiner Nachschliff zu 1.13.0: In einem Sekundenbruchteil direkt nach der automatischen Token-Erneuerung hatte das Formular kurz einen frischen Token, aber noch keine passende Lösung - ein Absenden genau in diesem winzigen Fenster hätte noch verloren gehen können",
        "Der neue Token wird jetzt erst gelöst und dann zusammen mit seiner Lösung in einem Zug gesetzt. Der alte, noch gültige Token bleibt währenddessen absendbar. Das Fenster gibt es damit nicht mehr - das Versprechen \"keine Anfrage geht verloren\" ist jetzt lückenlos",
      ],
    },
    {
      area: "Free",
      version: "1.13.0",
      date: "18.08.2026",
      items: [
        "Wichtiger Fix: Eine Anfrage konnte spurlos verloren gehen. Der Anti-Spam-Token gilt 30 Minuten. Lag ein Formular länger offen (langes mehrstufiges Formular, offener Tab, ein Cache, der eine ältere Seite ausliefert), führte das Absenden lautlos zur Startseite - ohne Meldung, ohne Mail, die Eingaben weg",
        "Eine Anfrage vom eigenen Server ist nie ein Bot: Ein abgelaufener oder bereits benutzter Token verwirft die Anfrage nicht mehr. Das Formular erscheint erneut mit allen Eingaben und dem Hinweis, dass die Sitzung abgelaufen ist und man erneut senden soll - der zweite Versuch geht durch. Auch der Weg ohne JavaScript ist abgedeckt",
        "Neu: Der Token erneuert sich jetzt im Browser, bevor er ablaufen kann - so entsteht die Situation oben meist gar nicht erst. Formulare in einem Popup reparieren einen abgelaufenen Token automatisch und senden einmal neu, ohne dass man etwas neu tippt. Die Seite darf jetzt auch gecacht werden, ohne dass das Absenden bricht",
        "Fix: Doppelklick oder erneutes Senden per Zurück-Button landet nicht mehr auf der Startseite - die erste Anfrage wird einmal gespeichert, ein zweiter Versuch zeigt die Erfolgsmeldung",
      ],
    },
    {
      area: "Free",
      version: "1.12.2",
      date: "17.08.2026",
      items: [
        "Wichtiger Fix: Ein Formular konnte sich wegen einer Pflicht-Checkbox-Gruppe weigern abzusenden, die gar nicht sichtbar war. Typischer Fall: ein Entweder/Oder-Formular, bei dem je nach Auswahl unterschiedliche Felder erscheinen - die Gruppe des nicht gewählten Zweigs blieb versteckt, zählte aber weiter als unbeantwortet",
        "Weil die Fehlermeldung im ausgeblendeten Bereich gerendert wurde, sah es aus, als würde der Absenden-Button einfach nichts tun",
        "Alle anderen Feldtypen waren nie betroffen: Ausgeblendete Felder werden deaktiviert, und ein deaktiviertes Feld nimmt der Browser automatisch von der Prüfung aus. Die Gruppen-Prüfung ist selbst gebaut und hat diese Regel bisher nicht angewendet - jetzt schon",
        "Der Server hat solche Einsendungen immer akzeptiert, beide Seiten sind also wieder einig. Getestet mit WordPress 7.0.3",
      ],
    },
    {
      area: "Free",
      version: "1.12.1",
      date: "12.08.2026",
      items: [
        "Über dem Absenden-Button konnte eine unerklärliche Lücke stehen: Sobald der Browser die Aufgabe des eingebauten Spam-Schutzes gelöst hat, stecken in dessen Container nur noch unsichtbare Felder - der leere Container belegte aber weiterhin eine Zeile im Formular-Layout, samt der Abstände darüber und darunter",
        "Am deutlichsten sichtbar war das bei zweispaltigen Formularen mit schwebenden Beschriftungen, weil dort der Zeilenabstand am größten ist",
        "Der Container verschwindet jetzt vollständig aus dem Layout, solange die Aufgabe gelöst wird, und kommt zusammen mit der sichtbaren Ersatzfrage zurück, falls der Browser sie nicht lösen kann. Am Spam-Schutz selbst ändert sich nichts",
      ],
    },
    {
      area: "Free",
      version: "1.12.0",
      date: "07.08.2026",
      items: [
        "Farben ohne CSS: Die Abschnittsüberschrift bekommt die native WordPress-Farboption (Block-Seitenleiste, inklusive Theme-Palette) - Überschriften in deiner Highlight-Farbe sind zwei Klicks",
        "Im Style-Panel des Formulars gibt es zwei neue Farbfelder: eines für Feld-Beschriftungen und Gruppen-Überschriften, eines für Hilfetexte und den Einwilligungssatz - gerade auf dunklen Hintergründen Gold wert",
        "Dabei gleich mitgefixt: Themes setzen Überschrift-Farben oft als direkte Regel, wodurch die gewählte Blockfarbe nie am Titel ankam - jetzt übernehmen Titel und Beschreibung die Farbe zuverlässig",
        "Nichts eingestellt heißt wie bisher: alles erbt vom Theme, bestehende Formulare ändern sich nicht. Getestet mit WordPress 7.0.2",
      ],
    },
    {
      area: "Free",
      version: "1.11.1",
      date: "06.08.2026",
      items: [
        "Die Consent-Checkbox (und jede Checkbox/Radio-Box) konnte auf dem Handy zu einem winzigen Punkt schrumpfen: Ein langer Text in derselben Zeile drückte die Box zusammen. Jetzt hält sie feste 20 Pixel, schrumpft nie, richtet sich an der ersten Textzeile aus und übernimmt beim Anhaken die Primärfarbe des Formulars",
        "Die aufgeklappte Liste eines Auswahlfelds konnte in Edge unter Windows unlesbar sein: Die Liste wird hell gezeichnet, die Schrift erbte aber die helle Farbe dunkler Websites - weiß auf weiß. Die Einträge haben jetzt feste, lesbare Farben; Browser mit eigener Listen-Darstellung ignorieren das einfach",
      ],
    },
    {
      area: "Free",
      version: "1.11.0",
      date: "04.08.2026",
      items: [
        "Dieses Release verdanken wir einem wunderbar detaillierten Nutzerbericht - danke, Daniel!",
        "Enter mitten im Formular konnte alle Buttons dauerhaft ausgrauen: Der Lade-Zustand wurde scharf geschaltet, bevor die Schritt-Sperre das Absenden abbrach - die Seite blieb stehen, die Buttons blieben tot. Jetzt prüft der Lade-Zustand nach, und Enter wirkt auf einem Zwischenschritt wie ein Klick auf Weiter, Prüfung inklusive",
        "Der letzte Schritt wurde im Browser nie geprüft: Jeder Weiter-Klick prüfte seinen Schritt, aber Absenden ging ungeprüft zum Server - eine Pflicht-Einwilligung auf dem letzten Schritt sah aus, als würde sie ignoriert. Jetzt bekommt der letzte Schritt (und jedes einseitige Formular) dieselbe Prüfung mit denselben Meldungen am Feld",
        "Ein Auswahlfeld ohne Platzhalter hatte still die erste Option vorausgewählt - ein Pflicht-Auswahlfeld konnte so nie leer sein und Bedingungen feuerten ohne Zutun. Jetzt führt jedes einfache Auswahlfeld mit einer leeren Bitte-wählen-Option",
        "Telefonfelder weisen Buchstaben jetzt schon im Browser ab, Adress-Teilfelder tragen echte Autocomplete-Angaben (Straße, PLZ, Ort, Land)",
        "Auswahl, Radio und Checkbox-Gruppe lassen sich per Block-Umschalter ineinander umwandeln - Optionen, Feldname und alle Bedingungen bleiben erhalten",
        "Die Einwilligung heißt im Eingang und in der Benachrichtigung jetzt Einwilligung: Ja statt internem Namen und einer nackten 1; Zeitstempel folgen dem Datumsformat und der Zeitzone der Website",
      ],
    },
    {
      area: "Free",
      version: "1.10.0",
      date: "31.07.2026",
      items: [
        "Ein ausgeblendetes Feld zählt nicht mehr mit: Sein Wert wurde weiter gelesen, wenn andere Bedingungen geprüft wurden. Ein Wechsel der Auswahl konnte deshalb einen Hinweis stehen lassen oder den Absenden-Button über einer Antwort sperren, die niemand mehr sehen oder ändern konnte - während der Server das Feld längst verworfen hatte. Browser und Server bewerteten dasselbe Formular unterschiedlich",
        "Ausgeblendet heißt jetzt auf beiden Seiten leer. Die Sichtbarkeit wird zuerst zu Ende gerechnet, damit auch eine Kette greift (ein Feld ausblenden macht die Regel des nächsten wahr) und ein widersprüchlicher Aufbau sauber stehen bleibt statt zu kreisen",
        "Die Benachrichtigung an dich ist endlich lesbar: echtes HTML mit Klartext-Alternative, Feld-Beschriftungen statt interner Namen, Luft zwischen den Angaben, Datum als TT.MM.JJJJ, Zeilenumbrüche erhalten, E-Mail und Telefon als Link - und nur die Felder, die wirklich ausgefüllt wurden",
        "Ein eigener Text bleibt Wort für Wort erhalten und bekommt nur denselben Rahmen",
      ],
    },
    {
      area: "Free",
      version: "1.9.0",
      date: "27.07.2026",
      items: [
        "Bedingungs-Gruppen: Eine Bedingung war bisher eine flache Regelliste mit einer einzigen Verknüpfung, womit sich \"(A oder B oder C) und D\" nicht ausdrücken ließ. Jetzt lässt sich innerhalb einer Bedingung eine Gruppe anlegen, die ihre eigene ALLE/EINE-Verknüpfung hat und in der Ebene darüber wie eine einzelne Regel zählt",
        "Der Anlass: Absenden nur erlauben, wenn der errechnete Termin leer ist, vor dem Urlaub liegt oder danach - und gleichzeitig die Postleitzahl nicht ausgeschlossen ist",
        "Bestehende Bedingungen bleiben unangetastet und müssen nicht angepasst werden",
      ],
    },
    {
      area: "Free",
      version: "1.8.4",
      date: "27.07.2026",
      items: [
        "Style- und Skript-Updates kommen jetzt tatsächlich im Browser an. Jede Datei wurde unter der Adresse \"?ver=0.1.0\" ausgeliefert, einem Wert, der sich seit dem allerersten Commit nie geändert hat. Über gut dreißig Releases hinweg war die URL damit identisch, und Browser, CDNs und Seiten-Caches behielten die zuerst geladene Fassung. Eine Korrektur konnte auf dem Server richtig sein und im Browser trotzdem fehlen",
        "Die Adressen tragen jetzt die Plugin-Version, jedes künftige Update erneuert den Cache also von selbst. Für dieses eine Update ist noch ein hartes Neuladen nötig, weil die alte Adresse im Cache liegt",
      ],
    },
    {
      area: "Free",
      version: "1.8.3",
      date: "27.07.2026",
      items: [
        "Auswahlfelder wurden in Safari falsch dargestellt. WebKit ignoriert bei einem Dropdown die vertikalen Innenabstände und bemisst die Höhe allein aus der Schrift, wodurch die Box kleiner war als ihr eigener Text: Safari schnitt die gewählte Option oben ab und das Floating-Label lag darauf. Flinkform zeichnet das Feld jetzt selbst, damit es in jedem Browser genauso hoch ist wie alle anderen",
        "Ein frisch eingefügtes Feld trägt jetzt eine Beschriftung in der Sprache der Website. Die Standardwerte stehen in einer JSON-Datei und liefen nie durch die Übersetzung, weshalb ein neues Datumsfeld auch auf einer deutschen Seite \"Date\" hieß. Selbst gesetzte Beschriftungen bleiben unangetastet",
      ],
    },
    {
      area: "Free",
      version: "1.8.2",
      date: "27.07.2026",
      items: [
        "Ein Absenden-Button, den eine Absende-Bedingung sperrt, sieht jetzt auch gesperrt aus. Er war zwar schon deaktiviert, behielt aber Farbe, Hover und normalen Mauszeiger, sodass nur ein grauer Hinweistext darunter davon zeugte. Jetzt ausgegraut, entsättigt und mit Sperr-Mauszeiger, in allen drei Button-Stilen",
        "Der Hinweis darunter richtet sich am Button aus, statt über die volle Formularbreite zentriert zu stehen",
      ],
    },
    {
      area: "Free",
      version: "1.8.1",
      date: "27.07.2026",
      items: [
        "Der Block-Editor ist endlich übersetzt. Die deutschen Sprachdateien für den Editor lagen dem Plugin immer bei, WordPress hat sie aber nie gelesen: Es sucht sie standardmäßig nur in einem Ordner, den translate.wordpress.org befüllt. Dadurch blieb der komplette Formular-Inspector englisch, selbst auf Seiten, deren Frontend und Adminbereich korrekt deutsch waren",
      ],
    },
    {
      area: "Free",
      version: "1.8.0",
      date: "27.07.2026",
      items: [
        "Absender pro Formular: Name und E-Mail-Adresse lassen sich jetzt direkt einstellen. Beide Mails kommen dann von deiner eigenen Adresse statt von \"wordpress@deine-domain\". Ganz ohne SMTP-Plugin, weil der Absender eine wp_mail-Einstellung ist und unabhängig davon greift, wie deine Seite Mails verschickt",
        "Antwort-an für die Bestätigungsmail an den Absender. Bisher hatte nur die Admin-Benachrichtigung eins. Damit kann das Formular von der Website-Adresse senden, während Antworten dort landen, wo du sie tatsächlich liest",
        "Der Editor warnt, wenn die Absenderadresse auf einer anderen Domain liegt als die Website. Der eigene Server darf nicht für fremde Domains senden, solche Mails scheitern an SPF und landen im Spam",
      ],
    },
    {
      area: "Free",
      version: "1.7.2",
      date: "27.07.2026",
      items: [
        "Die Spam-Frage (\"Was ergibt 2 + 2?\") blitzt beim harten Neuladen nicht mehr auf. Sie ist der Fallback für Besucher ohne JavaScript und stand bisher so lange auf dem Schirm, bis die Rechenaufgabe im Hintergrund gelöst war. Jetzt ist sie von Anfang an ausgeblendet, wo JavaScript läuft, und kommt zurück, sobald der Löser nicht durchkommt oder ein langsames Gerät zu lange braucht",
        "Gleichmäßige Abstände bei Floating Labels. Der Platz für die angehobene Beschriftung hing bisher am einzelnen Textfeld, weshalb Zeilen je nach Nachbarblock unterschiedlich weit auseinanderlagen. Er sitzt jetzt am Zeilenabstand des Formulars und gilt für jede Zeile gleich",
        "Kein Springen mehr beim Laden: Dieser Platz ändert seine Größe nicht mehr, wenn die Farberkennung der Label-Kerbe greift",
      ],
    },
    {
      area: "Free",
      version: "1.7.1",
      date: "27.07.2026",
      items: [
        "Bedingte Felder und Hinweise blitzen beim Laden nicht mehr kurz auf. Bisher wurde alles zunächst sichtbar ausgeliefert und erst ausgeblendet, sobald das JavaScript lief. Der Server ermittelt den Anfangszustand jetzt selbst und liefert ausgeblendete Blöcke von vornherein ausgeblendet aus",
      ],
    },
    {
      area: "Free",
      version: "1.7.0",
      date: "27.07.2026",
      items: [
        "Neuer Block: Hinweis. Eine hervorgehobene Box zwischen den Feldern, in vier Typen (Info, Erfolg, Warnung, Wichtig) mit passendem Icon. Sie übermittelt nichts und taucht deshalb weder in den Einsendungen noch im CSV-Export auf",
        "Die eigentliche Stärke ist die bedingte Logik: Der Hinweis erscheint nur, wenn er zutrifft. Etwa eine Anfahrtspauschale, die ab einer bestimmten Entfernung gilt, oder eine Erklärung, die an genau einer Antwort hängt",
        "Text mit fett, kursiv und Links. Die Farben folgen dem Theme, wo es welche vorgibt",
      ],
    },
    {
      area: "Free",
      version: "1.6.4",
      date: "27.07.2026",
      items: [
        "Floating Labels: hinter der angehobenen Beschriftung erschien auf jeder Seite, deren Hintergrund nicht rein weiß ist, ein weißer Kasten. Die Kerbe wird jetzt nur noch gezeichnet, wenn die Flächenfarbe sicher erkannt wurde, sonst sitzt die Beschriftung einfach oberhalb der Rahmenlinie",
        "Die Farberkennung beherrscht jetzt auch halbtransparente Flächen, verrechnet sie mit dem Untergrund und läuft bei Fenstergröße und Dark-Mode-Wechsel erneut. Bei Verläufen und Hintergrundbildern verzichtet sie bewusst auf die Kerbe, statt eine Farbe zu raten, die es dort gar nicht gibt",
        "Der Editor nutzt dieselbe Erkennung wie das Frontend, Vorschau und veröffentlichte Seite können damit nicht mehr auseinanderlaufen",
      ],
    },
    {
      area: "Free",
      version: "1.6.3",
      date: "27.07.2026",
      items: [
        "Deutsche Übersetzung wiederhergestellt: Version 1.6.1 hatte die Sprachdateien aus einer unvollständigen Vorlage neu erzeugt und dabei 243 bereits übersetzte Texte verloren. Deutsche Installationen sahen große Teile der Oberfläche wieder auf Englisch. Jetzt sind 387 von 392 Texten übersetzt (der Rest sind URLs)",
        "Adressfeld: bei der Label-Position \"Floating\" lagen Beschriftung und Platzhalter übereinander. Die Unterfelder folgen jetzt der Label-Einstellung des Formulars, genau wie jedes andere Textfeld",
        "Der rote Rahmen an fehlerhaften Feldern erscheint wieder. Ein CSS-Selektor traf ins Leere, dadurch war die Fehlermarkierung am Eingabefeld unsichtbar (die Fehlermeldung darunter war immer da)",
        "Bedingte Logik kann sich jetzt auf Adressfelder beziehen. Die Regel-Auswahl bietet die einzelnen Unterfelder an (Straße, PLZ, Ort) statt des Sammelfelds, gegen das eine Regel nie greifen konnte",
      ],
    },
    {
      area: "Free",
      version: "1.6.0 - 1.6.2",
      date: "24.07.2026",
      items: [
        "Neuer Feldtyp: Adressfeld mit Straße, PLZ und Ort in kompaktem Grid-Layout. Optional Adresszusatz und Land. Jedes Unterfeld wird separat gespeichert, das ergibt saubere CSV-Spalten",
        "Die Unterfelder des Adressfelds übernehmen alle Formular-Einstellungen: Feldstil, Label-Position, Abstände und Fehlerzustände",
      ],
    },
    {
      area: "Free",
      version: "1.5.2 - 1.5.3",
      date: "24.07.2026",
      items: [
        "Bedingte Logik: neue Datums-Operatoren \"ist vor (Datum)\" und \"ist am oder nach (Datum)\" für Vergleiche gegen einen festen Stichtag im Format JJJJ-MM-TT",
        "Floating Labels: die Hintergrundfarbe der Label-Kerbe wird automatisch vom umgebenden Container erkannt und passt damit auf jeder Fläche, ohne manuelle Einstellung",
        "Bugfix: bedingte Logik blendet Felder jetzt korrekt aus (CSS-Spezifitätsproblem)",
      ],
    },
    {
      area: "Free",
      version: "1.5.0 - 1.5.1",
      date: "17.07.2026",
      items: [
        "Das Radio-Feld kann seine Auswahl als anklickbare Buttons statt als Liste darstellen. Die aktive Option füllt sich mit der Primärfarbe des Formulars. Technisch bleiben es echte Radio-Inputs, Tastatur und Screenreader funktionieren unverändert",
        "Button-Form wählbar: Pille, abgerundet oder eckig",
      ],
    },
    {
      area: "Free",
      version: "1.4.0 - 1.4.4",
      date: "14.07.2026",
      items: [
        "Formulare in Popups und Modals senden jetzt ohne Seitenreload. Erfolgsmeldung und Validierungsfehler erscheinen direkt im Popup, es bleibt offen und die Besucherin sieht das Ergebnis. Alle serverseitigen Schutzmechanismen laufen unverändert mit",
        "Wichtiger Fix: Formulare außerhalb des Seiteninhalts, etwa im Footer, in einem Header-Template-Teil oder in einem seitenweiten Popup, wurden beim Absenden still verworfen. Sie werden jetzt zuverlässig gefunden und gespeichert",
        "Die Gültigkeit des Spam-Tokens beträgt 30 Minuten statt 5. Wer eine lange Seite liest oder ein Popup erst später öffnet, wird nicht mehr grundlos abgewiesen",
      ],
    },
    {
      area: "Free",
      version: "1.3.0 - 1.3.1",
      date: "03.07.2026",
      items: [
        "Doppelklick-Schutz: Doppelklick, Zurück-Taste oder parallele Requests erzeugen keine doppelten Einsendungen, Mails oder Zahlungen mehr",
        "Neuer Erweiterungspunkt für Add-ons zur Darstellung von Feldwerten im Admin (Flinkform Pro zeigt damit Upload-Dateien als Download-Links)",
      ],
    },
    {
      area: "Pro",
      version: "1.2.0 - 1.2.1",
      date: "05.07.2026",
      items: [
        "Stripe Payment Element: Apple Pay, Google Pay und Link zusätzlich zu Kreditkarte und SEPA-Lastschrift",
        "SEPA-Lastschrift mit automatischer Bestätigung per Stripe-Webhook",
        "Multi-Datei-Upload: bis zu 10 Dateien pro Feld mit Größen-Check vor dem Absenden",
        "Berechnungsfelder: Live-Vorschau im Browser, serverseitig sicher nachgerechnet",
        "CSV-Export um Zahlungsspalten erweitert (Status, Betrag, Währung)",
      ],
    },
    {
      area: "Free",
      version: "1.1.0 - 1.2.1",
      date: "30.06.2026",
      items: [
        "Consent-Feld wird serverseitig zuverlässig als Pflichtfeld erzwungen",
        "Datenschutz-Link als Platzhalter direkt im Einwilligungstext",
        "Neu gestaltete Fehlermeldungen mit Inline-Icons und sanfter Animation",
        "Seiten mit Formular werden vom Full-Page-Caching ausgenommen, das verhindert abgelaufene Spam-Tokens",
      ],
    },
  ],
  changelogFooterPre: "Das vollständige Changelog aller Versionen steht im ",
  changelogFooterLinkText: "WordPress.org-Verzeichnis",
  changelogFooterPost: ".",
} as const;

export type RoadmapDict = Widen<typeof roadmap>;
