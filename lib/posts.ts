export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  readingMinutes: number;
};

export const posts: Post[] = [
  {
    slug: "recaptcha-dsgvo-rechtsrisiko",
    title:
      "reCAPTCHA und die DSGVO: Warum dein Kontaktformular ein Rechtsrisiko ist",
    description:
      "BVwG-Urteil, zwei CNIL-Bußgelder, klare Worte vom BayLDA: Google reCAPTCHA ohne Einwilligung ist rechtswidrig. Was das für WordPress-Formulare bedeutet und wie Spam-Schutz ohne US-Dienst funktioniert.",
    date: "2026-07-03",
    tag: "DSGVO",
    readingMinutes: 8,
  },
  {
    slug: "contact-form-7-feature-freeze",
    title:
      "Contact Form 7 im Feature Freeze: Was WordPress-Nutzer jetzt wissen müssen",
    description:
      "Version 6.2 ist die letzte mit neuen Funktionen. Was der Wartungsmodus für über 10 Millionen Websites bedeutet, welche Optionen es gibt und wann ein Wechsel sinnvoll ist.",
    date: "2026-07-03",
    tag: "WordPress",
    readingMinutes: 6,
  },
  {
    slug: "stripe-zahlungen-wordpress-formular",
    title:
      "Stripe-Zahlungen im WordPress-Formular: Kreditkarte, SEPA und Apple Pay ohne Shop-System",
    description:
      "Anzahlungen, Buchungen und Verkäufe direkt im Formular abwickeln, ohne WooCommerce. Wie das Stripe Payment Element funktioniert, was bei SEPA zu beachten ist und wie du es in WordPress einbaust.",
    date: "2026-07-03",
    tag: "Payments",
    readingMinutes: 7,
  },
];

export function getPost(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unbekannter Blog-Post: ${slug}`);
  return post;
}
