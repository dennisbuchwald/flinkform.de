import type { ReactNode } from "react";

/**
 * Die zitierfähige Kurzantwort direkt unter einer Frage-Überschrift (GEO).
 *
 * Zwei bis vier Sätze, die die Überschrift für sich allein beantworten - das
 * ist der Absatz, den eine KI-Antwort übernimmt. Bewusst kein Kasten und keine
 * eigene Rolle, nur leicht abgesetzt: im Roh-HTML bleibt es ein ganz normaler
 * Absatz.
 *
 * Aus MDX kommt der Text bereits als <p> herein (Markdown-Absatz), aus einem
 * Content-Dictionary als String. Deshalb der Typ-Check: ein <p> im <p> wäre
 * ungültiges HTML.
 */
export default function AnswerBlock({ children }: { children: ReactNode }) {
  if (typeof children === "string") {
    return <p className="answer-block">{children}</p>;
  }
  return <div className="answer-block">{children}</div>;
}
