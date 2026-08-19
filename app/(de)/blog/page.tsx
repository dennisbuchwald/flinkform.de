import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import { SITE_URL, breadcrumbSchema } from "@/lib/site";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog: WordPress-Formulare, DSGVO und Payments",
  description:
    "Der Flinkform-Blog: fundierte Artikel zu WordPress-Formularen, DSGVO-konformem Spam-Schutz, Contact Form 7, Stripe-Zahlungen und dem Block-Editor.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Flinkform", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-5 font-(family-name:--font-display) text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">
            Formulare, DSGVO und WordPress
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Fundierte Artikel statt Marketing-Geschwurbel: Rechtslage mit
            Quellen, Technik mit Details, Vergleiche mit Belegen.
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card card-hover flex flex-col p-7"
            >
              <div className="flex items-center gap-3 text-xs text-ink-muted">
                <span className="rounded-full bg-line/60 px-3 py-1 font-bold text-ink-soft">
                  {post.tag}
                </span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h2 className="mt-4 text-lg font-bold leading-snug">
                {post.title}
              </h2>
              <p className="mt-3 grow text-[0.9rem] leading-relaxed text-ink-soft">
                {post.description}
              </p>
              <span className="mt-5 text-sm font-semibold text-brand-violet">
                Artikel lesen · {post.readingMinutes} Min.
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
