/**
 * "Frag ChatGPT"-Link im Header: öffnet ChatGPT mit einem vorbereiteten
 * Prompt. ChatGPT liest dann die Website selbst, deshalb verweist der Prompt
 * auf llms.txt und das Fact-Sheet, wo die belegten Fakten stehen.
 *
 * Der Prompt fragt bewusst auch, wann ein anderes Plugin besser passt. Eine
 * Antwort mit echten Grenzen ist glaubwürdiger als eine Lobeshymne und passt
 * zu "Ehrlich verglichen". Beeinflussen, was ChatGPT antwortet, können wir
 * nur über die Inhalte der Seite, nicht über den Prompt.
 */
export function chatGptUrl(prompt: string): string {
  return `https://chatgpt.com/?${new URLSearchParams({ prompt }).toString()}`;
}
