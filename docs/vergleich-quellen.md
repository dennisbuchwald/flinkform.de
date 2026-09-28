# Quellen der Vergleichsaussagen

Vergleichende Werbung muss nach § 6 UWG objektiv richtig und nachprüfbar sein.
Jede Aussage über einen Wettbewerber auf flinkform.de braucht deshalb hier einen
Beleg. Was hier nicht steht, gehört nicht in eine Vergleichstabelle.

**Stand der Prüfung: 28.09.2026.** Vor jeder Änderung an einer Vergleichsseite
die betroffene Zeile hier neu prüfen und das Datum anpassen.

Regel für Performance-Aussagen: Behauptungen über fremdes Frontend-JS
("schwerer", "React-basiert", "lädt schwere Assets") werden nur mit eigener
Messung gemacht. Ohne Messung fliegen sie raus. Einzige Ausnahme ist Contact
Form 7, weil der Hersteller das Verhalten selbst dokumentiert.

---

## Spam-Schutz ab Werk (ohne externen Dienst)

| Anbieter | Befund | Quelle |
|---|---|---|
| Contact Form 7 | Kein Honeypot eingebaut. Hersteller: "deployment of Turnstile or reCAPTCHA is a must" | [contactform7.com FAQ](https://contactform7.com/faq/i-get-spam-messages-through-my-contact-forms-how-can-i-stop-them/) |
| WPForms | Anti-Spam-Token ab Werk aktiv, auch in Lite, ohne externen Dienst | [wpforms.com/features/spam-protection](https://wpforms.com/features/spam-protection/) |
| Gravity Forms | Honeypot eingebaut, pro Formular einzuschalten | [gravityforms.com Blog 2.7](https://www.gravityforms.com/blog/gravity-forms-2-7-honeypot/), [docs](https://docs.gravityforms.com/spam/) |
| SureForms | Honeypot eingebaut, in den Einstellungen einzuschalten | [sureforms.com/docs/honeypot-security](https://sureforms.com/docs/honeypot-security/) |
| Fluent Forms | Honeypot eingebaut, global einzuschalten | [fluentforms.com Doku](https://fluentforms.com/docs/spam-protection-with-honeypot-and-google-recaptcha-in-fluent-forms/) |
| Formidable Forms | Honeypot und JavaScript-Token ab Werk in jedem Formular aktiv | [formidableforms.com/knowledgebase/add-spam-protection](https://formidableforms.com/knowledgebase/add-spam-protection/) |
| Ninja Forms | Honeypot ab Werk in jedem Formular, ohne Einstellung | [ninjaforms.com Blog](https://ninjaforms.com/blog/free-antispam-features-for-wordpress-forms/) |
| Forminator | Honeypot eingebaut, pro Formular einzuschalten | [wpmudev.com Blog](https://wpmudev.com/blog/prevent-form-comment-spam-forminator/) |
| Typeform | reCAPTCHA erst ab Talent (169 $/Monat) | [typeform.com/pricing](https://www.typeform.com/pricing/) |

**Was daraus folgt:** "Nur Flinkform schützt ohne US-Dienst" stimmt nicht mehr.
Der echte, belegbare Unterschied ist die Tiefe ab Werk (Honeypot + signierter
Zeit-Check + Proof-of-Work, ohne Einstellung) und dass Flinkform auch für
stärkeren Schutz keinen externen Dienst braucht.

## IP-Speicherung ab Werk

| Anbieter | Befund | Quelle |
|---|---|---|
| Contact Form 7 | Speichert selbst keine Einsendungen (erst mit Zusatz-Plugin Flamingo) | [contactform7.com](https://contactform7.com/save-submitted-messages-with-flamingo/) |
| WPForms | Bezahlversionen speichern IP und User-Agent ab Werk, abschaltbar über "Disable User Details". Lite speichert keine IP (und keine Einsendungen) | [wpforms.com GDPR-Guide](https://wpforms.com/wordpress-gdpr-compliance-for-forms/) |
| Gravity Forms | Speichert IP ab Werk, abschaltbar pro Formular ("Prevent the storage of IP addresses") | [docs.gravityforms.com/personal-data-settings](https://docs.gravityforms.com/personal-data-settings/) |
| SureForms | IP-Logging ab Werk aus | [sureforms.com/docs/ip-logging](https://sureforms.com/docs/ip-logging/) |
| Fluent Forms | Erfasst IP ab Werk, abschaltbar | [developers.fluentforms.com](https://developers.fluentforms.com/hooks/filters/submission/) |
| Formidable Forms | Speichert IP ab Werk, abschaltbar über "Disable storing IPs" | [formidableforms.com/knowledgebase/gdpr-settings](https://formidableforms.com/knowledgebase/gdpr-settings/) |
| Forminator | Erfasst IP ab Werk, abschaltbar in den Privacy-Einstellungen. Die frühere Angabe "12 Monate Aufbewahrung" ließ sich nicht belegen (WPMU-Doku sperrt Abrufe, Quellen widersprechen sich) und wurde entfernt | Zitat aus der WPMU-DEV-Doku |
| Elementor Forms | Speichert IP, User-Agent, Datum und URL als "system-captured fields" | [elementor.com/help/form-submissions](https://elementor.com/help/form-submissions/), [GitHub #14285](https://github.com/elementor/elementor/issues/14285) |
| Ninja Forms | Keine Doku-Aussage, dass IP ab Werk gespeichert wird | [ninjaforms.com GDPR](https://ninjaforms.com/docs/gdpr-compliance-ninja-forms/) |
| Jotform | Erfasst IP immer, laut Support nicht abschaltbar, nur die Spalte lässt sich ausblenden | [jotform.com/answers](https://www.jotform.com/answers/4686253-how-to-disable-capturing-ip-addresses) |

## Kostenlose Funktionen und Preise (reguläre Jahrespreise, nicht Erstjahr)

| Anbieter | Befund | Quelle |
|---|---|---|
| WPForms | Basic 99 $ (1 Site), Plus 199 $ (3), Pro 399 $ (5), Elite 599 $ (unbegrenzt). Lite zeigt keine Einsendungen im Dashboard; Lite Connect sichert sie (opt-in) verschlüsselt auf WPForms-Servern, sichtbar erst nach Upgrade | [wpforms.com/pricing](https://wpforms.com/pricing/), [Lite Connect](https://wpforms.com/docs/how-to-use-lite-connect-for-wpforms/) |
| Gravity Forms | Basic 59 $ (1), Pro 159 $ (3), Elite 259 $ (unbegrenzt). Keine kostenlose Version | [gravityforms.com/pricing](https://www.gravityforms.com/pricing/) |
| SureForms | Ab 59 $/Jahr. Free speichert Einsendungen, aber Multi-Step und bedingte Logik sind Bezahlfunktionen | [wordpress.org/plugins/sureforms](https://wordpress.org/plugins/sureforms/), [Free vs Pro](https://sureforms.com/wordpress-tutorials/sureforms-free-vs-pro/) |
| Fluent Forms | Pro: Single 63 $ (1), Agency 127 $ (5), Unlimited 239 $ | [fluentforms.com/pricing](https://fluentforms.com/pricing/) |
| Ninja Forms | Plus 99 $ (3), Pro 199 $ (20), Elite 499 $ (unbegrenzt). Bedingte Logik, Multi-Step und Datei-Upload erst ab Plus | [ninjaforms.com/pricing](https://ninjaforms.com/pricing/) |
| Formidable Forms | Basic 79 $ (1), Plus 199 $ (3), Business 399 $ (7), Elite 599 $. Rechner erst ab Business | [formidableforms.com/pricing](https://formidableforms.com/pricing/) |
| Typeform | Basic 39 $, Plus 79 $, Business 129 $, Talent 169 $ pro Monat (monatliche Zahlung) | [typeform.com/pricing](https://www.typeform.com/pricing/) |
| Jotform | Starter kostenlos mit 100 Einsendungen im Monat | [jotform.com/pricing](https://www.jotform.com/pricing/) |

## Contact Form 7

| Aussage | Quelle |
|---|---|
| Feature Freeze: Version 6.2 ist die letzte mit neuen Funktionen, danach nur Wartung. Angekündigt von Takayuki Miyoshi auf der WordCamp Asia 2026 | [wpbeginner.com](https://www.wpbeginner.com/news/contact-form-7-freezes-new-features-what-wordpress-users-should-do-next/) |
| Lädt in den Standard-Einstellungen JavaScript und CSS auf jeder Seite | [contactform7.com](https://contactform7.com/loading-javascript-and-stylesheet-only-when-it-is-necessary/) |

## reCAPTCHA und DSGVO

| Aussage | Quelle |
|---|---|
| Seit 02.04.2026 läuft reCAPTCHA als Google-Cloud-Dienst, Google ist Auftragsverarbeiter nach Art. 28 DSGVO (Google Cloud DPA). Einsatz auf Basis berechtigten Interesses gilt damit als vertretbar | [datenschutzticker.de](https://www.datenschutzticker.de/2026/03/google-recaptcha-was-die-neue-auftragsverarbeitung-fuer-websitebetreiber-bedeutet/), [proliance.ai](https://www.proliance.ai/blog/recaptcha-datenschutz-ist-die-nutzung-dsgvo-konform) |
| Offen bleiben die Übermittlung in die USA und die Erforderlichkeit. Das BVwG Österreich hat 2024 entschieden, dass reCAPTCHA nicht technisch notwendig ist | dieselben Quellen |
