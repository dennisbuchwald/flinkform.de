/**
 * Deutsche Dictionaries werden mit `as const` geschrieben (bessere DX,
 * literale Typen beim Lesen). Für den Typ, den die EN-Übersetzung erfüllen
 * muss, wollen wir aber keine deutschen String-Literale als Vorgabe -
 * Widen<T> ersetzt jedes literale Primitive durch seinen Basistyp, behält
 * aber Struktur, Schlüssel und Arrays/Tupel-Form bei. So meckert
 * TypeScript bei fehlenden oder falsch geformten Keys in content/en/*.ts,
 * ohne die exakten deutschen Texte vorzuschreiben.
 */
export type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          T extends (...args: any[]) => any
          ? T
          : T extends object
            ? { [K in keyof T]: Widen<T[K]> }
            : T;
