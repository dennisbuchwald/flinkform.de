import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Website flinkform.de: keine Cookies, kein Tracking, keine externen Dienste.",
  alternates: { canonical: `${SITE_URL}/datenschutz` },
  robots: { index: false },
};

/**
 * Vorformuliert passend zur tatsächlichen (minimalen) Datenverarbeitung
 * dieser Website. PLATZHALTER: Verantwortlicher + Hosting-Abschnitt von
 * Dennis prüfen/vervollständigen, bevor die Seite live geht.
 */
export default function DatenschutzPage() {
  return (
    <Section>
      <h1 className="font-(family-name:--font-display) text-3xl font-extrabold tracking-tight">
        Datenschutzerklärung
      </h1>
      <div className="prose-flink mt-8">
        <h2 className="!mt-0">Das Wichtigste vorab</h2>
        <p>
          Diese Website ist bewusst datensparsam gebaut: Sie setzt{" "}
          <strong>keine Cookies</strong>, nutzt{" "}
          <strong>kein Tracking und keine Analyse-Dienste</strong> und lädt{" "}
          <strong>keine Inhalte von Drittservern</strong> (keine externen
          Schriftarten, Skripte oder Einbettungen). Es gibt hier kein
          Kontaktformular und keine Kommentarfunktion. Deshalb braucht diese
          Website auch keinen Cookie-Banner.
        </p>

        <h2>Verantwortlicher</h2>
        <p>
          [PLATZHALTER: Name / Firmierung]
          <br />
          [PLATZHALTER: Anschrift]
          <br />
          E-Mail: [PLATZHALTER: E-Mail-Adresse]
        </p>

        <h2>Hosting und Server-Logfiles</h2>
        <p>
          Beim Aufruf dieser Website verarbeitet der Webserver technisch
          notwendige Daten, um die Seiten auszuliefern: IP-Adresse, Datum
          und Uhrzeit des Zugriffs, aufgerufene URL, Referrer-URL,
          verwendeter Browser und Betriebssystem. Diese Daten fallen bei
          jedem Website-Besuch an und werden vom Hosting-Anbieter in
          Server-Logfiles gespeichert.
        </p>
        <p>
          [PLATZHALTER: Hosting-Anbieter benennen (z. B. Vercel Inc. oder
          deutscher Hoster) inklusive Sitz, Auftragsverarbeitungsvertrag und
          ggf. Angaben zur Drittlandsübermittlung. Log-Aufbewahrungsdauer
          ergänzen.]
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO: unser berechtigtes
          Interesse an der sicheren und stabilen Bereitstellung der Website.
        </p>

        <h2>Kontakt per E-Mail</h2>
        <p>
          Wenn du uns per E-Mail kontaktierst (etwa über die auf der
          Pro-Seite vorbereitete E-Mail-Anfrage, die sich in deinem eigenen
          Mail-Programm öffnet), verarbeiten wir die von dir übermittelten
          Angaben zur Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6
          Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1
          lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die
          Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen
          Aufbewahrungspflichten bestehen.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Du hast nach der DSGVO das Recht auf Auskunft (Art. 15),
          Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
          Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und
          Widerspruch gegen die Verarbeitung (Art. 21). Außerdem hast du das
          Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
        </p>

        <h2>Keine externen Dienste</h2>
        <p>
          Zur Transparenz auch als Negativ-Liste: Diese Website nutzt kein
          Google Analytics, kein Google Fonts CDN, kein reCAPTCHA, keine
          Social-Media-Plugins, keine YouTube-Einbettungen, keine
          Werbenetzwerke und keine Newsletter-Pixel. Alle Schriftarten und
          Skripte werden vom eigenen Server geladen.
        </p>

        <p>
          <em>Stand: Juli 2026</em>
        </p>
      </div>
    </Section>
  );
}
