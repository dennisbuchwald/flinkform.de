import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbNode, graph } from "@/lib/schema";
import { Section, Eyebrow } from "@/components/Section";
import { LEGAL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Was flinkform.de mit deinen Daten macht: kein Tracking, keine Werbe-Cookies, keine externen Skripte. Nur Server-Logs beim Hoster und ein funktionaler Cookie für die Sprachwahl.",
  alternates: { canonical: `${SITE_URL}/datenschutz` },
};

export default function DatenschutzPage() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbNode([
            { name: "Flinkform", path: "/" },
            { name: "Datenschutz", path: "/datenschutz" },
          ]),
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Rechtliches</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            Datenschutzerklärung
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Diese Website lädt nichts von fremden Servern, misst nichts und
            setzt keine Werbe-Cookies. Es gibt entsprechend wenig zu erklären,
            und genau das steht hier.
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section className="!py-10">
        <div className="prose-flink">
          <h2 className="!mt-0">Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            {LEGAL.company}, Inhaber {LEGAL.owner}
            <br />
            {LEGAL.street}, {LEGAL.postalCode} {LEGAL.city},{" "}
            {LEGAL.countryName}
            <br />
            Telefon: <a href={`tel:${LEGAL.phoneHref}`}>{LEGAL.phone}</a>
            <br />
            E-Mail: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
          </p>
          <p>
            Die vollständigen Anbieterangaben stehen im{" "}
            <Link href="/impressum">Impressum</Link>. Einen
            Datenschutzbeauftragten gibt es nicht, weil die gesetzlichen
            Schwellen für die Benennungspflicht nicht erreicht werden.
          </p>

          <h2>Was diese Website nicht tut</h2>
          <ul>
            <li>Kein Analyse- oder Tracking-Werkzeug, keine Statistik-Pixel.</li>
            <li>
              Keine Werbenetzwerke, kein Remarketing, keine Profilbildung.
            </li>
            <li>
              Keine Inhalte von fremden Servern: Schriftarten, Bilder und
              Skripte liegen alle auf dieser Domain. Es gibt kein eingebettetes
              Video, keine Karte, kein Social-Media-Widget.
            </li>
            <li>
              Kein Cookie-Banner, weil außer dem unten beschriebenen
              funktionalen Cookie nichts gesetzt wird.
            </li>
          </ul>

          <h2>Server-Logs beim Hoster</h2>
          <p>
            Die Website wird bei {LEGAL.host} gehostet und über deren
            europäische Standorte ausgeliefert. Beim Abruf einer Seite fallen
            beim Hoster technische Zugriffsdaten an, die für die Auslieferung
            und den sicheren Betrieb nötig sind: IP-Adresse, Zeitpunkt der
            Anfrage, angeforderte Adresse, übertragene Datenmenge, Statuscode
            sowie die vom Browser gemeldete Kennung (User-Agent) und, sofern
            übermittelt, die verweisende Seite.
          </p>
          <p>
            Rechtsgrundlage ist das berechtigte Interesse an einem
            funktionsfähigen und sicheren Angebot (Art. 6 Abs. 1 lit. f DSGVO).
            Diese Daten werden nicht mit anderen Quellen zusammengeführt und
            nicht zur Wiedererkennung einzelner Personen verwendet. Der Hoster
            hat seinen Sitz in den USA, eine Verarbeitung außerhalb der EU ist
            deshalb nicht ausgeschlossen. Wie {LEGAL.host} mit diesen Daten
            umgeht, steht in{" "}
            <a href={LEGAL.hostPrivacyUrl}>deren Datenschutzerklärung</a>.
          </p>

          <h2>Sprachwahl (funktionaler Cookie)</h2>
          <p>
            Diese Website gibt es auf Deutsch und Englisch. Wenn du die Sprache
            umschaltest, wird deine Wahl in einem Cookie namens{" "}
            <code>ff_locale</code> gespeichert, damit du beim nächsten Besuch
            direkt in deiner Sprache landest. Das Cookie enthält nur den Wert{" "}
            <code>de</code> oder <code>en</code>, keine Kennung und keine
            personenbezogenen Daten. Es wird nicht an Dritte übermittelt und
            nicht für Statistik oder Werbung genutzt.
          </p>
          <p>
            Für den Zugriff auf dieses Cookie ist keine Einwilligung nötig,
            weil es allein dazu dient, den von dir ausdrücklich gewünschten
            Dienst bereitzustellen (§ 25 Abs. 2 Nr. 2 TDDDG). Du kannst es
            jederzeit im Browser löschen.
          </p>
          <p>
            Beim allerersten Aufruf der Startseite, solange noch keine
            Sprachwahl vorliegt, wird die vom Hoster mitgelieferte
            Länderkennung deiner Verbindung ausgewertet, um die passende
            Sprachversion vorzuschlagen. Diese Kennung wird nur für diesen
            einen Moment ausgewertet und weder gespeichert noch protokolliert.
          </p>

          <h2>Kontaktaufnahme</h2>
          <p>
            Diese Website betreibt kein Kontaktformular, das Daten an einen
            Server sendet. Das Vormerk-Formular auf der{" "}
            <Link href="/pro">Pro-Seite</Link> öffnet ausschließlich dein
            eigenes E-Mail-Programm mit einer vorbereiteten Nachricht. Es
            werden dabei keine Eingaben an uns übertragen, solange du die Mail
            nicht selbst absendest.
          </p>
          <p>
            Wenn du uns per E-Mail schreibst, verarbeiten wir deine Angaben zur
            Bearbeitung der Anfrage und für Anschlussfragen. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen, sonst
            unser berechtigtes Interesse an der Beantwortung (Art. 6 Abs. 1
            lit. f DSGVO). Wir löschen die Nachrichten, sobald sie nicht mehr
            gebraucht werden und keine gesetzlichen Aufbewahrungsfristen
            entgegenstehen.
          </p>

          <h2>Das Plugin selbst</h2>
          <p>
            Diese Erklärung betrifft nur die Website flinkform.de. Das
            WordPress-Plugin Flinkform verarbeitet Daten ausschließlich auf der
            Website, auf der es installiert ist. Wir als Hersteller bekommen
            davon nichts zu sehen: Das Plugin sendet keine Formulardaten an
            uns, speichert ab Werk keine IP-Adressen und bindet im kostenlosen
            Core keine externen Dienste ein.
          </p>

          <h2>Deine Rechte</h2>
          <p>
            Du hast das Recht auf Auskunft über die zu deiner Person
            gespeicherten Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16),
            auf Löschung (Art. 17), auf Einschränkung der Verarbeitung
            (Art. 18), auf Datenübertragbarkeit (Art. 20) sowie das Recht,
            einer Verarbeitung auf Grundlage berechtigter Interessen zu
            widersprechen (Art. 21). Eine formlose E-Mail an{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> genügt.
          </p>
          <p>
            Außerdem steht dir ein Beschwerderecht bei einer
            Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO). Zuständig ist der
            Landesbeauftragte für den Datenschutz und die Informationsfreiheit
            Baden-Württemberg.
          </p>

          <h2>Änderungen dieser Erklärung</h2>
          <p>
            Ändert sich etwas an der Website oder an der Rechtslage, passen wir
            diese Erklärung an. Es gilt jeweils die hier veröffentlichte
            Fassung.
          </p>
        </div>
      </Section>
    </>
  );
}
